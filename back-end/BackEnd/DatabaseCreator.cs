namespace BackEnd;

public class DatabaseCreator : BackgroundService
{
    private readonly CounterContext _context;

    public DatabaseCreator(CounterContext context)
    {
        _context = context;
    }
    
    protected override async Task ExecuteAsync(CancellationToken cancellationToken)
    {
        await _context.Database.EnsureCreatedAsync(cancellationToken);
    }
}