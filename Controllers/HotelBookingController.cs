using Microsoft.AspNetCore.Mvc;

namespace Flappy_Mock_Hotel.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HotelBookingController : ControllerBase
    {

        private readonly ILogger<HotelBookingController> _logger;

        public HotelBookingController(ILogger<HotelBookingController> logger)
        {
            _logger = logger;
        }

        
    }
}