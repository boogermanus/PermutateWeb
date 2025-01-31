namespace PermutateWebApi.Models;

public class SiteApp
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string AppUrl { get; set; } = string.Empty;
    public string GitHubUrl { get; set; } = string.Empty;
}