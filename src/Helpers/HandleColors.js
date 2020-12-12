export default function clearColors (prevBars, setBars) {
setTimeout(() => {
  setBars(bars => {
    let copyBars = [...bars];
    copyBars[prevBars[0]].background = 'red';
    copyBars[prevBars[1]].background = 'red';
    return copyBars;
  })
}, 10)
}
