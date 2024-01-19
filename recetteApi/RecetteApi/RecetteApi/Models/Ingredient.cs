using System.Text.Json.Serialization;

namespace RecetteApi.Models
{
    public class Ingredient
    {

        public int Id { get; set; }

        public string? Nom { get; set; }

        public bool Filterable { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public IngredientCategoryEnum Category { get; set; }

    }
}
