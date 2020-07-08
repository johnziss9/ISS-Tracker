import axios from 'axios';

const url = 'http://api.open-notify.org/astros.json';

export const fetchPeople = async () => {

    try {
        const { data: { number, people } } = await axios.get(url);

        return { number, people };

    } catch (error) {
        console.log(error);
    }
}