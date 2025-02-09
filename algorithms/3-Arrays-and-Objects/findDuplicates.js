/**
Write a JavaScript function that takes an array of integers as input and returns true if there are any duplicate elements in the array, and false otherwise.

Input:
    1. An array of integers.
Output:
    true if there are duplicates in the input array; false otherwise.
 */

/**
Steps:
1. Create an empty array to store encountered numbers.
2. Iterate through the input array.
3. For each number, check if it already exists in the array.
4. If the number is found, there is a duplicate, so return true.
5. If the number is not found, add it to the array. - this is an overstatement, ignore and move on.
6. After iterating through the entire array, if no duplicates are found, return false.
 */

// documentation: .filter(); and indexOf

let encounteredNum = [];

function hasDuplicates(arr) {
   for (i = 0; i < arr.length; i++) {
    if () {
        return true;
    } else () {

    }
   }
}

// Example usage
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [1, 2, 3, 4, 2, 6];
console.log(hasDuplicates(numbers1)); // Output: false
console.log(hasDuplicates(numbers2)); // Output: true


/* <!DOCTYPE html>
<html>
<body>
   <h3>Finding duplicate values in a JavaScript array</h3>
   <p>Here, we will find the repeating values in the given array.</p>
   <p>Original array: [6, 9, 15, 6, 13, 9, 11, 15]</p>
   <p id="result"></p>
   <script>
      //simple traversal method
      let array = [6, 9, 15, 6, 13, 9, 11, 15];
      let index = 0, newArr = [];
      const length = array.length; // to get length of array
      function findDuplicates(arr) {
         for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length; j++) {
            if (arr[i] === arr[j]) {
                  newArr[index] = arr[i];
                  index++;
               }
            }
         }
         return newArr;
      }
      document.getElementById('result').innerHTML = 'Duplicate values are: <b>' + findDuplicates(array) + '</b>';
   </script>
</body>
</html>

*/