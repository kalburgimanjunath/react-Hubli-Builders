import React from 'react';
export default function SearchFilter() {
  const filterOption = [
    'Mergers & Acquisitions',
    'Shareholder Agreement',
    'Patent',
    'Trading Agreement',
    'Seed Funding',
    'Intellectual Property',
    'Venture Financing',
    'International Expansion',
    'Company Entity',
    'Trademark',
    'Liability Protection',
    'Exit Agreement',
    'Advisory Board',
  ];
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
