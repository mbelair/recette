namespace RecetteApi.Models
{
    public class Preparation
    {
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
    }
}
