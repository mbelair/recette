namespace RecetteClassLibrary.Models
{
    public class IngredientList : Ingredient
    {
        public long recetteCount { get; set; }

        public IngredientList() { }

        public IngredientList(dynamic dbResult)
        {
            this.FromDynamic(dbResult);
            this.recetteCount = dbResult.recetteCount;
        }

    }
}
