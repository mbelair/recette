using RecetteClassLibrary.Models;
using SqlKata.Execution;

namespace RecetteApi.DbFacade
{
    public class DatabaseController
    {

        private readonly QueryFactory db;

        public DatabaseController(QueryFactory db)
        {
            this.db = db;
        }

        #region Ingredient
        public async Task<IEnumerable<Ingredient>> GetAllIngredientsAsync()
        {
            return await db.Query("Ingredient").Select("Id", "Nom", "Category").GetAsync<Ingredient>();
        }

        public async Task<IEnumerable<IngredientList>> GetAllIngredientsWithRecetteCountAsync()
        {
            IEnumerable<dynamic> ingredient = await db.Query("Ingredient").Select(Ingredient.GetSelectcolumns())
                .SelectRaw($"count(distinct \"{Recette.DB_TableName}\".\"{Recette.DB_Id}\") as \"recetteCount\"")
                .LeftJoin(IngredientRecette.DB_TableName, $"{Ingredient.DB_TableName}.{Ingredient.DB_Id}", $"{IngredientRecette.DB_TableName}.{IngredientRecette.DB_Ingredient_Id}")
                .LeftJoin(CategorieIngredient.DB_TableName, $"{IngredientRecette.DB_TableName}.{IngredientRecette.DB_CategorieIngredient_Id}", $"{CategorieIngredient.DB_TableName}.{CategorieIngredient.DB_Id}")
                .LeftJoin(Recette.DB_TableName, $"{CategorieIngredient.DB_TableName}.{CategorieIngredient.DB_Recette_Id}", $"{Recette.DB_TableName}.{Recette.DB_Id}")
                .GroupBy($"{Ingredient.DB_TableName}.{Ingredient.DB_Id}")
                .GetAsync();

            return ingredient.Select(x => new IngredientList(x));
        }

        public async Task<Ingredient> GetIngredientByIdAsync(int Id)
        {
            return await db.Query("Ingredient").Select("Id", "Nom", "Category").Where("Id", Id).FirstOrDefaultAsync<Ingredient>();
        }

        public async Task CreateIngredient(Ingredient newIngredient)
        {
            await db.Query("Ingredient").InsertAsync(newIngredient.toDbModel());
        }

        public async Task UpdateIngredient(Ingredient updatedIngredient)
        {
            await db.Query("Ingredient").Where("Id", updatedIngredient.Id).UpdateAsync(updatedIngredient.toDbModel());
        }

        public async Task DeleteIngredient(int id)
        {
            await db.Query("Ingredient").Where("Id", id).DeleteAsync();
        }
        #endregion
        #region Recette
        public async Task<IEnumerable<Recette>> GetAllRecettesAsync()
        {
            IEnumerable<Recette> recettes = await db.Query("Recette").GetAsync<Recette>();
            foreach (Recette recette in recettes)
            {
                recette.Tags = Tag.fromDynamic(await db.Query(Tag.DB_TableName)
                                                      .Select(Tag.getSelectcolumns())
                                                      .LeftJoin("TagRecette", "TagRecette.Tag_Id", $"{Tag.DB_TableName}.{Tag.DB_Id}")
                                                      .Where($"TagRecette.Recette_Id", recette.Id)
                                                      .GetAsync());
            }
            return recettes;
        }

        public async Task<Recette> GetRecetteAsync(int Id)
        {
            Recette recette = await db.Query(Recette.DB_TableName)
                                          .Where($"{Recette.DB_TableName}.{Recette.DB_Id}", Id)
                                          .FirstAsync<Recette>();

            //add categoriePreparation
            IEnumerable<dynamic> preparation = await db.Query(CategoriePreparation.DB_TableName)
                                                           .Select(CategoriePreparation.getSelectcolumns())
                                                           .Select(Preparation.getSelectcolumns())
                                                           .LeftJoin(Preparation.DB_TableName, $"{Preparation.DB_TableName}.{Preparation.DB_CategoriePreparation_Id}", $"{CategoriePreparation.DB_TableName}.{CategoriePreparation.DB_Id}")
                                                           .Where($"{CategoriePreparation.DB_TableName}.{CategoriePreparation.DB_Recette_Id}", Id)
                                                           .GetAsync();


            //add categorieIngredients
            IEnumerable<dynamic> ingredient = await db.Query(CategorieIngredient.DB_TableName)
                                                        .Select(CategorieIngredient.getSelectcolumns())
                                                        .Select(IngredientRecette.getSelectcolumns())
                                                        .Select(Ingredient.GetSelectcolumns())
                                                        .LeftJoin(IngredientRecette.DB_TableName, $"{IngredientRecette.DB_TableName}.{IngredientRecette.DB_CategorieIngredient_Id}", $"{CategorieIngredient.DB_TableName}.{CategorieIngredient.DB_Id}")
                                                        .LeftJoin(Ingredient.DB_TableName, $"{Ingredient.DB_TableName}.{Ingredient.DB_Id}", $"{IngredientRecette.DB_TableName}.{IngredientRecette.DB_Ingredient_Id}")
                                                        .Where($"{CategorieIngredient.DB_TableName}.{CategorieIngredient.DB_Recette_Id}", Id)
                                                        .GetAsync();

            IEnumerable<dynamic> tags = await db.Query(Tag.DB_TableName)
                                                       .Select(Tag.getSelectcolumns())
                                                       .LeftJoin("TagRecette", "TagRecette.Tag_Id", $"{Tag.DB_TableName}.{Tag.DB_Id}")
                                                       .Where($"TagRecette.Recette_Id", Id)
                                                       .GetAsync();


            recette.CategoriePreparation = CategoriePreparation.fromDynamic(preparation);
            recette.CategorieIngredient = CategorieIngredient.fromDynamic(ingredient);
            recette.Tags = Tag.fromDynamic(tags);

            return recette;
        }

        public async Task CreateRecette(Recette newRecette)
        {
            using (var tranaction = db.Connection.BeginTransaction())
            {
                newRecette.Date_creation = DateTime.UtcNow;
                int recetteId = await db.Query("Recette").InsertGetIdAsync<int>(newRecette.toDbModel());

                foreach (CategoriePreparation categoriePreparation in newRecette.CategoriePreparation)
                {
                    int categorieId = await db.Query("CategoriePreparation").InsertGetIdAsync<int>(categoriePreparation.toDbModel(recetteId));
                    foreach (Preparation preparation in categoriePreparation.Preparation)
                    {
                        await db.Query("Preparation").InsertAsync(preparation.toDbModel(categorieId));

                    }
                }

                foreach (CategorieIngredient categorieIngredient in newRecette.CategorieIngredient)
                {
                    int categorieId = await db.Query("CategorieIngredient").InsertGetIdAsync<int>(categorieIngredient.toDbModel(recetteId));
                    foreach (IngredientRecette ingredient in categorieIngredient.Ingredient)
                    {
                        await db.Query("IngredientRecette").InsertAsync(ingredient.toDbModel(categorieId));

                    }
                }

                foreach (Tag tag in newRecette.Tags)
                {
                    int tagId = tag.Id;
                    if (tagId == -1)
                    {
                        tagId = await db.Query("Tag").InsertGetIdAsync<int>(tag.toDbModel());
                    }
                    await db.Query("TagRecette").InsertAsync(new
                    {
                        Tag_Id = tagId,
                        Recette_Id = recetteId
                    });
                }

                tranaction.Commit();
            }
        }

        public async Task UpdateRecette(Recette recette)
        {
            using (var tranaction = db.Connection.BeginTransaction())
            {
                //delete everything
                await db.Query(Preparation.DB_TableName)
                         .WhereIn(Preparation.DB_CategoriePreparation_Id,
                             db.Query(CategoriePreparation.DB_TableName).Select(CategoriePreparation.DB_Id).Where(CategoriePreparation.DB_Recette_Id, recette.Id))
                         .DeleteAsync();
                await db.Query(CategoriePreparation.DB_TableName).Where(CategoriePreparation.DB_Recette_Id, recette.Id).DeleteAsync();

                await db.Query(IngredientRecette.DB_TableName)
                        .WhereIn(IngredientRecette.DB_CategorieIngredient_Id,
                            db.Query(CategorieIngredient.DB_TableName).Select(CategorieIngredient.DB_Id).Where(CategorieIngredient.DB_Recette_Id, recette.Id))
                        .DeleteAsync();
                await db.Query(CategorieIngredient.DB_TableName).Where(CategorieIngredient.DB_Recette_Id, recette.Id).DeleteAsync();
                await db.Query("TagRecette").Where("Recette_Id", recette.Id).DeleteAsync();


                await db.Query(Recette.DB_TableName).Where(Recette.DB_Id, recette.Id)
                      .UpdateAsync(new
                      {
                          recette.Nom,
                          recette.TempsPreparation,
                          recette.TempsCuisson,
                          Date_modification = DateTime.UtcNow,
                          recette.NombrePortion
                      });

                foreach (CategoriePreparation categoriePreparation in recette.CategoriePreparation)
                {
                    int categorieId = await db.Query("CategoriePreparation").InsertGetIdAsync<int>(categoriePreparation.toDbModel(recette.Id));
                    foreach (Preparation preparation in categoriePreparation.Preparation)
                    {
                        await db.Query("Preparation").InsertAsync(preparation.toDbModel(categorieId));

                    }
                }

                foreach (CategorieIngredient categorieIngredient in recette.CategorieIngredient)
                {
                    int categorieId = await db.Query("CategorieIngredient").InsertGetIdAsync<int>(categorieIngredient.toDbModel(recette.Id));
                    foreach (IngredientRecette ingredient in categorieIngredient.Ingredient)
                    {
                        await db.Query("IngredientRecette").InsertAsync(ingredient.toDbModel(categorieId));

                    }
                }

                foreach (Tag tag in recette.Tags)
                {
                    int tagId = tag.Id;
                    if (tagId == -1)
                    {
                        tagId = await db.Query("Tag").InsertGetIdAsync<int>(tag.toDbModel());
                    }
                    await db.Query("TagRecette").InsertAsync(new
                    {
                        Tag_Id = tagId,
                        Recette_Id = recette.Id
                    });
                }

                tranaction.Commit();
            }
        }
        #endregion
        #region Tag
        public async Task<IEnumerable<Tag>> GetAllTagsAsync()
        {
            return await db.Query("Tag").GetAsync<Tag>();
        }
        #endregion
    }
}
