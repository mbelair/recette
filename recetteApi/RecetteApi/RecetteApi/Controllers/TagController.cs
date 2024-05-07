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

        [Route("list")]
        [HttpGet]
        public async Task<IEnumerable<TagList>> GetWithRecetteCount()
        {
            return await this._databaseController.GetAllTagsWithRecetteCountAsync();
        }

        [HttpPut]
        public async Task<IActionResult> Update(Tag updatedTag)
        {
            await this._databaseController.UpdateTag(updatedTag);
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            await this._databaseController.DeleteTag(id);
            return Ok();
        }
    }
}