using Microsoft.Extensions.Options;
using MongoDB.Driver;
using RecetteApi.Models;

namespace RecetteApi.Services;

public class RecetteService
{
    private readonly IMongoCollection<Ingredient> _ingredientCollection;

    public RecetteService(
        IOptions<RecetteDatabaseSettings> bookStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            bookStoreDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            bookStoreDatabaseSettings.Value.DatabaseName);

        _ingredientCollection = mongoDatabase.GetCollection<Ingredient>(
            bookStoreDatabaseSettings.Value.RecetteCollectionName);
    }

    public async Task<List<Ingredient>> GetAsync() =>
        await _ingredientCollection.Find(_ => true).ToListAsync();

    public async Task<Ingredient?> GetAsync(string id) =>
        await _ingredientCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Ingredient newIngredient) =>
        await _ingredientCollection.InsertOneAsync(newIngredient);

    public async Task UpdateAsync(string id, Ingredient updatedIngredient) =>
        await _ingredientCollection.ReplaceOneAsync(x => x.Id == id, updatedIngredient);

    public async Task RemoveAsync(string id) =>
        await _ingredientCollection.DeleteOneAsync(x => x.Id == id);
}