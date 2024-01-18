namespace RecetteApi.Models
{
    public class CategorieIngredient : BaseCategorie
    {
        public List<IngredientRecette>? Ingredient { get; set; }
    }
}
