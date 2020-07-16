import React from 'react';
import styles from './App.module.css';
import iss from './images/iss.png';
import globe from './images/globe.png';
import People from './components/People/People';
import Location from './components/Location/Location';
import { fetchPeople } from './api';
import { fetchLocation } from './api';
import { fetchPassTimes } from './api';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.clickPeople = this.clickPeople.bind(this);
        this.clickLocation = this.clickLocation.bind(this);

        this.state = {
            peopleData: {},
            locationData: {},
            passTimes: {},
            peopleClick: false,
            locationClick: false,
            showPeople: false,
            showLocation: false,
            hidePeople: false,
            hideLocation: false
        }
    }

    async componentDidMount() {
        const fetchedPeople = await fetchPeople();
        const fetchedLocation = await fetchLocation();
        const fetchedPassTimes = await fetchPassTimes();

        console.log(fetchedPassTimes);

        this.setState({ peopleData: fetchedPeople });
        this.setState({ locationData: fetchedLocation });

        this.clickLocation();
    }

    clickPeople() {
        const activeCurrentState = this.state.peopleClick;
        const currentLocationState = this.state.hideLocation;
        const currentPeopleState = this.state.showPeople;

        if (!activeCurrentState) {
            this.setState({
                peopleClick: !activeCurrentState,
                locationClick: activeCurrentState,
                hideLocation: !currentLocationState,
                showLocation: currentLocationState,
                hidePeople: currentPeopleState,
                showPeople: !currentPeopleState
            });
        }        
    }

    clickLocation() {
        const activeCurrentState = this.state.locationClick;
        const currentLocationState = this.state.showLocation;
        const currentPeopleState = this.state.hidePeople;

        if (!activeCurrentState) {
            this.setState({
                peopleClick: activeCurrentState,
                locationClick: !activeCurrentState,
                hideLocation: currentLocationState,
                showLocation: !currentLocationState,
                hidePeople: !currentPeopleState,
                showPeople: currentPeopleState
            });
        }
    }

    render() {

        const { peopleData, locationData, showPeople, hidePeople, showLocation, hideLocation } = this.state;

        return(
            <div className={styles.body}>
                <div className="container">
                    <div className="pos-f-t">
                        <nav className={`${styles.navbar} navbar`}>
                            <div className={styles.logoContainer}>
                                <img className={styles.logo} src={iss} alt="logo" />
                                <h3 className={styles.title}>ISS Tracker</h3>
                            </div>
                            <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className={`${styles.navbarTogglerIcon} navbar-toggler-icon`}></span>
                            </button>
                        </nav>
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div >
                                <ul className={styles.navList}>
                                    <li className={`${styles.navItem} nav-item`} onClick={this.clickLocation}><a className={`${styles.navItemLink} nav-tem-link`} href="#">Current Location</a></li>
                                    <li className={`${styles.navItem} nav-item`}><img src={globe} className={styles.separator} alt="globe" /></li>
                                    <li className={`${styles.navItem} nav-item`} onClick={this.clickPeople}><a className={`${styles.navItemLink} nav-tem-link`} href="#">People</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {hideLocation && showPeople && <People peopleData={peopleData} />}
                    {hidePeople && showLocation && <Location locationData={locationData} />}
                </div>
            </div>
        )
    }
}

export default App;