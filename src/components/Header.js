import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="./">Home</Link>
        </li>
        <li>
          <Link to="./lawyers">Advisors</Link>
        </li>
        <li>
          <Link
            to={{
              pathname:
                'https://calendly.com/manjunathkalburgi65512/15min?month=2021-10&back=1',
            }}
            target="_blank"
          >
            Start here
          </Link>
        </li>
      </ul>
    </div>
  );
}
