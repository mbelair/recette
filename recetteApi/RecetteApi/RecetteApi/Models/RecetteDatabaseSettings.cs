namespace RecetteApi.Models
{
    public class RecetteDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string RecetteCollectionName { get; set; } = null!;
    }
}
