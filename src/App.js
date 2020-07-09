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
                <div className="pos-f-t">
                    <nav className={`${styles.navbar} navbar`}>
                        <div className="logo-container">
                            {/* <img className="logo-img" src={logo} alt="logo" /> */}
                            <h1>Test</h1>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="nav-items-container p-1">
                            <ul>
                                <li className="nav-item"><a className="nav-tem-link" href="/">Current Location</a></li>
                                <li className="nav-item"><a className="nav-tem-link" href="/">Pass Times</a></li>
                                <li className="nav-item"><a className="nav-tem-link" href="/">People</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1>ISS Tracker</h1>
                <People data={data} />
            </div>
        )
    }
}

export default App;