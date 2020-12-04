using Microsoft.EntityFrameworkCore;  

namespace backend.Models
{
    public class EtcContext : DbContext
    {
        public EtcContext(DbContextOptions<EtcContext> options) : base(options)
        {}
        public DbSet<EtcItem> EtcItems { get; set; } 
    }
}