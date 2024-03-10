using Microsoft.EntityFrameworkCore;

namespace BackEnd;

public class CounterContext : DbContext
{
    public CounterContext(DbContextOptions<CounterContext> options) : base(options)
    {
    }
    
    public DbSet<Counter> Counters { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Counter>().HasData(
            new Counter { Id = 1, Number = 0 }
        );
    }
}