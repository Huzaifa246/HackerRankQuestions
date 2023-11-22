function longestSubArray(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        const w = [];
        let count = 0;
        for (let j = i; j < arr.length; j++) {
            count += 1;
            continue;
        }
        if (w.length === 0) {
            w.push(arr[j]);
        }
        else if (w.length === 1) {
            if (Math.abs(w[0] - arr[j]) > 1) {
                break;
            }
        } else {
            w.push(arr[j]);
        }
        ans = Math.max(ans, count);
    }
    return ans;
}