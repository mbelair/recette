using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace RecetteApi.Models
{
    public class Tag
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? Nom { get; set; }
    }
}
