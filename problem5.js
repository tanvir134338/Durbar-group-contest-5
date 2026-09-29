function findRainfallPeaks(rainfall) {
  const peaks = [];

  for (let i = 1; i < rainfall.length - 1; i++) {
    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
      peaks.push(i + 1);
    }
  }

  return peaks;
}

console.log(findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]));
console.log(
  findRainfallPeaks([
    1, 3, 5, 7, 9, 8, 55, 45, 52, 62, 2, 0, 1, 4, 5, 6, 9, 5, 8, 5, 4, 1, 58, 1,
    74, 5, 5, 5, 89, 4, 456, 4566,
  ]),
);
console.log(findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6]));
// [2, 5]

console.log(findRainfallPeaks([1, 2, 3, 2, 1]));
// [3]

console.log(findRainfallPeaks([1, 3, 1]));
// [2]

console.log(findRainfallPeaks([5, 1, 5]));
// []

console.log(findRainfallPeaks([1, 3, 2, 4, 1]));
// [2, 4]

console.log(findRainfallPeaks([5, 5, 5, 5, 5]));
// []

console.log(findRainfallPeaks([1, 2, 2, 1]));
// []

console.log(findRainfallPeaks([1, 5, 1, 5, 1, 5, 1]));
// [2, 4, 6]

console.log(findRainfallPeaks([10, 1]));
// []

console.log(findRainfallPeaks([10]));
// []

console.log(findRainfallPeaks([]));
// []

console.log(findRainfallPeaks([0, 5, 0, 10, 0]));
// [2, 4]

console.log(findRainfallPeaks([-5, -1, -5]));
// [2]

console.log(findRainfallPeaks([1, 10, 5, 20, 3, 15, 2]));
// [2, 4, 6]

console.log(
  findRainfallPeaks([
    1, 3, 5, 7, 9, 8, 55, 45, 52, 62, 2, 0, 1, 4, 5, 6, 9, 5, 8, 5, 4, 1, 58, 1,
    74, 5, 5, 5, 89, 4, 456, 4566,
  ]),
);
// [5, 7, 10, 17, 19, 23, 25, 29]
