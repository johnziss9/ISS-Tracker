import React from 'react';
import styles from './PassTimes.module.css';

class PassTimes extends React.Component {

    render() {

        const { passTimesData: { response }} = this.props;
            
        const items = [];

        for (var item in response) {
            items.push(response[item]);
        }

        function getTime(timeItem) {
            const fetchedTime = timeItem;

            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

            const date = new Date(fetchedTime * 1000);
            const year = date.getFullYear();
            const month = months[date.getMonth()];
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = "0" + date.getMinutes();
            const seconds = "0" + date.getSeconds();

            const converted = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

            return converted;
        }

        function getDuration(durationItem) {

            const minutes = Math.floor(durationItem / 60);
            const seconds = durationItem - minutes * 60;

            const duration = minutes + ' minutes and ' + seconds + ' seconds';

            return duration;
        }

        return (

            <div className={`${styles.container} container`}>
                <h2>Next Preticted Pass Times of ISS on Current Location</h2>
                <h4>Date, Time & Duration</h4>
                {items.map((item, i) =>
                <h6 key={i}>
                    {getTime(item.risetime)} - {getDuration(item.duration)}
                </h6>)}
            </div>
        )
    }
}

export default PassTimes;