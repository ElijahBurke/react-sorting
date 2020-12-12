import clearColors from './HandleColors';

export default function quick (steps, setBars, interval, setIsSorting, setIsSorted) {
  let prevBars = false;
  setIsSorting(true);
  steps.forEach((step, i) => {
      setTimeout(() => {
        setBars(bars => {
          let copyBars = [...bars];
  
          if (step[2] >= 0) {
            [copyBars[step[1]], copyBars[step[2]]] = [copyBars[step[2]], copyBars[step[1]]];
          }
  
          if (prevBars) {
            copyBars[prevBars[0]].background = 'red';
            copyBars[prevBars[1]].background = 'red';
          }
          copyBars[step[0]].background = 'blue';
          copyBars[step[1]].background = 'blue';
          prevBars = [step[0], step[1]];
  
          return copyBars;
        })
        if (i === steps.length - 1) {
          setIsSorting(false);
          setIsSorted(true);
          clearColors(prevBars, setBars);
        }
      }, i * interval)
  })
}