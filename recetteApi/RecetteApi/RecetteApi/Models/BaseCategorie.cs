namespace RecetteApi.Models
{
    public class BaseCategorie
    {
        public string? Id { get; set; }

        public string? Nom { get; set; }

        public int Ordre { get; set; }

        public bool IsDefaultCategory { get; set; }
    }
}
