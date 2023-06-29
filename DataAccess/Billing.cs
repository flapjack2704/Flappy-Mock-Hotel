using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Flappy_Mock_Hotel.DataAccess
{

    public class Billing
    {
        public int Id { get; set; }

        public bool IsPaid { get; set; }

        public Booking? Booking { get; set; }
        public int BookingId { get; set; }

        public Guest? Guest { get; set; }
        public int GuestId { get; set; }
    }

    public class BillingEntityTypeConfiguration : IEntityTypeConfiguration<Billing>
    {
        public void Configure(EntityTypeBuilder<Billing> builder)
        {
            builder.HasKey(x => x.Id);

            builder.HasOne(x => x.Guest)
                .WithMany(g => g.Billings)
                .HasForeignKey(x => x.GuestId)
                .OnDelete(DeleteBehavior.Restrict)
                .IsRequired(false);
        }
    }
}
