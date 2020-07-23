import axios from 'axios';

const url = 'https://cors-anywhere.herokuapp.com/http://api.open-notify.org';
let latitude = 0;
let longitude = 0;

export const fetchPeople = async () => {

    const peopleUrl = `${url}/astros.json`;

    try {
        const { data: { number, people } } = await axios.get(peopleUrl);

        return { number, people };

    } catch (error) {
        console.log(error);
    }
}

export const fetchLocation = async () => {

    const locationUrl = `${url}/iss-now.json`;

    try {
        const { data: { iss_position: { longitude, latitude }, timestamp }} = await axios.get(locationUrl);

        return { longitude, latitude, timestamp };

    } catch (error) {
        console.log(error);
    }
}

navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
});

export const fetchPassTimes = async () => {

    try {
        const passTimesUrl = `${url}/iss-pass.json?lat=${latitude}&lon=${longitude}`;
                
        const { data: { response }} = await axios.get(passTimesUrl);

        return { response };

    } catch (error) {
        console.log(error);
    }
}

