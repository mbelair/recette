using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RecetteApi.Models
{
    public class IngredientRecette
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public Ingredient? Ingredient { get; set; }
        public decimal Quantite { get; set; }
        public string? Unite { get; set; }
        public int Ordre { get; set; }
        public string? Detail { get; set; }
    }
}
