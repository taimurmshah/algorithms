/*https://leetcode.com/problems/min-cost-climbing-stairs/*/

const minCostClimbingStairs = (cost) => {
  for (let i = 2; i < cost.length; i++)
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

/*This problem was extremely difficult to understand, based on how it was written
 * what this problem is saying is that this array represents some structure where
 * a cost must be paid (progressively added) to get to another index.
 * So, in this example, this array represents a staircase.
 * It's asking: calculate the minimum cost of getting to he end of the array, where
 * each index represents a cost, and you can move by either one step or two.
 * costs are added.
 * */
