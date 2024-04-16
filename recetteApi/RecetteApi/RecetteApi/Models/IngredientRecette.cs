namespace RecetteApi.Models
{
    public class IngredientRecette
    {
        public const string DB_TableName = "IngredientRecette";
        public const string DB_Ingredient_Id = "Ingredient_Id";
        public const string DB_CategorieIngredient_Id = "CategorieIngredient_Id";
        public const string DB_Quantite = "Quantite";
        public const string DB_Unite = "Unite";
        public const string DB_Ordre = "Ordre";
        public const string DB_Detail = "Detail";

        public int Ingredient_Id { get; set; }
        public Ingredient Ingredient { get; set; } = null!;
        public decimal? Quantite { get; set; }
        public string? Unite { get; set; }
        public int Ordre { get; set; }
        public string? Detail { get; set; }

        public object toDbModel(int categoryId)
        {
            return new
            {
                Ingredient_Id = this.Ingredient.Id,
                CategorieIngredient_Id = categoryId,
                this.Quantite,
                this.Unite,
                this.Ordre,
                this.Detail
            };
        }

        public IngredientRecette() { }
        public IngredientRecette(dynamic dbResult)
        {
            this.Ingredient_Id = dbResult.IngredientRecetteIngredient_Id;
            this.Quantite = dbResult.IngredientRecetteQuantite;
            this.Unite = dbResult.IngredientRecetteUnite;
            this.Ordre = dbResult.IngredientRecetteOrdre;
            this.Detail = dbResult.IngredientRecetteDetail;
            this.Ingredient = new Ingredient(dbResult);

        }

        public static List<string> getSelectcolumns()
        {
            return new List<string>
            {
                $"{DB_TableName}.{DB_Ingredient_Id} as {DB_TableName}{DB_Ingredient_Id}",
                $"{DB_TableName}.{DB_CategorieIngredient_Id} as {DB_TableName}{DB_CategorieIngredient_Id}",
                $"{DB_TableName}.{DB_Quantite} as {DB_TableName}{DB_Quantite}",
                $"{DB_TableName}.{DB_Unite} as {DB_TableName}{DB_Unite}",
                $"{DB_TableName}.{DB_Ordre} as {DB_TableName}{DB_Ordre}",
                $"{DB_TableName}.{DB_Detail} as {DB_TableName}{DB_Detail}",
            };
        }
    }
}
