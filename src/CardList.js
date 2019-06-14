import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={robots[0].id}
                        name={robots[0].name}
                        email={robots[0].email}
                    />
                );
            })}
        </div>
    );
}

export default CardList;