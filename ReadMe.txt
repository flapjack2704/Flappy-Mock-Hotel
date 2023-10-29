Hello and welcome to my first dabble with EntityFramework Core, ASP.Net API and Angular; Developed in Visual Studio

The angular site hits an API, which is connected to a LocalDB SQL database.
The angular site is built to be used by some hotel employee, while sat at the hotel's front desk.

I plan to host that on Github Pages once the project is "done" (always open to add new features thereafter).
I still need to figure out how to remote host my API and sql database :D

### FIRST-USE INSTRUCTIONS
# 0) Make sure you have a default instance of LocalDB called MSSQLLocalDB running (Run "SQLLocalDB info" in cmd to check). 
1) Clone the repo (Obviously)
2) Open solution in Visual Studio
3) In the solution's terminal, use the command "dotnet ef database update" to create and seed tables.
4) Run program.cs in Visual Studio to start the API.
5) Open the FlappyMockHotelUI folder in terminal, use command "npm start" to open the angular site at localhost port 4200.
6) Go to localhost:4200 in a browser
### If for some reason there is no auto-populated data for rooms, you will need to Post some in ^_^


We will only use one guest's details when booking, even for double/family rooms. I have absolutely no idea if that's how most real-life hotels do it, but mehhh it's simpler for me.

I might add some pretend debit card payment thing later on, but for now just pretend every guest pays with cash (and diligently pays us at the end of their stay, or else.....).
