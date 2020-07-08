import React from'react';
import { fetchPeople } from './api';

class App extends React.Component {

    async componentDidMount() {
        const fetchedPeople = await fetchPeople();

        console.log(fetchedPeople);
    }

    render() {

        return(
            <div>
                <h1>ISS Tracker</h1>
                {/* <p>Number of people in the ISS is {fetchedPeople.number}</p> */}
            </div>
        )
    }
}

export default App;