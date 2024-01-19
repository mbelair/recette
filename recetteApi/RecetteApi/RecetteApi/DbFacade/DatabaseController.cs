using RecetteApi.Models;
using SqlKata.Execution;

namespace RecetteApi.DbFacade
{
    public class DatabaseController
    {

        private readonly QueryFactory db;

        public DatabaseController(QueryFactory db)
        {
            this.db = db;
        }

        public async Task<IEnumerable<Ingredient>> GetAllIngredientsAsync()
        {
            return await db.Query("Ingredient").Select("Id", "Nom", "Category", "Filterable").GetAsync<Ingredient>();
        }

        public async Task<Ingredient> GetIngredientByIdAsync(int Id)
        {
            return await db.Query("Ingredient").Select("Id", "Nom", "Category", "Filterable").Where("Id", Id).FirstOrDefaultAsync<Ingredient>();
        }

        public async Task CreateIngredient(Ingredient newIngredient)
        {
            await db.Query("Ingredient").InsertAsync(new
            {
                newIngredient.Nom,
                newIngredient.Filterable,
                Category = newIngredient.Category.ToString(),
            });
        }

        public async Task UpdateIngredient(int id, Ingredient updatedIngredient)
        {
            await db.Query("Ingredient").Where("Id", id).UpdateAsync(new
            {
                updatedIngredient.Nom,
                updatedIngredient.Filterable,
                Category = updatedIngredient.Category.ToString(),
            });
        }

        public async Task DeleteIngredient(int id)
        {
            await db.Query("Ingredient").Where("Id", id).DeleteAsync();
        }
    }
}
