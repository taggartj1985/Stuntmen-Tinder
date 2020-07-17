import React from 'react';
import LikedPerson from './LikedPerson';

const Matches = ({ activeUserImage, likedUsers}) => (
  <div id="matches">
    <div id="liked-people">
      <p>
        {likedUsers.length > 0
          ? "Stuntmen you want for your next movie!"
          : 'Need to keep looking!'}
      </p>

      {likedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}
    </div>
  </div>
);

export default Matches;
