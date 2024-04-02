const arr = [64, 34, 25, 112, undefined, 13, undefined, 12, 22, 11, 90, undefined, 18, undefined, 1];

console.log("Оригінальний масив: ", arr)

// обмін
console.log("Сортування методом обміну");
console.log("-------------------------");
ExchangeSort.ascending(arr.slice()); // Сортування за зростанням
ExchangeSort.descending(arr.slice()); // Сортування за спаданням
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
// мінімальні елементи
console.log("Сортування методом мінімальних елементів");
console.log("----------------------------------------");
SelectionSort.ascending(arr.slice()); // Сортування за зростанням
SelectionSort.descending(arr.slice()); // Сортування за спаданням
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
// вставка
console.log("Сортування методом вставки");
console.log("--------------------------");
InsertionSort.ascending(arr.slice()); // Сортування за зростанням
InsertionSort.descending(arr.slice()); // Сортування за спаданням
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
// Шелла
console.log("Сортування методом Шелла");
console.log("------------------------");
ShellSort.ascending(arr.slice()); // Сортування за зростанням
ShellSort.descending(arr.slice()); // Сортування за спаданням
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
// Хоара(швидке сортування)
console.log("Сортування методом Хоара(швидке сортування)");
console.log("-------------------------------------------");
 QuickSort.ascending(arr.slice()); // Сортування за зростанням
 QuickSort.descending(arr.slice()); // Сортування за спаданням
 