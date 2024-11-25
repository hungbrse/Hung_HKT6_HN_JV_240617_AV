
function sum(...args) {
    let result = [];
     

    args.forEach(arr =>{
        let sum = arr.reduce((acc,index) => acc + index, 0);
        result.push(sum);
    });
    return result;
};

let result = sum(
    [1, 2, 3],
    [6, 7, 8],
    [9,10,11]
);


console.log(result)