/*https://leetcode.com/problems/best-time-to-buy-and-sell-stock/*/

const maxProfit = (prices) => {
  let [minPrice, maxProfit] = [Infinity, 0];

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};
