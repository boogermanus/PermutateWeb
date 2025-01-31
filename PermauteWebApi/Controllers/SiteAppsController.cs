using Microsoft.AspNetCore.Mvc;
using PermutateWebApi.Interfaces;

namespace PermutateWebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SiteAppsController : ControllerBase
{
    private readonly ISiteAppService _siteAppService;
    public SiteAppsController(ISiteAppService service)
    {
        _siteAppService = service;
    }

    [HttpGet()]
    public IActionResult Get()
    {
        return Ok(_siteAppService.GetSiteApps());
    }
}