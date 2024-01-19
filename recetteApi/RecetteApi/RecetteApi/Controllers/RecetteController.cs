using Microsoft.AspNetCore.Mvc;
using RecetteApi.DbFacade;
using RecetteApi.Models;

namespace RecetteApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecetteController : ControllerBase
{

    private readonly DatabaseController _databaseController;

    public RecetteController(DatabaseController databaseController) =>
        _databaseController = databaseController;


    [HttpGet]
    public async Task<IEnumerable<Ingredient>> Get()
    {
        return await this._databaseController.GetAllIngredientsAsync();
    }

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Ingredient>> Get(string id)
    {
        return NoContent();
    }

    [HttpPost]
    public async Task<IActionResult> Post(Ingredient newIngredient)
    {
        return NoContent();
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Ingredient updatedIngredient)
    {
        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        return NoContent();
    }
}