namespace RecetteApi.Models
{
    public class IngredientRecette
    {
        public int Id { get; set; }

        public Ingredient Ingredient { get; set; } = null!;
        public decimal Quantite { get; set; }
        public string? Unite { get; set; }
        public int Ordre { get; set; }
        public string? Detail { get; set; }

        public object toDbModel(int categoryId)
        {
            return new
            {
                Ingredient_Id = this.Ingredient.Id,
                CategorieIngredient_Id = categoryId,
                this.Quantite,
                this.Unite,
                this.Ordre,
                this.Detail
            };
        }
    }
}
