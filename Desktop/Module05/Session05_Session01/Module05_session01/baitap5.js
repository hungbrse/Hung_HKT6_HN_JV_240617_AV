// Hàm sử dụng toán tử rest để nhận số lượng đối số không xác định
function printArguments(...args) {
    // Duyệt qua mảng args và in ra từng đối số
    console.log("Các đối số được truyền vào:");
    args.forEach((arg, index) => {
        console.log(`Đối số ${index + 1}: ${arg}`);
    });
}

// Gọi hàm với nhiều đối số
printArguments("JavaScript", 42, true, [1, 2, 3], { name: "Alice" });

// Gọi hàm với một đối số
printArguments("Chào mừng bạn!");

// Gọi hàm mà không truyền đối số nào
printArguments();
