using Microsoft.AspNetCore.Mvc;
using RecetteApi.DbFacade;
using RecetteClassLibrary.Models;

namespace RecetteApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecetteController : ControllerBase
{

    private readonly DatabaseController _databaseController;

    public RecetteController(DatabaseController databaseController) =>
        _databaseController = databaseController;

    [HttpGet]
    public async Task<IEnumerable<Recette>> Get()
    {
        return await this._databaseController.GetAllRecettesAsync();
    }

    [HttpGet("{id:int}")]
    public async Task<Recette> Get(int id)
    {
        return await this._databaseController.GetRecetteAsync(id);
    }

    [HttpPost]
    public async Task<IActionResult> Post(Recette newRecette)
    {
        await this._databaseController.CreateRecette(newRecette);
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Put(Recette recette)
    {
        await this._databaseController.UpdateRecette(recette);
        return Ok();
    }

}