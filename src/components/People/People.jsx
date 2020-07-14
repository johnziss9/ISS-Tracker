import React from 'react';
import person from '../../images/person.png';
import styles from './People.module.css';

const People = ({ peopleData: { number, people }}) => {

    const peopleNames = [];

    for (var i = 0; i < number; i++) {
        peopleNames.push(people[i].name);
    }

    return (
        <div className={`${styles.container} container`}>
            <h2 className={styles.title}>People currently on the IIS</h2>
            <h5 className={styles.subtitle}>Total Number: { number }</h5>
            {peopleNames.map((name, i) => 
                <h6 className={styles.personName}>
                    <img src={person} alt="person" className={styles.personImg} />
                    {name}
                </h6>)}
        </div>
    )
}

export default People;