using RecetteApi.Models;
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

        public async Task<Ingredient> GetIngredientByIdAsync(int Id)
        {
            return await db.Query("Ingredient").Select("Id", "Nom", "Category").Where("Id", Id).FirstOrDefaultAsync<Ingredient>();
        }

        public async Task CreateIngredient(Ingredient newIngredient)
        {
            await db.Query("Ingredient").InsertAsync(newIngredient.toDbModel());
        }

        public async Task UpdateIngredient(int id, Ingredient updatedIngredient)
        {
            await db.Query("Ingredient").Where("Id", id).UpdateAsync(updatedIngredient.toDbModel());
        }

        public async Task DeleteIngredient(int id)
        {
            await db.Query("Ingredient").Where("Id", id).DeleteAsync();
        }
        #endregion
        #region Recette
        public async Task CreateRecette(Recette newRecette)
        {
            using (var tranaction = db.Connection.BeginTransaction())
            {
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
        #endregion
        #region Tag
        public async Task<IEnumerable<Tag>> GetAllTagsAsync()
        {
            return await db.Query("Tag").GetAsync<Tag>();
        }
        #endregion
    }
}
