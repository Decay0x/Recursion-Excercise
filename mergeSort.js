const mergeSortRec = (arr) => {
  if (!Array.isArray(arr) || isNaN(arr[0]))
    return 'Please pass in an array of numbers';
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSortRec(left), mergeSortRec(right));
};

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      // add left to the merged array
      merged.push(left[0]);
      // remove left[0] from left
      left.shift();
    } else {
      // add right to the merged array
      merged.push(right[0]);
      // remove right[0] from right
      right.shift();
    }
  }

  while (right.length > 0) {
    merged.push(right[0]);
    right.shift();
  }

  while (left.length > 0) {
    merged.push(left[0]);
    left.shift();
  }

  return merged;
}
