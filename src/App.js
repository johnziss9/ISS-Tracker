import React from 'react';
import { fetchPeople } from './api';
import People from './components/People/People';
import Location from './components/Location/Location';
import styles from './App.module.css';
import iss from './images/iss.png';
import globe from './images/globe.png';
import { fetchLocation } from './api';

class App extends React.Component {

    state = {
        peopleData: {},
        locationData: {}
    }

    async componentDidMount() {
        const fetchedPeople = await fetchPeople();
        const fetchedLocation = await fetchLocation();

        this.setState({ peopleData: fetchedPeople });
        this.setState({ locationData: fetchedLocation });
    }

    render() {

        const { peopleData, locationData } = this.state;

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
                                    <li className={`${styles.navItem} nav-item`}><a className={`${styles.navItemLink} nav-tem-link`} href="/">Current Location</a></li>
                                    <li className={`${styles.navItem} nav-item`}><img src={globe} className={styles.separator} alt="globe" /></li>
                                    <li className={`${styles.navItem} nav-item`}><a className={`${styles.navItemLink} nav-tem-link`} href="/">Pass Times</a></li>
                                    <li className={`${styles.navItem} nav-item`}><img src={globe} className={styles.separator} alt="globe" /></li>
                                    <li className={`${styles.navItem} nav-item`}><a className={`${styles.navItemLink} nav-tem-link`} href="/">People</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <People data={data} /> */}
                    <Location locationData={locationData} />
                </div>
            </div>
        )
    }
}

export default App;