import React from 'react';
import { fetchPeople } from './api';
import People from './components/People/People';

class App extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedPeople = await fetchPeople();

        this.setState({ data: fetchedPeople })
    }

    render() {

        const { data } = this.state;

        return(
            <div className="container">
                <h1>ISS Tracker</h1>
                <People data={data} />
            </div>
        )
    }
}

export default App;