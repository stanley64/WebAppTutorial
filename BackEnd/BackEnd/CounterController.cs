using Microsoft.AspNetCore.Mvc;

namespace BackEnd;

[ApiController]
[Route("[controller]")]
public class CounterController
{
    [HttpGet]
    public int GetCounter()
    {
        return 1;
    }

    [HttpPut]
    public int IncrementCounter()
    {
        return 1;
    }
}