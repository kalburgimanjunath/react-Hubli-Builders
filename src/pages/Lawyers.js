import React from 'react';
import { Feature, Card, SearchFilter } from '../components/index';

export default function Lawyers() {
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
      <h1>Find your legal experts</h1>
      <h2></h2>
      <Feature
        className="section"
        title="Find your legal experts"
        text="Speed up your company-building process. Browse, search or filter the
        legal professionals you need."
        direction
      />
      <SearchFilter />
      <Card user={user} />
    </div>
  );
}
