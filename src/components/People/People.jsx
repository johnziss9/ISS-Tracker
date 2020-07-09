import React from 'react';
import person from '../../images/person.png';

const People = ({ data: { number, people }}) => {

    const totalPeople = [];

    for (var i = 1; i <= number; i++)
        totalPeople.push(i);
    
    const peopleInArray = totalPeople.map(() =>
        <img src={person} alt="person" />
    );

    console.log(totalPeople);

    return (
        <div>
            <h2>People currently on the IIS</h2>
            <p>Number of people currently on the IIS: { number }</p>
            <div>{peopleInArray}</div>
        </div>
    )
}

export default People;