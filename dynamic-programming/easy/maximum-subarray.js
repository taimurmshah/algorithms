//https://leetcode.com/problems/maximum-subarray/

const maxSubArray = (nums) => {
  if (nums.length === 1) return nums[0];

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    max = Math.max(max, nums[i]);
  }
  return max;
};
