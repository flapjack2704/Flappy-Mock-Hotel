using Flappy_Mock_Hotel.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.ComponentModel;

namespace Flappy_Mock_Hotel.Controllers
{
    [ApiController]
    [Route("api/booking")]
    public class HotelBookingController : ControllerBase
    {

        private readonly ILogger<HotelBookingController> _logger;
        private readonly HotelDataContext context;

        public HotelBookingController(ILogger<HotelBookingController> logger, HotelDataContext context)
        {
            _logger = logger;
            this.context = context;
        }

        [HttpGet]
        [Route("rooms")]
        public Task<List<Room>> GetAllRooms()
        {
            return context.Rooms
                .ToListAsync();
        }

        [HttpPost]
        [Route("rooms")]
        public async Task<Room> AddNewRoom([FromBody] Room newRoom)
        {
            context.Add(newRoom);
            await context.SaveChangesAsync();
            return newRoom;
        }

        [HttpGet]
        [Route("bookings")]
        public Task<List<Booking>> GetAllBookings()
        {
            return context.Bookings
                .ToListAsync();
        }

        [HttpPost]
        [Route("bookings")]
        public async Task<Booking> AddNewBooking([FromBody] Booking newBooking)
        {
            context.Add(newBooking);
            await context.SaveChangesAsync();
            return newBooking;
        }



        [HttpGet]
        [Route("guests")]
        public Task<List<Guest>> GetAllGuests()
        {     
            return context.Guests
                .ToListAsync();
        }

        [HttpPost]
        [Route("guests")]
        public async Task<Guest> AddNewGuest([FromBody] Guest newGuest)
        {
            context.Add(newGuest);
            await context.SaveChangesAsync();
            return newGuest;
        }

        [HttpGet]
        [Route("guests-with-billings")]
        public async Task<List<Guest>> GetAllGuestsWithBillings()
        {
            foreach (var guest in context.Guests.ToList())
            {
                await context.Entry(guest).Collection(g => g.Billings).LoadAsync();
            }

            return context.Guests.ToList();
        }

        [HttpGet]
        [Route("guests-with-bookings")]
        public async Task<List<Guest>> GetAllGuestsWithBookings()
        {

            foreach (var guest in context.Guests.ToList())
            {
                await context.Entry(guest).Collection(g => g.Bookings).Query().Include(b => b.Room).LoadAsync();
            }

            return context.Guests.ToList();
        }



        [HttpGet]
        [Route("billings")]
        public Task<List<Billing>> GetAllBillings()
        {
            return context.Billings
                .ToListAsync();
        }

        [HttpPost]
        [Route("billings")]
        public async Task<Billing> AddNewBilling([FromBody] Billing newBilling)
        {
            context.Add(newBilling);
            await context.SaveChangesAsync();
            return newBilling;
        }
    }
}