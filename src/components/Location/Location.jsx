import React from 'react';
import styles from './Location.module.css';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
// import mapIcon from '../../images/iss_map_icon.png';

class Location extends React.Component {
    
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {

        const mapStyles = {
            width: '100%',
            height: '100%'
        };

        const containerStyle = {
            width: '50%',
            height: '50%'
          }

        return (

            <div className={`${styles.container} container`}>
                <h2>Current Location of ISS</h2>
                <Map
                    google={this.props.google}
                    zoom={3}
                    style={mapStyles}
                    containerStyle={containerStyle}
                    className={styles.map}
                    initialCenter={{
                        lat: 40.5230,
                        lng: -99.8445
                    }}
                    width="50%"
                    height="50%"
                >
                   <Marker
                        onClick={this.onMarkerClick}
                        name={'ISS Location'}
                        // icon={{
                        //     url: '../../images/iss_map_icon.png',
                        //     anchor: new google.maps.Point(32,32),
                        //     scaledSize: new google.maps.Size(64,64)
                        // }}
                    />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper ({
    apiKey: 'AIzaSyAm3UWmkAA37FFrVCi16-r5Bc4TMpgG1VA'
})(Location);