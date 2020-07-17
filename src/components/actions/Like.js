import React from 'react';

const Like = ({ userId, choice }) => (
  <button
    type="button"
    onClick={() => choice(userId, 'ADD_TO_LIKED_USERS')}
  >
    <img src="images/misc/like.png" alt="Like User" />
  </button>
);

export default Like;
