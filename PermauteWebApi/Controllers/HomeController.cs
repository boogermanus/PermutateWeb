using Microsoft.AspNetCore.Mvc;

namespace PermutateWebApi.Controllers;

[ApiController]
[Route("/")]
public class HomeController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok($"PermutateWeb API {DateTime.UtcNow}");
    }
}