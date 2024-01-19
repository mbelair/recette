using Npgsql;
using RecetteApi.DbFacade;
using SqlKata.Compilers;
using SqlKata.Execution;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddNpgsqlDataSource(builder.Configuration.GetSection("RecetteDatabase").GetSection("ConnectionString").Value!);
builder.Services.AddSingleton<DatabaseController>();

builder.Services.AddTransient((e) =>
{
    var connection = NpgsqlDataSource.Create(builder.Configuration.GetSection("RecetteDatabase").GetSection("ConnectionString").Value!);

    var compiler = new PostgresCompiler();

    return new QueryFactory(connection.OpenConnection(), compiler);
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
