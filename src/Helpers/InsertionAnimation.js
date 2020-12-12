import clearColors from './HandleColors';

export default function insertion (steps, setBars, interval, setIsSorting, setIsSorted) {
  let prevBars = false;
  setIsSorting(true);
  steps.forEach((step, i) => {
    setTimeout(() => {
      setBars(bars => {
        let copyBars = [...bars];

        if (prevBars) {
          copyBars[prevBars[0]].background = 'red';
          copyBars[prevBars[1]].background = 'red';
        }
        copyBars[step[0]].background = 'blue';
        copyBars[step[1]].background = 'blue';
        prevBars = [step[0], step[1]];

        if (!step[2]) return copyBars;
        if (step[3]) {
          copyBars[step[1]].height = (step[3] + 20) / 1.2 + '%';
          copyBars[step[1]].num = step[3];
        }
        else copyBars[step[1]] = {...copyBars[step[0]]};

        return copyBars;
      })
      if (i === steps.length - 1) {
        setIsSorting(false);
        clearColors(prevBars, setBars);
        setIsSorted(true);
      }
    }, i * interval)
  })
}