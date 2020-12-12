export default function quick (arr) {
  let steps = [];
  (function quickSort (arr, left = 0, right = arr.length - 1) {
  if (left >= right) return true;
  let smaller = left;
  let pivot = arr[right];
  for (let i = smaller; i < right; i++) {
    if (arr[i] <= pivot) {
      steps.push([right, i, smaller, arr[i], arr[smaller]]);
      [arr[smaller], arr[i]] = [arr[i], arr[smaller]];
      smaller++;
    } else steps.push([right, i]);
  }
  steps.push([right, smaller, right, arr[smaller], arr[right]]);
  [arr[right], arr[smaller]] = [arr[smaller], arr[right]];
  quickSort(arr, left, smaller - 1, steps);
  quickSort(arr, smaller + 1, right, steps);
})(arr)
return steps;
}