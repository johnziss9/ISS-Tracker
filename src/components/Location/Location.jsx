import React from 'react';
import styles from './Location.module.css';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

class Location extends React.Component {

    render() {

        const { locationData: { longitude, latitude, timestamp }} = this.props;
       
        const mapStyles = {
            width: '100%',
            height: '100%'
        };
        
        const containerStyle = {
            width: window.innerWidth > 700 ? '60%' : '80%',
            height: '400px'
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
                <h4>Last update of location shown: {getTime()}</h4>
                <Map
                    google={this.props.google}
                    zoom={window.innerWidth > 700 ? 3 : 2}
                    style={mapStyles}
                    containerStyle={containerStyle}
                    className={styles.map}
                    center={{
                        lat: latitude,
                        lng: longitude
                    }}
                    disableDefaultUI={true}
                >
                   <Marker
                        onClick={this.onMarkerClick}
                        name={'ISS Location'}
                        icon={{
                            url: 'http://localhost:3000/iss_map_icon.png',
                            size: new this.props.google.maps.Size(64, 63)
                        }}
                        position={{ lat: latitude, lng: longitude}}
                    />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper ({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(Location);