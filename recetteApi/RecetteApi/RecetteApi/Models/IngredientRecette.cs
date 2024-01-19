namespace RecetteApi.Models
{
    public class IngredientRecette
    {
        public string? Id { get; set; }

        public Ingredient? Ingredient { get; set; }
        public decimal Quantite { get; set; }
        public string? Unite { get; set; }
        public int Ordre { get; set; }
        public string? Detail { get; set; }
    }
}
