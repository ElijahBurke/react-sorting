export default function selection(arr) {
  let steps = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      steps.push([i, j, false]);
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    steps.push([i, minIndex, true]);
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return steps;
}