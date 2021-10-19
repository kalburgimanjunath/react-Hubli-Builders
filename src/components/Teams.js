import React from 'react';
import Avatar from './Avatar';
export default function Teams() {
  const user = [
    {
      name: 'Manjunath Kalburgi',
      title: 'software engineer',
      url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      bio: 'I am from hubli and a software engineer having 10+ exp ',
    },
    {
      name: 'Sandip Bhakat',
      title: 'software engineer',
      url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      bio: 'I am from hubli and a software engineer having 10+ exp ',
    },
    {
      name: 'Deepak Kumar',
      title: 'software engineer',
      url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      bio: 'I am from hubli and a software engineer having 10+ exp ',
    },
  ];
  return (
    <div>
      <h1>Team</h1>
      <Avatar user={user} />
    </div>
  );
}
