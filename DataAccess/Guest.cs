using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.ComponentModel.DataAnnotations;

namespace Flappy_Mock_Hotel.DataAccess
{
    public class Guest
    {
        public int Id { get; set; }

        public string FirstName { get; set; } = string.Empty;


        public string LastName { get; set; } = string.Empty;

        // Each guest must give an email address and phone number

        public string Email { get; set; } = string.Empty;

        public string PhoneNumber { get; set; } = string.Empty;

        public List<Billing>? Billings { get; set; } = new();

        public List<Booking>? Bookings { get; set; } = new();

    }

    public class GuestEntityTypeConfiguration : IEntityTypeConfiguration<Guest>
    {
        public void Configure(EntityTypeBuilder<Guest> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.FirstName).HasMaxLength(150);
            builder.Property(x => x.LastName).HasMaxLength(150);
            builder.Property(x => x.Email).HasMaxLength(150).IsRequired();
            builder.Property(x => x.PhoneNumber).HasMaxLength(150).IsRequired();

        }
    }
}
