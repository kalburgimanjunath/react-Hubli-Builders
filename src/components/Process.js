import React from 'react';
export default function Process({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        <ol>
          <li>
            <b>Apply for a free discovery call</b>
            <br />
            quick 10 - 15 min discovery call to understand your needs and
            recommendation for next steps.
          </li>
          <li>
            <b>Get the right match and intro</b>
            <br />
            We will manually match you with our attorney network and provide
            relevant intros.
          </li>
          <li>
            <b>Book your sessions online</b>
            <br />
            Get your legal advice online. You can work through multiple or
            single-session.
          </li>
        </ol>
      </p>
    </div>
  );
}
