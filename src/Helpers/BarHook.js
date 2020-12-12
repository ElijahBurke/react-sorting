import { useEffect, useState, useCallback } from 'react';
import randomArrGenerator from './RandomArray';
import bubbleSelection from './BubbleSelectionAnimation';
import insertion from './InsertionAnimation';
import merge from './MergeAnimation';
import quick from './QuickAnimation';

export default function useBars(startLength) {
  const [length, setLength] = useState(startLength);
  const [array, setArray] = useState([]);
  const [bars, setBars] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [intervalInMs, setIntervalInMs] = useState((1000 / startLength) * 2);

  const setArrayAndBars = useCallback(() => {
    const randomArray = randomArrGenerator(length);
    setArray(randomArray);
    setBars(randomArray.map((num) => ({
      num,
      height: `${(num + 20) / 1.2}%`,
      background: 'red',
    })));
    setIsSorted(false);
  }, [length]);

  useEffect(() => {
    setArrayAndBars();
  }, [setArrayAndBars]);

  const sortFuncs = {
    bubble: bubbleSelection,
    insertion,
    selection: bubbleSelection,
    merge,
    quick,
  };

  function sort(steps, type) {
    sortFuncs[type](steps, setBars, intervalInMs, setIsSorting, setIsSorted);
  }

  function onChange(value) {
    setLength(value);
    setIntervalInMs(1000 / value);
  }

  return [array, bars, isSorting, isSorted, length, setArrayAndBars, sort, onChange];
}
