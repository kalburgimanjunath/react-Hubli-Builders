import React from 'react';
import {
  Feature,
  Stages,
  Process,
  Legal,
  Teams,
  Subscribe,
} from '../components/index';
export default function Home() {
  return (
    <div>
      <Feature className="section" />
      <Stages className="section" />
      <Process className="section" title="How it works?" />
      <Legal className="section" />
      <Teams />
      <Subscribe />
    </div>
  );
}
