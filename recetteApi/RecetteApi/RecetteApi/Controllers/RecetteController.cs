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
        newRecette.Date_ouverture = null;
        newRecette.Date_modification = null;
        newRecette.Date_creation = DateTime.UtcNow;
        await this._databaseController.CreateRecette(newRecette);
        return Ok();
    }

}