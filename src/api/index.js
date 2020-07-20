import axios from 'axios';

const url = 'https://cors-anywhere.herokuapp.com/http://api.open-notify.org';

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

export const fetchPassTimes = async () => {

    const passTimesUrl = `${url}/iss-pass.json?lat=51.510357&lon=-0.116773`;

    try {
        // const response = await axios.get(locationUrl);
        const { data: { response }} = await axios.get(passTimesUrl);

        return { response };

    } catch (error) {
        console.log(error);
    }
}

