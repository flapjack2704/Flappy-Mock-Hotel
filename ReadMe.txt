Hello and welcome to my first dabble with EF Core, ASP.Net API and Angular. 

### FlappyMockHotelUI contains the Angular site.
1. Run program.cs in Visual Studio to start the API
2. Open FlappyMockHotelUI in command line and run "npm start"
### If there is no auto-populated data for rooms, you will need to Post some via the api. Also, make sure you have LocalDB installed.

The angular site hits an API, which is connected to a LocalDB SQL database.
The angular site is built to be used by some hotel employee, while sat at the hotel's front desk.

I plan to host that on Github Pages once the project is "done" (always open to add new features thereafter).
I still need to figure out how to remote host my API and sql database :D



We will only use one guest's details when booking, even for double/family rooms. I have absolutely no idea if that's how most real-life hotels do it, but mehhh it's simpler for me.

I might add some pretend debit card payment thing later on, but for now just pretend every guest pays with cash (and diligently pays us at the end of their stay, or else.....).
