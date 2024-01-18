using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RecetteApi.Models
{
    public class Ingredient
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Nom { get; set; }

        public bool Filterable { get; set; }

        public IngredientCategoryEnum Category { get; set; }
    }
}
