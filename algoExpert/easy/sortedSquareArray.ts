// O(nlogn) time | O(n) space 
function sortedSquaredArray(array: number[]) {
    let squaredArray = array.map(num => num * num);
    squaredArray = squaredArray.sort(function (a, b) { return a - b });

    return squaredArray;
}