using Npgsql;
using RecetteClassLibrary.Models;
using SqlKata.Compilers;
using SqlKata.Execution;
using System.Text.Json;

class Program
{
    static async Task Main(string[] args)
    {
        using (var connection = NpgsqlDataSource.Create("Username=postgres;Password=postgres;Host=localhost;Port=5432;Database=recette;"))
        {

            var compiler = new PostgresCompiler();

            using (var db = new QueryFactory(connection.OpenConnection(), compiler))
            {
                IEnumerable<Recette> recettes = await GetAllRecettesAsync(db);

                string json = JsonSerializer.Serialize(recettes, new JsonSerializerOptions
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
                File.WriteAllText("C:\\dev\\recette\\recette\\src\\assets\\recettes.json", json);

            }
        }
    }
    private static async Task<IEnumerable<Recette>> GetAllRecettesAsync(QueryFactory db)
    {
        IEnumerable<Recette> recettes = await db.Query(Recette.DB_TableName)
                                        .GetAsync<Recette>();
        foreach (var recette in recettes)
        {
            await AddRecetteDetails(db, recette);
        }
        return recettes;
    }
    private static async Task<Recette> AddRecetteDetails(QueryFactory db, Recette recette)
    {
        int Id = recette.Id;
        //add categoriePreparation
        IEnumerable<dynamic> preparationTask = await db.Query(CategoriePreparation.DB_TableName)
                                                       .Select(CategoriePreparation.getSelectcolumns())
                                                       .Select(Preparation.getSelectcolumns())
                                                       .LeftJoin(Preparation.DB_TableName, $"{Preparation.DB_TableName}.{Preparation.DB_CategoriePreparation_Id}", $"{CategoriePreparation.DB_TableName}.{CategoriePreparation.DB_Id}")
                                                       .Where($"{CategoriePreparation.DB_TableName}.{CategoriePreparation.DB_Recette_Id}", Id)
                                                       .GetAsync();


        //add categorieIngredients
        IEnumerable<dynamic> ingredientTask = await db.Query(CategorieIngredient.DB_TableName)
                                                    .Select(CategorieIngredient.getSelectcolumns())
                                                    .Select(IngredientRecette.getSelectcolumns())
                                                    .Select(Ingredient.getSelectcolumns())
                                                    .LeftJoin(IngredientRecette.DB_TableName, $"{IngredientRecette.DB_TableName}.{IngredientRecette.DB_CategorieIngredient_Id}", $"{CategorieIngredient.DB_TableName}.{CategorieIngredient.DB_Id}")
                                                    .LeftJoin(Ingredient.DB_TableName, $"{Ingredient.DB_TableName}.{Ingredient.DB_Id}", $"{IngredientRecette.DB_TableName}.{IngredientRecette.DB_Ingredient_Id}")
                                                    .Where($"{CategorieIngredient.DB_TableName}.{CategorieIngredient.DB_Recette_Id}", Id)
                                                    .GetAsync();

        IEnumerable<dynamic> tagsTask = await db.Query(Tag.DB_TableName)
                                                   .Select(Tag.getSelectcolumns())
                                                   .LeftJoin("TagRecette", "TagRecette.Tag_Id", $"{Tag.DB_TableName}.{Tag.DB_Id}")
                                                   .Where($"TagRecette.Recette_Id", Id)
                                                   .GetAsync();


        recette.CategoriePreparation = CategoriePreparation.fromDynamic(preparationTask);
        recette.CategorieIngredient = CategorieIngredient.fromDynamic(ingredientTask);
        recette.Tags = Tag.fromDynamic(tagsTask);

        return recette;
    }

}
