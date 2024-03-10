using Microsoft.AspNetCore.Mvc;

namespace BackEnd;

[ApiController]
[Route("[controller]")]
public class CounterController
{
    private readonly CounterContext _context;

    public CounterController(CounterContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public int GetCounter()
    {
        return _context.Counters.First().Number;
    }

    [HttpPut("increment")]
    public int IncrementCounter()
    {
        var counter = _context.Counters.First();
        counter.Number++;
        _context.SaveChanges();
        return counter.Number;
    }

    [HttpPut("decrement")]
    public int DecrementCounter()
    {
        var counter = _context.Counters.First();
        counter.Number--;
        _context.SaveChanges();
        return counter.Number;
    }
}