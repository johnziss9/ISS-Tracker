import React from 'react';

const People = ({ data: { number, people }}) => {

    return (
        <div>
            <h2>People currently on the IIS</h2>
            <p>Number of people currently on the IIS: { number }</p>
        </div>
    )
}

export default People;