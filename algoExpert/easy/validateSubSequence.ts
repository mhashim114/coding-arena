// O(n) time | O(1) space
function isValidSubsequence(array: number[], sequence: number[]) {
    let index: number = 0;
    for (let i = 0; i < array.length; i++) {
        if (index === sequence.length) {
            break;
        }
        if (array[i] === sequence[index] && index < sequence.length) {
            index += 1;
        }
    }

    return index === sequence.length;
}

console.log(isValidSubsequence([1, 2, 3], [1, 2, 3, 4]));