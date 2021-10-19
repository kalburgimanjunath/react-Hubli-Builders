import React from 'react';
import { Link } from 'react-router-dom';
export default function Property() {
  return (
    <div>
      <img src="" width="300" height="250" />
      <div>Price:102002Rs</div>
      <div>Title</div>
      <div>Location</div>
      <div>Posted On</div>
      <div>Book mark</div>
      <Link to="./propertydetail">know more</Link>
    </div>
  );
}
