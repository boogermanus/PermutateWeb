using Newtonsoft.Json;
using PermutateWebApi.Interfaces;
using PermutateWebApi.Models;

namespace PermutateWebApi.Services;

public class SiteAppService : ISiteAppService
{
    private List<SiteApp> _siteApps = new List<SiteApp>();

    public SiteAppService()
    {
        LoadData();
    }

    public void LoadData()
    {
        var json = File.ReadAllText("Resources/SiteApps.json");
        var apps = JsonConvert.DeserializeObject<SiteApp[]>(json);

        if (apps != null)
        {
            _siteApps = apps.ToList();
        }
    }

    public IEnumerable<SiteApp> GetSiteApps()
    {
        return _siteApps;
    }
}