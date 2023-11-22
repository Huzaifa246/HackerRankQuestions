function findSubstring(str, k) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    let best = 0;
    let ans = 0;

    for(let i =0 ; i < k; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    best = count;
    for(let i = k; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
        if(vowels.includes(str[i-k])){
            count--;
        }
        if(count > best){
            best = count;
            ans = i - k + 1;
        }
    }
    if(best > 0){
        return str.slice(ans, ans + k);
    }
}