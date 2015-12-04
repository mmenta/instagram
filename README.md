### Instructions

- Run app on root directory in url "http://localhost:8000"

- If you have python installed on mac, easiest way is to just go into the project root in command line and type "python -m SimpleHTTPServer". By default, this will spin up a quick web server on this directory, by default will use "http://localhost:8000".

### Quick Notes

- You have to use this exact localhost url because Instagram requires you to register allowed request urls, localhost is an approved url on this app.

- When you log in, you will receive a request to allow access to the app. Because of Instagram's new API policies, which started in November, I had to use a previous Instagram app ID from an old project of mine. Any app registered after November of this year requires approval from Instagram in order to view public content. Using an already approved, old app ID is how I got around this.

### Approach

- I decided against using a JS framework and/or a bunch of plugins and libraries. Since this is a fairly simple app, I tried to keep it as simple and minimal as possible, while still creating structure for scalability and encapsulation just using vanilla JS.

- I structured the instagram functions in it's own file in a module type style in order to decouple the instagram functions from the specific app functions. This way you can reuse the instagram module on other apps without having to alter any code, simply include the instagram module and extend it.

- I wanted to keep the plugins/libraries to a minimum, so all I used was jquery and handlebars. I probably could have kept handlebars out, but I just couldn't stand writing markup inside of the js. I did at first, but then I couldn't sleep because of it, so I just included handlebars, now I can look at myself in the mirror again.