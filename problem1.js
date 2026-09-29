function missingNumber(nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([3, 0, 1]));
// 2

console.log(missingNumber([0, 1]));
// 2

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// 8

console.log(missingNumber([0]));
// 1

console.log(missingNumber([1]));
// 0

console.log(missingNumber([0, 1, 2, 3, 4]));
// 5

console.log(missingNumber([1, 2, 3, 4, 5]));
// 0

console.log(missingNumber([0, 2, 3, 4, 5]));
// 1

console.log(missingNumber([0, 1, 3, 4, 5]));
// 2

console.log(missingNumber([0, 1, 2, 4, 5]));
// 3

console.log(missingNumber([0, 1, 2, 3, 5]));
// 4

console.log(missingNumber([1, 2, 3, 4, 5, 6, 7]));
// 0

console.log(missingNumber([0, 1, 2, 3, 4, 5, 6]));
// 7

console.log(missingNumber([5, 0, 3, 1, 6, 2, 7, 4]));
// 8

console.log(missingNumber([8, 6, 4, 2, 3, 5, 7, 1, 0]));
// 9

console.log(missingNumber([0, 1, 2, 3, 4, 6, 7, 8, 9]));
// 5

console.log(missingNumber([0, 1, 2, 4, 5, 6, 7, 8, 9]));
// 3

console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 8, 9]));
// 7

console.log(missingNumber([0, 1, 2, 3, 4, 5, 7, 8, 9]));
// 6

console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 8]));
// 9
