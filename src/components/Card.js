import React from 'react';
import Avatar from './Avatar';
export default function Card({ user }) {
  let userdata = user;
  // console.log(userdata);

  return (
    <div>
      <Avatar user={userdata} type="lawyers" />
    </div>
  );
}
