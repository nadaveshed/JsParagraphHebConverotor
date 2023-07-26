function sortWordsHebrewOrder(paragraph) {
  // Define the Hebrew order
  const hebrewOrder = 'ABGDHVZJTYKLMNSIPXQRWUCEFO';

  // Split the paragraph into words
  const words = paragraph.split(' ');
  const regex = /(\s[^\w ]|[^\w ])/gi

  // Remove special characters from the words array
  const filteredWordsArray = words.map(function (str) {
    return str.replace(regex, '');
  });

  // Sort the words according to the hebrew order
  const sortedWords = filteredWordsArray.sort((a, b) => {
    const minLength = Math.min(a.length, b.length);

    for (let i = 0; i < minLength; i++) {
      const indexA = hebrewOrder.indexOf(a[i].toUpperCase());
      const indexB = hebrewOrder.indexOf(b[i].toUpperCase());

      if (indexA !== indexB) {
        return indexA - indexB;
      }
    }

    return a.length - b.length;
  });

  // Return the sorted words as a string
  return sortedWords.join(' ');
}

// Initialize the read input from user
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Example
const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

// Read the input and return the sorted paragraph
readline.question('Write paragraph to sort (Example: ' + paragraph + '):\n', input => {
    const sortedParagraph = sortWordsHebrewOrder(input);
    console.log(sortedParagraph);
    readline.close();
});
