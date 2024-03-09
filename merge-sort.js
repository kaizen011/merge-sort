function mergeSort(array) {
    // Base case: if the array has one element or is empty, it is already sorted
    if (array.length <= 1) {
        return array;
    }
    // Divide the array into two halves
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    // Recursively sort each half
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Compare elements from left and right halves and merge
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            mergedArray.push(left[i]);
            i++;
        } else {
            mergedArray.push(right[j]);
            j++;
        }
    }

    // Append any remaining elements from left and right
    while (i < left.length) {
        mergedArray.push(left[i]);
        i++;
    }

    while (j < right.length) {
        mergedArray.push(right[j]);
        j++;
    }

    return mergedArray;
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log("Original Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);