namespace RecetteApi.Models
{
    public class Preparation
    {
        public const string DB_TableName = "Preparation";
        public const string DB_Id = "Id";
        public const string DB_Text = "Text";
        public const string DB_Ordre = "Ordre";
        public const string DB_CategoriePreparation_Id = "CategoriePreparation_Id";

        public int Id { get; set; }
        public string? Text { get; set; }
        public int Ordre { get; set; }

        public object toDbModel(int categorieId)
        {
            return new
            {
                this.Text,
                this.Ordre,
                CategoriePreparation_Id = categorieId
            };
        }

        public Preparation() { }
        public Preparation(dynamic dbResult)
        {
            this.Id = dbResult.PreparationId;
            this.Text = dbResult.PreparationText;
            this.Ordre = dbResult.PreparationOrdre;
        }

        public static List<string> getSelectcolumns()
        {
            return new List<string>
            {
                $"{DB_TableName}.{DB_Id} as {DB_TableName}{DB_Id}",
                $"{DB_TableName}.{DB_Text} as {DB_TableName}{DB_Text}",
                $"{DB_TableName}.{DB_Ordre} as {DB_TableName}{DB_Ordre}",
                $"{DB_TableName}.{DB_CategoriePreparation_Id} as {DB_TableName}{DB_CategoriePreparation_Id}",
            };
        }
    }
}
