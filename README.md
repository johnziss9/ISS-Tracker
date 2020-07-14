# ISS Tracker

## Information

This is a project built with ReactJS and its purpose is to provide tracking information of the International Space Station.

I am connected to the "Open Notify API" from which I will be grabbing the information showing the location, pass times and how many people currently are in the ISS.

## Running

To run the project, first run `npm install` to install all packages and then run `npm start` to view the project in the browser.

I have hidden the Google Maps API Key so for maps to work, an API Key will need to be added.

## Issues

1) Due to a CORS error I was not able to add the pass times information. 
2) Once the project is pushed to Netlify it won't load due to the fact that the API calls are blocked because they are insecure (HTTP).
3) Map is not centered. Possible issue is that longitude is not defined.
