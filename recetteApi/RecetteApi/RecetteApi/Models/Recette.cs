using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RecetteApi.Models
{
    public class Recette
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string? Nom { get; set; }
        public int TempsPreparation { get; set; }
        public int TempsCuisson { get; set; }
        public DateTime Date_creation { get; set; }
        public DateTime Date_ouverture { get; set; }
        public List<Tag>? Tags { get; set; }
        public List<CategoriePreparation>? CategoriePreparation { get; set; }
        public List<CategorieIngredient>? CategorieIngredient { get; set; }
    }
}
