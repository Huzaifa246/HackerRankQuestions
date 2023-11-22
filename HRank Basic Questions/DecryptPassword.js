function decryptPassword(s) {
    // Convert the input string to an array of characters
    s = s.split('');
    let i = 0;

    // Iterate through the characters until a non-digit or '0' is encountered 
    while (i < s.length && s[i].match(/\d/) && s[i] !== '0') {
        i++;
    }
    // Replace '0' with characters from the previous part of the string in reverse order
    for (let j = 0; j < s.length; j++) {
        if (s[j] === '0') {
            s[j] = s[i - j - 1];
        }
    }

     // Swap '*' with the previous two characters
    for(let j = i; j < s.length; j++) {
        if(s[j] === '*')
        {
            [s[j-1], s[j - 2]] = [s[j - 2], s[j -1]]
        }
    }

    // Join the modified array and remove '*' characters
    return s.slice(i).join('').replace(/\*/g, '');
}