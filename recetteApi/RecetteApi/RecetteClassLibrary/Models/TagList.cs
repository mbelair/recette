namespace RecetteClassLibrary.Models
{
    public class TagList : Tag
    {
        public long recetteCount { get; set; }

        public TagList() { }

        public TagList(dynamic dbResult)
        {
            this.FromDynamic(dbResult);
            this.recetteCount = dbResult.recetteCount;
        }

    }
}

