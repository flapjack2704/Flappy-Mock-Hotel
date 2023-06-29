using Microsoft.EntityFrameworkCore;

namespace Flappy_Mock_Hotel.DataAccess
{
    public class HotelDataContext : DbContext
    {
        //constructor
        public HotelDataContext(DbContextOptions<HotelDataContext> options) : base(options) { }

        public DbSet<Room> Rooms { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Guest> Guests { get; set; }
        public DbSet<Billing> Billings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(HotelDataContext).Assembly);
        }


        
    }

}