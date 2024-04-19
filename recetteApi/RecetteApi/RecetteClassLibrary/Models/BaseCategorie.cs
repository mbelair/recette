namespace RecetteClassLibrary.Models
{
    public abstract class BaseCategorie
    {
        public int Id { get; set; }

        public string? Nom { get; set; }

        public int Ordre { get; set; }

        public bool IsDefaultCategory { get; set; }

        public object toDbModel(int recetteId)
        {
            return new
            {
                this.Nom,
                this.Ordre,
                this.IsDefaultCategory,
                Recette_Id = recetteId
            };
        }

    }
}
