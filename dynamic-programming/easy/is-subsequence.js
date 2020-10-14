const isSubsequence = (s, t) => {
  s = s.split("");
  t = t.split("");

  const dp = [];

  for (let i = 0; i <= s.length; i++) {
    dp[i] = new Array(t.length + 1).fill(0);
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] !== t[j - 1])
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      else dp[i][j] = dp[i - 1][j - 1] + 1;
    }
  }

  console.log({ dp });
  return dp[s.length][t.length] === s.length;
};

console.log(isSubsequence("abc", "ahbgdc")); //true
console.log(isSubsequence("axc", "ahbgdc")); //false
console.log(isSubsequence("aaaaaa", "bbaaaa")); //false
