using System.Text.Json.Serialization;

namespace RecetteApi.Models
{
    public class Ingredient : IDbModel
    {

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

    }
}
