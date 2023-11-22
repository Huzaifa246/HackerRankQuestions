function stringAnagram(dictionary, query) {
    const d = new Map();

    for(const w in dictionary) {
        const sortedWords = w.split('').sort().join('');
        d.set(sortedWords, (d.get(sortedWords) || 0) + 1);
    }
    const ansArray = [];

    for(const w in query){
        const queryWords = w.split('').sort().join('');
        ansArray.push(d.get(queryWords || 0))
    }
    return ansArray;
}

// rl.question('Enter the number of words in the dictionary: ', (dictionaryCount) => {
//     const dictionary = [];
  
//     (function readDictionaryWord(i) {
//       if (i < dictionaryCount) {
//         rl.question(`Enter dictionary word #${i + 1}: `, (word) => {
//           dictionary.push(word);
//           readDictionaryWord(i + 1);
//         });
//       } else {
//         rl.question('Enter the number of queries: ', (queryCount) => {
//           const query = [];
  
//           (function readQueryWord(j) {
//             if (j < queryCount) {
//               rl.question(`Enter query word #${j + 1}: `, (word) => {
//                 query.push(word);
//                 readQueryWord(j + 1);
//               });
//             } else {
//               const result = stringAnagram(dictionary, query);
//               console.log(result.join('\n'));
//               rl.close();
//             }
//           })(0);
//         });
//       }
//     })(0);
//   });