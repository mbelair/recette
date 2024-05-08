namespace RecetteClassLibrary.Models
{
    public class TagDetail : Tag
    {
        public IEnumerable<Recette> Recettes { get; set; } = [];

    }
}
