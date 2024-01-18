using Microsoft.AspNetCore.Mvc;
using RecetteApi.Models;
using RecetteApi.Services;

namespace RecetteApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecetteController : ControllerBase
{
    private readonly RecetteService _recetteService;

    public RecetteController(RecetteService recetteService) =>
        _recetteService = recetteService;

    [HttpGet]
    public async Task<List<Ingredient>> Get() =>
        await _recetteService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Ingredient>> Get(string id)
    {
        var ingredient = await _recetteService.GetAsync(id);

        if (ingredient is null)
        {
            return NotFound();
        }

        return ingredient;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Ingredient newIngredient)
    {
        await _recetteService.CreateAsync(newIngredient);

        return CreatedAtAction(nameof(Get), new { id = newIngredient.Id }, newIngredient);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Ingredient updatedIngredient)
    {
        var ingredient = await _recetteService.GetAsync(id);

        if (ingredient is null)
        {
            return NotFound();
        }

        updatedIngredient.Id = ingredient.Id;

        await _recetteService.UpdateAsync(id, updatedIngredient);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var ingredient = await _recetteService.GetAsync(id);

        if (ingredient is null)
        {
            return NotFound();
        }

        await _recetteService.RemoveAsync(id);

        return NoContent();
    }
}