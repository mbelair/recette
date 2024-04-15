namespace RecetteApi.Models
{
    public class CategorieIngredient : BaseCategorie
    {
        public const string DB_TableName = "CategorieIngredient";

        public const string DB_Id = "Id";
        public const string DB_Nom = "Nom";
        public const string DB_Ordre = "Ordre";
        public const string DB_IsDefaultCategory = "IsDefaultCategory";
        public const string DB_Recette_Id = "Recette_Id";

        public List<IngredientRecette> Ingredient { get; set; } = new List<IngredientRecette>();

        public static List<string> getSelectcolumns()
        {
            return new List<string>
            {
                $"{DB_TableName}.{DB_Id} as {DB_TableName}{DB_Id}",
                $"{DB_TableName}.{DB_Nom} as {DB_TableName}{DB_Nom}",
                $"{DB_TableName}.{DB_Ordre} as {DB_TableName}{DB_Ordre}",
                $"{DB_TableName}.{DB_IsDefaultCategory} as {DB_TableName}{DB_IsDefaultCategory}",
            };
        }
        public CategorieIngredient() { }
        public CategorieIngredient(dynamic dbResult)
        {
            this.Id = dbResult.CategorieIngredientId;
            this.Nom = dbResult.CategorieIngredientNom;
            this.Ordre = dbResult.CategorieIngredientOrdre;
            this.IsDefaultCategory = dbResult.CategorieIngredientIsDefaultCategory;
        }

        public static List<CategorieIngredient> fromDynamic(IEnumerable<dynamic> dbResult)
        {
            List<CategorieIngredient> toReturn = [];
            HashSet<int> ids = new HashSet<int>();
            foreach (dynamic result in dbResult)
            {
                int id = result.CategorieIngredientId;
                if (!ids.Contains(id))
                {
                    ids.Add(id);
                    toReturn.Add(new CategorieIngredient(result));
                }
                CategorieIngredient ci = toReturn.Find(x => x.Id == id)!;
                ci.Ingredient.Add(new IngredientRecette(result));
            }
            return toReturn;
        }
    }
}
