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


    [HttpPost]
    public async Task<IActionResult> Post(Recette newRecette)
    {
        await this._databaseController.CreateRecette(newRecette);
        return Ok();
    }

}