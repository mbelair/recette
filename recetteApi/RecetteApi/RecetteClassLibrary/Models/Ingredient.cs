using System.Text.Json.Serialization;

namespace RecetteClassLibrary.Models
{
    public class Ingredient : IDbModel
    {
        public const string DB_TableName = "Ingredient";
        public const string DB_Id = "Id";
        public const string DB_Nom = "Nom";
        public const string DB_Category = "Category";


        public int Id { get; set; }

        public string? Nom { get; set; }


        [JsonConverter(typeof(JsonStringEnumConverter))]
        public IngredientCategoryEnum Category { get; set; }

        public object toDbModel()
        {
            return new
            {
                this.Nom,
                Category = this.Category.ToString(),
            };
        }

        public Ingredient() { }

        public Ingredient(dynamic dbResult)
        {
            this.Id = dbResult.IngredientId;
            this.Nom = dbResult.IngredientNom;
            this.Category = Enum.Parse(typeof(IngredientCategoryEnum), dbResult.IngredientCategory);
        }

        public static List<string> getSelectcolumns()
        {
            return new List<string>
            {
                $"{DB_TableName}.{DB_Id} as {DB_TableName}{DB_Id}",
                $"{DB_TableName}.{DB_Nom} as {DB_TableName}{DB_Nom}",
                $"{DB_TableName}.{DB_Category} as {DB_TableName}{DB_Category}",
            };
        }
    }
}
