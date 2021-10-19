import React from 'react';
import { Link } from 'react-router-dom';
export default function Avatar({ user, type }) {
  // console.log(user);
  return (
    <div>
      {user.map((userdata) => {
        return (
          <div>
            <div>
              <img src={userdata.url} width="100" height="100" />
              <div>{userdata.name}</div>
              <div>{userdata.title}</div>
              <div>{userdata.bio}</div>
            </div>
            {type == 'lawyers' ? (
              <Link to="./propertydetail">View Properties</Link>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </div>
  );
}
