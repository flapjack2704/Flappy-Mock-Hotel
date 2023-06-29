using Flappy_Mock_Hotel.DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace Flappy_Mock_Hotel.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HotelBookingController : ControllerBase
    {

        private readonly ILogger<HotelBookingController> _logger;
        private readonly HotelDataContext context;

        public HotelBookingController(ILogger<HotelBookingController> logger, HotelDataContext context)
        {
            _logger = logger;
            this.context = context;
        }

        
    }
}