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

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Ingredient>> Get(int id)
        {
            var ingredient = await this._databaseController.GetIngredientByIdAsync(id);
            if (ingredient == null)
            {
                return NotFound();
            }
            return ingredient;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Ingredient newIngredient)
        {
            await this._databaseController.CreateIngredient(newIngredient);
            return Ok();
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, Ingredient updatedIngredient)
        {
            await this._databaseController.UpdateIngredient(id, updatedIngredient);
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await this._databaseController.DeleteIngredient(id);
            return Ok();
        }
    }
}