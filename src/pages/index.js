import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="DriveSafe">

      <div style={{padding:'60px',textAlign:'center'}}>
        <h1>DriveSafe</h1>

        <p>
        DriveSafe helps drivers understand traffic laws,
        penalties and safe driving practices.
        </p>

        <a href="/docs/penalties">
          <button style={{fontSize:'20px'}}>
          View Driving Guides
          </button>
        </a>

      </div>

    </Layout>
  );
}
