import clearColors from './HandleColors';

export default function merge(steps, setBars, interval, setIsSorting, setIsSorted) {
  let prevBars = false;
  setIsSorting(true);
  steps.forEach((step, i) => {
    if (i % 2 === 0) {
      setTimeout(() => {
        setBars((bars) => {
          const copyBars = [...bars];
          if (prevBars) {
            copyBars[prevBars[0]].background = 'red';
            copyBars[prevBars[1]].background = 'red';
          }
          copyBars[step[0]].background = 'blue';
          copyBars[step[1]].background = 'blue';
          prevBars = [step[0], step[1]];
          return copyBars;
        });
      }, interval * i);
    } else {
      setTimeout(() => {
        setBars((bars) => {
          const copyBars = [...bars];
          copyBars[step[0]].height = `${(step[1] + 20) / 1.2}%`;
          copyBars[step[0]].num = step[1];
          return copyBars;
        });
        if (i === steps.length - 1) {
          setIsSorting(false);
          clearColors(prevBars, setBars);
          setIsSorted(true);
        }
      }, interval * i);
    }
  });
}
