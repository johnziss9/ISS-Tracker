import React from 'react';
import styles from './PassTimes.module.css';

class PassTimes extends React.Component {

    render() {

        const { passTimesData: { response }} = this.props;
            
        const items = [];

        for (var item in response) {
            items.push(response[item]);
        }

        return (

            <div className={`${styles.container} container`}>
                <h2>Next Preticted Pass Times of ISS on Current Location</h2>
                <h4>Time & Duration</h4>
                {items.map((item, i) =>
                <h2 key={i}>
                    {item.risetime} - {item.duration}
                </h2>)}
            </div>
        )
    }
}

export default PassTimes;