import React from 'react';
import './Dashboard.css';

import Bar from '../Bar/Bar';

function Dashboard ({ bars }) {
  return (
    <div className="dashboard_container">
      <div className="bar_container">
        { bars.map((bar, i) => <Bar key={i + 1} bar={bar} />) }
      </div>
    </div>
  );
}

export default Dashboard;