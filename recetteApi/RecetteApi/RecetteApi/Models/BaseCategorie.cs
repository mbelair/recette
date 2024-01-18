using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RecetteApi.Models
{
    public class BaseCategorie
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string? Nom { get; set; }

        public int Ordre { get; set; }

        public bool IsDefaultCategory { get; set; }
    }
}
