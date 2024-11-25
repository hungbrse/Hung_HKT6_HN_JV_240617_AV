

function array(arr1,arr2,index) {
    if(index < 0 || index > arr1.length) {
        console.log("index không hợp lệ");
        return;
    }

    arr1.splice(index,0,...arr2);

    console.log(arr1);
}


array([1,2,3],[4,5,6],3);