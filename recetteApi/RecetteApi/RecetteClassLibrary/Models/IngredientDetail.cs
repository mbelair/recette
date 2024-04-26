namespace RecetteClassLibrary.Models
{
    public class IngredientDetail : Ingredient
    {
        public IEnumerable<Recette> Recettes { get; set; }

    }
}
