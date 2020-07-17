import React from 'react';

const Dislike = ({ userId, choice }) => (
  <button
    type="button"
    onClick={() => choice(userId, 'ADD_TO_DISLIKED_USERS')}
  >
    <img src="images/misc/dislike.png" alt="Dislike User" />
  </button>
);

export default Dislike;
