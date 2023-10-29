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
            modelBuilder.Entity<Guest>().HasIndex(g => g.Email)
                .IsUnique();
            modelBuilder.Entity<Guest>().HasIndex(g => g.PhoneNumber)
                .IsUnique();

            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 1, RoomNo = "101", RoomType = (RoomType?)1, PricePerNight = 40 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 2, RoomNo = "102", RoomType = (RoomType?)1, PricePerNight = 40 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 3, RoomNo = "103", RoomType = (RoomType?)1, PricePerNight = 40 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 4, RoomNo = "104", RoomType = (RoomType?)1, PricePerNight = 40 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 5, RoomNo = "201", RoomType = (RoomType?)0, PricePerNight = 30 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 6, RoomNo = "202", RoomType = (RoomType?)0, PricePerNight = 30 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 7, RoomNo = "203", RoomType = (RoomType?)0, PricePerNight = 30 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 8, RoomNo = "204", RoomType = (RoomType?)0, PricePerNight = 30 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 9, RoomNo = "301", RoomType = (RoomType?)2, PricePerNight = 60 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 10, RoomNo = "302", RoomType = (RoomType?)2, PricePerNight = 60 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 11, RoomNo = "303", RoomType = (RoomType?)2, PricePerNight = 60 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 12, RoomNo = "304", RoomType = (RoomType?)2, PricePerNight = 60 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 13, RoomNo = "498", RoomType = (RoomType?)1, PricePerNight = 90 });
            modelBuilder.Entity<Room>().HasData(
                new Room { Id = 14, RoomNo = "499", RoomType = (RoomType?)1, PricePerNight = 90 });
        }


        
    }

}