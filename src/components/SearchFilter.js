import React from 'react';
export default function SearchFilter() {
  const filterOption = ['Seller', 'Reseller', 'Both'];
  const FilterItems = filterOption.map((item) => {
    return <option value={item}>{item}</option>;
  });
  return (
    <div>
      <input type="search" />
      <select>{FilterItems}</select>
    </div>
  );
}
