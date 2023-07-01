function twoNumberSum(array: number[], targetSum: number) {
    let result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                result.push(array[i]);
                result.push(array[j]);
            }
        }
    }
    return result;
}


function twoNumberSum2(array: number[], targetSum: number) {
    let hashTable = {};
    for (let num of array) {
        let diff = targetSum - num;
        if (diff in hashTable) {
            return [diff, num];
        }
        hashTable[num] = true;
    }
    return [];
}


function twoNumberSum3(array: number[], targetSum: number) {
    let firstPointer = 0;
    let secondPointer = array.length - 1;
    array = array.sort(function (a, b) { return a - b });

    while (firstPointer <= secondPointer) {
        if (array[firstPointer] + array[secondPointer] === targetSum) {
            return [array[firstPointer], array[secondPointer]];
        }
        else if (array[firstPointer] + array[secondPointer] < targetSum) {
            firstPointer += 1;
        }
        else if (array[firstPointer] + array[secondPointer] > targetSum) {
            secondPointer -= 1;
        }
    }
    return [];
}
