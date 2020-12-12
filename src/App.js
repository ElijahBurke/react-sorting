import React from 'react';
import useBars from './Helpers/BarHook';
import './App.css';

import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [array, bars, isSorting, isSorted, length, setArrayAndBars, sort, onChange] = useBars(100);

  function startSort(steps, type) {
    sort(steps, type);
  }

  return (
    <div className="App">
      <Header 
        onChange={onChange} 
        value={length} 
        startSort={startSort} 
        newArray={setArrayAndBars} 
        array={array} 
        isSorting={isSorting}
        isSorted={isSorted}
      />
      { bars.length > 0 && <Dashboard bars={bars} /> }
    </div>
  );
}

export default App;
