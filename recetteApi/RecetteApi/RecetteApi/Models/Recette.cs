namespace RecetteApi.Models
{
    public class Recette : IDbModel
    {
        public int Id { get; set; }

        public int TempsPreparation { get; set; }
        public int TempsCuisson { get; set; }
        public DateTime Date_creation { get; set; }
        public DateTime Date_ouverture { get; set; }
        public List<Tag> Tags { get; set; } = new List<Tag>();
        public List<CategoriePreparation> CategoriePreparation { get; set; } = new List<CategoriePreparation>();
        public List<CategorieIngredient> CategorieIngredient { get; set; } = new List<CategorieIngredient>();


        public object toDbModel()
        {
            return new
            {
                this.TempsPreparation,
                this.TempsCuisson,
                this.Date_creation,
                this.Date_ouverture
            };
        }
    }
}
