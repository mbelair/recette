namespace RecetteApi.Models
{
    public class CategoriePreparation : BaseCategorie
    {
        public const string DB_TableName = "CategoriePreparation";

        public const string DB_Id = "Id";
        public const string DB_Nom = "Nom";
        public const string DB_Ordre = "Ordre";
        public const string DB_IsDefaultCategory = "IsDefaultCategory";
        public const string DB_Recette_Id = "Recette_Id";

        public List<Preparation> Preparation { get; set; } = new List<Preparation>();


        public static List<string> getSelectcolumns()
        {
            return new List<string>
            {
                $"{DB_TableName}.{DB_Id} as {DB_TableName}{DB_Id}",
                $"{DB_TableName}.{DB_Nom} as {DB_TableName}{DB_Nom}",
                $"{DB_TableName}.{DB_Ordre} as {DB_TableName}{DB_Ordre}",
                $"{DB_TableName}.{DB_IsDefaultCategory} as {DB_TableName}{DB_IsDefaultCategory}",
            };
        }

        public CategoriePreparation() { }
        public CategoriePreparation(dynamic dbResult)
        {
            this.Id = dbResult.CategoriePreparationId;
            this.Nom = dbResult.CategoriePreparationNom;
            this.Ordre = dbResult.CategoriePreparationOrdre;
            this.IsDefaultCategory = dbResult.CategoriePreparationIsDefaultCategory;
        }

        public static List<CategoriePreparation> fromDynamic(IEnumerable<dynamic> dbResult)
        {
            List<CategoriePreparation> toReturn = [];
            HashSet<int> ids = new HashSet<int>();
            foreach (dynamic result in dbResult)
            {
                int id = result.CategoriePreparationId;
                if (!ids.Contains(id))
                {
                    ids.Add(id);
                    toReturn.Add(new CategoriePreparation(result));
                }
                CategoriePreparation ci = toReturn.Find(x => x.Id == id)!;
                ci.Preparation.Add(new Preparation(result));
            }
            return toReturn;
        }
    }
}
