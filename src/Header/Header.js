import React from 'react';
import './Header.css';

import bubble from '../Sorting Algorithms/Bubble';
import insertion from '../Sorting Algorithms/Insertion';
import selection from '../Sorting Algorithms/Selection';
import merge from '../Sorting Algorithms/Merge';
import quick from '../Sorting Algorithms/Quick';

function Header({
  onChange, value, startSort, newArray, array, isSorting, isSorted
}) {
  return (
    <header>
      <input 
        disabled={isSorting} 
        type="range" 
        min="20" 
        max="200" 
        value={value} 
        id="myRange" 
        onChange={(e) => onChange(e.target.value)}
      />
      <button disabled={isSorting} id="new" onClick={newArray}>New Array</button>
      <button disabled={isSorting || isSorted} id="selection" onClick={() => startSort(selection(array), 'selection')}>Selection</button>
      <button disabled={isSorting || isSorted} id="insertion" onClick={() => startSort(insertion(array), 'insertion')}>Insertion</button>
      <button disabled={isSorting || isSorted} id="bubble" onClick={() => startSort(bubble(array), 'bubble')}>Bubble</button>
      <button disabled={isSorting || isSorted} id="merge" onClick={() => startSort(merge(array), 'merge')}>Merge</button>
      <button disabled={isSorting || isSorted} id="quick" onClick={() => startSort(quick(array), 'quick')}>Quick</button>
    </header>
  );
}

export default Header;
