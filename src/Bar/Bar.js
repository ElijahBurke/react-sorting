import React from 'react';
import './Bar.css';

function Bar ({ bar }) {
  const { height, background } = bar;
  return (
    <div className="bar" style={{ height, background }}>
    </div>
  );
}

export default Bar;