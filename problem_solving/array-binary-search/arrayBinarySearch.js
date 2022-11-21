'use strict';
let binary = module.exports;

// sort the array using built in function sort 
binary.sorted = function (array) {

    return array.sort((a, b) => a - b);
}
// search in the array using binary method 
binary.binarySearch = function (arr, value) {
    let arrSorted = binary.sorted(arr);

    let highIndex = arrSorted.length - 1;
    let lessIndex = 0;
    let midPoint = 0;

    // as it less and we can look through it 
    while (lessIndex <= highIndex) {
        // to get the middle value using middle index
        let midPoint = Math.floor((lessIndex + highIndex) / 2);
        // if the middle equal what we look for it it will be return     
        if (arrSorted[midPoint] === value) {
            return midPoint;
            // return arr[midpoint] // if i want to return the value not the index
            /// if the value greater than , it shoud be increase the less index to be the mid point index +1
        } else if (value > arrSorted[midPoint]) {
            lessIndex = midPoint + 1;
            //else which mean less 
        } else {
            highIndex = midPoint - 1
        }
    }
    return -1
}
