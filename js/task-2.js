/*function makeArray(firstArray, secondArray, maxLength) {
  let transitionalArray = firstArray.concat(secondArray);
  let finalArray = [];
  for (let i = 0; i < maxLength; i++) {
    finalArray.push(transitionalArray[i]);
  }
  return finalArray;
}*/

function makeArray(firstArray, secondArray, maxLength) {
  let transitionalArray = firstArray.concat(secondArray);
  let finalArray = transitionalArray.slice(0, maxLength);
  return finalArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
