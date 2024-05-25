const fibs = (n) => {
  const arr = [0, 1];
  if (n <= 0) return 'Please enter a valid number of elements';
  if (n === 1) return [0];
  if (n === 2) return arr;
  for (let i = 2; i < n; i++)
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return arr;
};

const fibsRec = (n) => {
  return n <= 0
    ? 'Please enter a valid number of elements'
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
};
