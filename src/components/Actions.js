import React from 'react';
import Dislike from './actions/Dislike';
import Like from './actions/Like';

const Actions = ({ person, choice }) => (
  <div id="actions">
    <Dislike
      userId={person.id}
      choice={choice}
    />
    <Like
      userId={person.id}
      choice={choice}
    />
  </div>
);

export default Actions;
