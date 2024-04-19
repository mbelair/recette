using Microsoft.AspNetCore.Mvc;
using RecetteApi.DbFacade;
using RecetteClassLibrary.Models;

namespace RecetteApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class TagController : ControllerBase
    {
        private readonly DatabaseController _databaseController;

        public TagController(DatabaseController databaseController) =>
            _databaseController = databaseController;


        [HttpGet]
        public async Task<IEnumerable<Tag>> Get()
        {
            return await this._databaseController.GetAllTagsAsync();
        }
    }
}