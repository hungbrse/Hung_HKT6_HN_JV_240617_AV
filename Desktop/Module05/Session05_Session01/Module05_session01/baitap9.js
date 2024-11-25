

function combineArrays(...arrays) {
    let result = [];

    for (let i = 0; i < arrays[0].length; i++) {
        let combinedElement = arrays.map(arr => arr[i]);  
        result.push(combinedElement);  
    }

    return result;
}


let result = combineArrays(
    [1, 2, 3],
    ['a', 'b', 'c']
);


console.log(result);
