1. What does HTTP stand for?
Hypertext Transfer Protcol

2. How would you describe what a protocol is to a complete newbie?
An agreed upon standard

3. Which part of this URL describes the protocol?: 
https://apis.scrimba.com/jsonplaceholder/posts
https

4. If you had to guess, which request method (GET, POST, PUT, DELETE) would you
think we made in the previous challenge when we asked for data from the 
JSON Placeholder API?
GET

1. What's the difference between a Base URL and an Endpoint?
Base URL is the static portion of the total URL (and the API).

Given the following URLs from an example API:
* https://blahblahblah.com/api/v2/users
* https://blahblahblah.com/api/v2/products
* https://blahblahblah.com/api/v2/products/123

2. Which part is the Base URL?
https://blahblahblah.com/api/v2

3. What are the available endpoints?
users, products, products/123


Try to think of a time you used each of the four main methods
(GET, POST, PUT, DELETE) in the real world as you went about
your regular usage of the internet. E.g. today, I checked the
weather on my phone which probably sent a GET request to retrieve
weather information.

GET: any web page

POST: adding an item to a todo list.

PUT: editing a blog post

DELETE: deleting a blog post.

1. What does it mean for the server to be "Stateless"?
It doesn't remember previous interactions. It does the thing and forgets.


* In the Mike's Bikes example, what URL endpoint (and request method)
  would you expect to use in order to accomplish the following:
  
    2. Retrieve a list of all the bikes that are sold?
    GET /bikes


    3. Retrieve detailed information about the bike with an ID of 42?
    GET /bikes/42
    
    
    4. Update the price of the bike with an ID of 21?
    PUSH /bikes/21
    
    
    5. Add a new bike to the list of bikes being sold?
    POST /bikes
    
    
    6. Remove the bike with an ID of 56 from the list of bikes?
    DELETE /bikes/56


    At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

1. Get  a list of all bike racks sold on the site?
    /racks -or- /bikeracks

2. Get a list of all bike racks available in the physical store right now?
   (Assume a query called "available" that is a boolean true/false)
   /racks?available=true


3. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
   (Assume there are "brand" and "numBikes" queries)
   /racks?brand=Thule&numBikes=4
