
function mergeObjects(...objects) {
    // Hợp nhất tất cả các đối tượng trong mảng objects thành một đối tượng duy nhất
    return Object.assign({}, ...objects);
}

// Ví dụ sử dụng:
const product1 = { name: "Laptop", price: 1000, category: "Electronics" };
const product2 = { price: 900, stock: 50 };
const product3 = { name: "Laptop Pro", stock: 30, discount: 10 };

// Hợp nhất các đối tượng
let mergedProduct = mergeObjects(product1, product2, product3);

console.log(mergedProduct);
