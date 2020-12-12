export default function insertion(arr) {
  const steps = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let j = i;
      let current = arr[j];
      while (j > 0 && current < arr[j - 1]) {
        steps.push([j - 1, j, true]);
        arr[j] = arr[j - 1];
        j--;
      }
      let comparable = j - 1 < 0 ? 0 : j - 1;
      steps.push([comparable, j, true, current]);
      arr[j] = current;
    } else {
      steps.push([i - 1, i, false]);
    }
  }
  return steps;
}