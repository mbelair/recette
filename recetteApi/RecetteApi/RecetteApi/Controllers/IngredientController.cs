using Microsoft.AspNetCore.Mvc;
using RecetteApi.DbFacade;
using RecetteClassLibrary.Models;

namespace RecetteApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IngredientController : ControllerBase
    {
        private readonly DatabaseController _databaseController;

        public IngredientController(DatabaseController databaseController) =>
            _databaseController = databaseController;


        [HttpGet]
        public async Task<IEnumerable<Ingredient>> Get()
        {
            return await this._databaseController.GetAllIngredientsAsync();
        }

        [HttpPost]
        public async Task<IActionResult> Post(Ingredient newIngredient)
        {
            await this._databaseController.CreateIngredient(newIngredient);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update(Ingredient updatedIngredient)
        {
            await this._databaseController.UpdateIngredient(updatedIngredient);
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await this._databaseController.DeleteIngredient(id);
            return Ok();
        }

        [Route("list")]
        [HttpGet]
        public async Task<IEnumerable<IngredientList>> GetWithRecetteCount()
        {
            return await this._databaseController.GetAllIngredientsWithRecetteCountAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<IngredientDetail> GetIngredientByIdWithRecettes(int id)
        {
            return await this._databaseController.GetIngredientByIdWithRecettes(id);
        }
    }
}