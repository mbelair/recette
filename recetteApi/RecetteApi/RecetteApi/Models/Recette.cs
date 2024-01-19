namespace RecetteApi.Models
{
    public class Recette
    {
        public string? Id { get; set; }

        public int TempsPreparation { get; set; }
        public int TempsCuisson { get; set; }
        public DateTime Date_creation { get; set; }
        public DateTime Date_ouverture { get; set; }
        public List<Tag>? Tags { get; set; }
        public List<CategoriePreparation>? CategoriePreparation { get; set; }
        public List<CategorieIngredient>? CategorieIngredient { get; set; }
    }
}
