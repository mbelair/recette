namespace RecetteApi.Models
{
    public class CategoriePreparation : BaseCategorie
    {
        public List<Preparation>? Preparation { get; set; }
    }
}
