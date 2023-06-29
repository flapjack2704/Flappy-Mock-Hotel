using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace Flappy_Mock_Hotel.DataAccess
{
    public class Booking
    {
        public int Id { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public Room? Room { get; set; }
        public int RoomId { get; set; }

        public Guest? Guest { get; set; }
        public int GuestId { get; set; }

        public decimal TotalPrice { get; set; }

        public int PartySize { get; set; }
    }

    public class BookingEntityTypeConfiguration : IEntityTypeConfiguration<Booking>
    {
        public void Configure(EntityTypeBuilder<Booking> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.TotalPrice).HasColumnType("Decimal(8,2)");

            builder.HasOne(x => x.Guest)
                .WithMany(g => g.Bookings)
                .HasForeignKey(x => x.GuestId)
                .OnDelete(DeleteBehavior.Restrict)
                .IsRequired(false);
        }
    }
}
