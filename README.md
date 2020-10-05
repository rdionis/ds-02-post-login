# Express API - Exercise - POST requests

## Write a student user login - powered by POST

* Create a server.js file
* Install express
* In server.js - Setup an express application
* Paste in the following array of users:
    let users = [
        {username: "User1", password: "PW1"},
        {username: "User2", password: "PW2"},
        {username: "User3", password: "PW3"},
    ]

* Parse incoming POST json data by the code: `app.use( express.json() )`

* Define a POST route /login
    * console.log the received body (=> req.body)
    * For now: Just return an object with a message property back to the frontend:
        - e.g.: { message: 'User logged in successfully...' }
        - Use res.send() to send the given object back to the client as response

* Test your POST route by either POSTMAN or RESTED client
    * Do you see the message object printed there?
    * Check the terminal where the backend runs: Do you see the form data printed here?
    * Great, then continue with the next step!


## Code the login!

Now we want to actually send in a pair of username and password. And depending on if that users exist we want to return a login success, otherwise a login failure.

The route /login should now do the following:

* read username and password data from req.body
    * the fields are accessible like so: 
        - req.body.username
        - req.body.password
* Now check: Does a user with given username and pw exist in our array of users?
    * If so: Send back the message "Login successful"
    * If not: Send back the message "Login failed"
    * Hint: You can check if an entry exists in an array with different array methods
        * Some recommendations: arr.find(item => ...) or arr.some(item => ...)
        * If you struggle with that: Look up the documentation of these methods, e.g. on W3C or MDN to see some examples

* Test with POSTMAN or RESTED client if your login code works!
    * Test the output when sending a username & password that does not exist
    * Test the output when sending a username & password that does exist


## Bonus Exercise - Let's login with a form!

* Setup a folder "client"
* Setup a file "login.html" within that folder
    * in login.html: provide an HTML form where a user can enter "username" and "password"
    * create a function "login"
    * call that "login" on submit
        * don't forget to prevent the default browser submit (=> e.preventDefault() )
    * perform a fetch() call to your POST url (http://localhost:5000/login)
    * send your form data in the body (don't forget the "stringify")
    * display the returned response in the browser console

* In server.js: Provide a route GET /login
    * load the file login.html here and send it to the user
    * call "http://localhost:5000/login in the browser
    * if your form loads: fill out the form and submit it
    * check the browser console 
        * you received the message from the server? 
