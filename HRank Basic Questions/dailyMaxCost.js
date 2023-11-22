function maxCost(cost, labels, dailyCount) {
  let ans = 0;
  let curCount = 0;
  let curCost = 0;

  for(let i =0; i< cost.length; i++) {
    const c = cost[i];
    const label = labels[c];

    curCost += c;
    if(label === 'illegal') {
     continue;
    }
    curCount += 1;

    if(curCount === dailyCount) {
      ans = Math.max(ans, curCost);
      curCount = 0;
      curCost = 0;
    }
  }
  return ans;
}

// Example usage:
// const cost = [10, 5, 8, 2];
// const labels = ["legal", "illegal", "legal", "illegal"];
// const dailyCount = 2;

// const result = maxCost(cost, labels, dailyCount);
// console.log(result);