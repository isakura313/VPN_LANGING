let fizz = [];
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    fizz.push("Fizz");
  } else if (i % 5 == 0) {
    fizz.push("Buzz");
  } else if (i % 15 == 0) {
    fizz.push("FizzBuzz");
  } else {
    fizz.push(i);
  }
}
console.log(fizz);
// Сделать таблицу умножения
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    // некие полезные операции
    //  можно готовую строку запихнуть в массив
    // попробовать матрицу
    console.log(i * j);
  }
}
