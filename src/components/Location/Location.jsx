import React from 'react';
import styles from './Location.module.css';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import { getDefaultNormalizer } from '@testing-library/react';
// import mapIcon from '../../images/iss_map_icon.png';

class Location extends React.Component {

    render() {

        const { locationData: { iss_position, timestamp }} = this.props;
        
        const mapStyles = {
            width: '100%',
            height: '100%'
        };

        const containerStyle = {
            width: '50%',
            height: '50%'
          }

        function getTime() {
            const unitTimestamp = timestamp;

            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

            const date = new Date(unitTimestamp * 1000);
            const year = date.getFullYear();
            const month = months[date.getMonth()];
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            const seconds = "0" + date.getSeconds();

            const converted = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

            return converted;
        }

        return (

            <div className={`${styles.container} container`}>
                <h2>Current Location of ISS</h2>
                <h4>Time of location shown: {getTime()}</h4>
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