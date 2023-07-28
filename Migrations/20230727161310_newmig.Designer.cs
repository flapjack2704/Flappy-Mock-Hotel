﻿// <auto-generated />
using System;
using Flappy_Mock_Hotel.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Flappy_Mock_Hotel.Migrations
{
    [DbContext(typeof(HotelDataContext))]
    [Migration("20230727161310_newmig")]
    partial class newmig
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Flappy_Mock_Hotel.DataAccess.Billing", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("BookingId")
                        .HasColumnType("int");

                    b.Property<int>("GuestId")
                        .HasColumnType("int");

                    b.Property<bool>("IsPaid")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("BookingId");

                    b.HasIndex("GuestId");

                    b.ToTable("Billings");
                });

            modelBuilder.Entity("Flappy_Mock_Hotel.DataAccess.Booking", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("GuestId")
                        .HasColumnType("int");

                    b.Property<int>("PartySize")
                        .HasColumnType("int");

                    b.Property<int>("RoomId")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<decimal>("TotalPrice")
                        .HasColumnType("Decimal(8,2)");

                    b.HasKey("Id");

                    b.HasIndex("GuestId");

                    b.HasIndex("RoomId");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("Flappy_Mock_Hotel.DataAccess.Guest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("PhoneNumber")
                        .IsUnique();

                    b.ToTable("Guests");
                });

            modelBuilder.Entity("Flappy_Mock_Hotel.DataAccess.Room", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal>("PricePerNight")
                        .HasColumnType("Decimal(5,2)");

                    b.Property<string>("RoomNo")
                        .IsRequired()
                        .HasMaxLength(4)
                        .HasColumnType("nvarchar(4)");

                    b.Property<int?>("RoomType")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("Flappy_Mock_Hotel.DataAccess.Billing", b =>
                {
                    b.HasOne("Flappy_Mock_Hotel.DataAccess.Booking", "Booking")
                        .WithMany()
                        .HasForeignKey("BookingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Flappy_Mock_Hotel.DataAccess.Guest", "Guest")
                        .WithMany("Billings")
                        .HasForeignKey("GuestId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("Booking");

                    b.Navigation("Guest");
                });

            modelBuilder.Entity("Flappy_Mock_Hotel.DataAccess.Booking", b =>
                {
                    b.HasOne("Flappy_Mock_Hotel.DataAccess.Guest", "Guest")
                        .WithMany("Bookings")
                        .HasForeignKey("GuestId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("Flappy_Mock_Hotel.DataAccess.Room", "Room")
                        .WithMany()
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Guest");

                    b.Navigation("Room");
                });

            modelBuilder.Entity("Flappy_Mock_Hotel.DataAccess.Guest", b =>
                {
                    b.Navigation("Billings");

                    b.Navigation("Bookings");
                });
#pragma warning restore 612, 618
        }
    }
}
