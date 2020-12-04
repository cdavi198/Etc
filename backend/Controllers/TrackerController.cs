using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrackerController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public TrackerController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<TrackerCount>> Get(string id)
        {
            return  await _dbContext.TrackerCounts.FindAsync(id);
        }

        [HttpPut]
        public async Task<ActionResult> Put(string id, TrackerCount model)
        {
            var exists = await _dbContext.TrackerCounts.AnyAsync(f => f.Id == id);
            if (!exists)
                return NotFound();
            
            _dbContext.TrackerCounts.Update(model);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}