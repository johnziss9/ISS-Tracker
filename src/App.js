import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import styles from './App.module.css';
import iss from './images/iss.png';
import globe from './images/globe.png';
import People from './components/People/People';
import Location from './components/Location/Location';
import { fetchPeople } from './api';
import { fetchLocation } from './api';
import { fetchPassTimes } from './api';
import PassTimes from './components/PassTimes/PassTimes';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            peopleData: {},
            locationData: {},
            passTimesData: {}
        }
    }

    async componentDidMount() {
        const fetchedPeople = await fetchPeople();
        const fetchedLocation = await fetchLocation();
        const fetchedPassTimes = await fetchPassTimes();

        this.setState({ peopleData: fetchedPeople });
        this.setState({ locationData: fetchedLocation });
        this.setState({ passTimesData: fetchedPassTimes });

        // this.interval = setInterval(() => this.updateLocation(), 1000);
    }

    async updateLocation() {
        const fetchedLocation = await fetchLocation();

        this.setState({ locationData: fetchedLocation });
    }

    render() {

        const { peopleData, locationData, passTimesData } = this.state;

        return(
            <div className={styles.body}>
                <div className="container">
                    <BrowserRouter>
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
                                        <li className={`${styles.navItem} nav-item`}>
                                            <NavLink tag={Link} to="/Location" className={`${styles.navItemLink} nav-item-link`}>Location</NavLink>
                                        </li>
                                        <li className={`${styles.navItem} nav-item`}>
                                            <img src={globe} className={styles.separator} alt="globe" />
                                        </li>
                                        <li className={`${styles.navItem} nav-item`}>
                                            <NavLink tag={Link} to="/People" className={`${styles.navItemLink} nav-item-link`}>People</NavLink>
                                        </li>
                                        <li className={`${styles.navItem} nav-item`}>
                                            <img src={globe} className={styles.separator} alt="globe" />
                                        </li>
                                        <li className={`${styles.navItem} nav-item`}>
                                            <NavLink tag={Link} to="/PassTimes" className={`${styles.navItemLink} nav-item-link`}>Pass Times</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Switch>
                            <Route exact path="/" component={() => <Location locationData={locationData} />} />
                            <Route path="/Location" component={() => <Location locationData={locationData} />} />
                            <Route path="/People" component={() => <People peopleData={peopleData} />} />
                            <Route path="/PassTimes" component={() => <PassTimes passTimesData={passTimesData} />} />
                            {/* <Route component={NotFound} /> */}
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default App;