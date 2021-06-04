function fibonacci(number) {
    if (number < 1) {
        return 0;
    }
    else if (number <= 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
var sum = 0;
for (var i = 0; i <= 20; i++) {
    sum += fibonacci(i);
}
console.log(sum);
