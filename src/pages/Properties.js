import React from 'react';
import { Feature, Property, SearchFilter } from '../components/index';
export default function Properties() {
  return (
    <div>
      <h1>Find Properties to Buy or Sell </h1>
      <h2></h2>
      <Feature
        className="section"
        title="Find your legal experts"
        text="Speed up your company-building process. Browse, search or filter the
    legal professionals you need."
        direction
      />
      <SearchFilter />
      <Property />
      <Property />
      <Property />
      <Property />
    </div>
  );
}
