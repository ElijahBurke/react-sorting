export default function bubble(arr) {
  let steps = [];
  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let isSwap = arr[j] > arr[j + 1];
      steps.push([j, j + 1, isSwap]);
      if (arr[j] > arr[j + 1]) {
        isSorted = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (isSorted) return steps;
  }
  return steps;
}