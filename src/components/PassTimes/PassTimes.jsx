import React from 'react';
import styles from './PassTimes.module.css';

class PassTimes extends React.Component {

    render() {

        const { passTimesData: { response }} = this.props;

        // function getTime() {
        //     const unitTimestamp = timestamp;

        //     const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        //     const date = new Date(unitTimestamp * 1000);
        //     const year = date.getFullYear();
        //     const month = months[date.getMonth()];
        //     const day = date.getDate();
        //     const hours = date.getHours();
        //     const minutes = "0" + date.getMinutes();
        //     const seconds = "0" + date.getSeconds();

        //     const converted = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

        //     return converted;
        // }

        return (

            <div className={`${styles.container} container`}>
                <h2>Pass Times of ISS on Current Location</h2>
            </div>
        )
    }
}

export default PassTimes;