function subStringSum(number, queries){
    const a = [0];
    const b = [0];

    for (const x of number) {
        a.push(a[a.length - 1] + x);
        b.push(b[b.length - 1] + (x === 0 ? 1 : 0));
    }
    // ([l, r, x]) is destructuring the queries array each element l r & x, 
    // like l = queries[0], r = queries[1], x = queries[2] and so on
    // a[r] - a[l - 1] + first sub is done from index 0 to l -1 and than ADD to calculate
    // and x * is used include or exclude the count based on value of x 
    return queries.map(([l, r, x]) => a[r] - a[l - 1] + x * (b[r] - b[l - 1]));
}
