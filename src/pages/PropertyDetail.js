import React from 'react';
import { Property } from '../components/index';
export default function PropertyDetail() {
  return (
    <div>
      <img src="" width="700" height="400" />
      <h1>Details</h1>
      <div>
        <div>Furnished Furnished</div>
        <div> Listed by Dealer</div>
        <div> Area 2000</div>
        <div> Carpet Area 2000</div>
        <div> Maintenance (Monthly) 5000</div>
        <div> Car Parking 1 </div>
        <div> Washrooms 2</div>
        <div> Project Name Naidu consultancy</div>
      </div>
      <div>
        <h1>Description</h1>
        <p>
          24Works stations 2Cabins Conference hall Reception pantry server Ac
          washrooms carparking lift power backup More details call me Naidu
          consultant
        </p>
      </div>
      <div>
        <h1>Price:10000 Rupees</h1>
        <h2>Title</h2>
        <div>location</div>
      </div>
      <div>
        <h1>Seller description</h1>
        <div>Avatar</div>
        <div>Contact Details</div>
      </div>
      <div>Map Location</div>
      <div>Related Ads</div>
      <Property />
      <Property />
      <Property />
    </div>
  );
}
