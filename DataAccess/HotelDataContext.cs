using Microsoft.EntityFrameworkCore;

namespace Flappy_Mock_Hotel.DataAccess
{
    public class HotelDataContext : DbContext
    {
        //constructor
        public HotelDataContext(DbContextOptions<HotelDataContext> options) : base(options) { }

        // TODO add DbSets

        // TODO add OnModelCreating(ModelBuilder modelBuilder) method for Fluent API


    }

}
