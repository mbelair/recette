namespace RecetteClassLibrary.Models
{
    public class Recette : IDbModel
    {
        public const string DB_TableName = "Recette";

        public const string DB_Id = "Id";
        public const string DB_TempsPreparation = "TempsPreparation";
        public const string DB_TempsCuisson = "TempsCuisson";
        public const string DB_Date_creation = "Date_creation";
        public const string DB_Date_ouverture = "Date_ouverture";
        public const string DB_NombrePortion = "NombrePortion";
        public const string DB_Date_modification = "Date_modification";
        public const string DB_Nom = "Nom";


        public int Id { get; set; }
        public string? Nom { get; set; }
        public int TempsPreparation { get; set; }
        public int TempsCuisson { get; set; }
        public DateTime Date_creation { get; set; }
        public DateTime? Date_ouverture { get; set; }
        public DateTime? Date_modification { get; set; }
        public int NombrePortion { get; set; }
        public List<Tag> Tags { get; set; } = new List<Tag>();
        public List<CategoriePreparation> CategoriePreparation { get; set; } = [];
        public List<CategorieIngredient> CategorieIngredient { get; set; } = [];
        public IEnumerable<string> TypeRepas { get; set; } = [];

        public Recette() { }
        public Recette(dynamic dbResult)
        {
            this.Id = dbResult.RecetteId;
            this.Nom = dbResult.RecetteNom;
            this.TempsPreparation = dbResult.RecetteTempsPreparation;
            this.TempsCuisson = dbResult.RecetteTempsCuisson;
            this.Date_creation = dbResult.RecetteDate_creation;
            this.Date_ouverture = dbResult.RecetteDate_ouverture;
            this.NombrePortion = dbResult.RecetteNombrePortion;
            this.Date_modification = dbResult.RecetteDate_modification;
        }

        public static IEnumerable<Recette> fromDynamic(dynamic dbResult)
        {
            List<Recette> toReturn = [];
            HashSet<int> ids = new HashSet<int>();
            foreach (dynamic result in dbResult)
            {
                int id = result.RecetteId;
                if (!ids.Contains(id))
                {
                    ids.Add(id);
                    toReturn.Add(new Recette(result));
                }
            }
            return toReturn;
        }
        public object toDbModel()
        {
            return new
            {
                this.Nom,
                this.TempsPreparation,
                this.TempsCuisson,
                this.Date_creation,
                this.Date_ouverture,
                this.Date_modification,
                this.NombrePortion,
            };
        }

        public static List<string> getSelectcolumns()
        {
            return new List<string>
            {
                $"{DB_TableName}.{DB_Id} as {DB_TableName}{DB_Id}",
                $"{DB_TableName}.{DB_Nom} as {DB_TableName}{DB_Nom}",
                $"{DB_TableName}.{DB_TempsPreparation} as {DB_TableName}{DB_TempsPreparation}",
                $"{DB_TableName}.{DB_TempsCuisson} as {DB_TableName}{DB_TempsCuisson}",
                $"{DB_TableName}.{DB_Date_creation} as {DB_TableName}{DB_Date_creation}",
                $"{DB_TableName}.{DB_Date_ouverture} as {DB_TableName}{DB_Date_ouverture}",
                $"{DB_TableName}.{DB_NombrePortion} as {DB_TableName}{DB_NombrePortion}",
                $"{DB_TableName}.{DB_Date_modification} as {DB_TableName}{DB_Date_modification}",
            };
        }
    }
}
