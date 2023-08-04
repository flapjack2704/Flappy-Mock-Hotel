using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Flappy_Mock_Hotel.DataAccess
{
    public class Room
    {

        public int Id { get; set; }

        public string RoomNo { get; set; } = string.Empty;

        public RoomType? RoomType { get; set; }

        public decimal PricePerNight { get; set; }


    }

    public enum RoomType
    {
        Single,
        Double,
        Family
    }

    public class RoomEntityTypeConfiguration : IEntityTypeConfiguration<Room>
    {
        public void Configure(EntityTypeBuilder<Room> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.RoomNo).HasMaxLength(4);
            builder.Property(x => x.PricePerNight).HasColumnType("Decimal(5,2)");
            builder.Property(x => x.RoomType).HasConversion<string>().HasMaxLength(20);
        }
    }
}
