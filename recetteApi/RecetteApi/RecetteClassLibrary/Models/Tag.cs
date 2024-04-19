namespace RecetteClassLibrary.Models
{
    public class Tag
    {
        public const string DB_TableName = "Tag";

        public const string DB_Id = "Id";
        public const string DB_Nom = "Nom";

        public int Id { get; set; }
        public string? Nom { get; set; }

        public object toDbModel()
        {
            return new
            {
                this.Nom
            };
        }

        public Tag() { }
        public Tag(dynamic dbResult)
        {
            this.Id = dbResult.TagId;
            this.Nom = dbResult.TagNom;
        }

        public static List<string> getSelectcolumns()
        {
            return new List<string>
            {
                $"{DB_TableName}.{DB_Id} as {DB_TableName}{DB_Id}",
                $"{DB_TableName}.{DB_Nom} as {DB_TableName}{DB_Nom}",
            };
        }

        public static List<Tag> fromDynamic(IEnumerable<dynamic> dbResult)
        {
            List<Tag> toReturn = [];
            foreach (dynamic result in dbResult)
            {
                toReturn.Add(new Tag(result));
            }
            return toReturn;
        }
    }
}
