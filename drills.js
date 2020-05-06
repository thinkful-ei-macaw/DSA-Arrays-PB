const urlify = (string) => {
  let newString = string.replace(' ', '%20');
  return newString;
};

// console.log(urlify('tauhida parveen'));

function removeLessThan5(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 5) {
      array.splice(array[i], 1);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// console.log(removeLessThan5([ 1, 2, 3, 4, 5, 6, 7 ]));

function maxSum(array) {
  let currentMax = 0;
  let runningTotal = 0;
  for (let i = 0; i < array.length; i++) {
    runningTotal += array[i];
    if (runningTotal > currentMax) {
      currentMax = runningTotal;
    }
  }
  return currentMax;
}

// console.log(maxSum([ 4, 6, -3, 5, -2, 1 ]));

function merge(array1, array2) {
  const newArray = array1.concat(array2);
  return newArray.sort(function(a, b) {
    return a - b;
  });
}

// console.log(merge([ 1, 3, 6, 8, 11 ], [ 2, 3, 5, 8, 9, 10 ]));

function removeChars(string, charsToRemove) {
  // const output = [];
  let string1 = [];
  for (let i = 0; i < string.length; i++) {
    string1.push(string[i]);
  }
  console.log(string1);

  let charsArray = [];
  for (let j = 0; j < charsToRemove.length; j++) {
    charsArray.push(charsToRemove[j]);
  }
  console.log(charsArray);


  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < charsToRemove.length; j++) {
      if (string1[i] === charsToRemove[j]) {
        string1.splice(i, 1);
      }
    }
  }

  let result = '';
  for (let i = 0; i < string1.length; i++) {
    result += string1[i];
  }
  return result;
}

console.log(removeChars('Battlei of the Vowels: Hawaii vs. Grozny', 'aeiou'));