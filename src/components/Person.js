import React from 'react';
import Actions from './Actions';

const Person = ({ person, choice }) => {
  const { name, movies, age, image } = person;

  return (
    <>
      <div className="person">
        <div className="person-photo">
          <img src={`/images/users/${image}`} alt={name} />
        </div>

        <div>
        <h3>Name: {name}</h3>
        <p>Age: {age} <br/>
        Protfolio: {movies}</p>
        </div>
      </div>

      <Actions
        person={person}
        choice={choice}
      />
    </>
  );
};

export default Person;
