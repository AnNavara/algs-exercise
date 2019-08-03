function absoluteValuesSumMinimization(a: number[]): number {
  const mid = (arr) => Math.floor(arr.length / 2);
  return a.length % 2 !== 0 ? a[mid(a)] : a[mid(a) - 1];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));