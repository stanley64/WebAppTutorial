using System.ComponentModel.DataAnnotations;

namespace BackEnd;

public class Counter
{
    [Key]
    public int Id { get; set; }
    public int Number { get; set; }
}