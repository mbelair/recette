﻿namespace RecetteApi.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string? Nom { get; set; }

        public object toDbModel()
        {
            return new
            {
                this.Nom
            };
        }
    }
}
