using PermutateWebApi.Interfaces;
using PermutateWebApi.Services;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://localhost:5007");

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

builder.Services.AddSingleton<ISiteAppService, SiteAppService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
{
    options.WithOrigins(["https://permutate.us","http://localhost:4200"]);
    options.AllowAnyHeader();
    options.AllowAnyMethod();
});

// app.UseHttpsRedirection();
// app.UseRouting();

app.MapControllers();
app.Run();
