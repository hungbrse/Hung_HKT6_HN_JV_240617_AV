
function mergeSortedArrays(array1, array2) {
    let result = [];
    let i = 0, j = 0;

    // Duyệt qua cả hai mảng một lần duy nhất
    while (i < array1.length || j < array2.length) {
        if (i < array1.length && (j >= array2.length || array1[i] < array2[j])) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }

    return result;
}

// Ví dụ sử dụng hàm
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
let mergedArray = mergeSortedArrays(array1, array2);
console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
