using PermutateWebApi.Models;

namespace PermutateWebApi.Interfaces;

public interface ISiteAppService
{
    IEnumerable<SiteApp> GetSiteApps();
    void LoadData();
}