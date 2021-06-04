function fibonacci(number: number): any {
    if (number < 1) {
        return 0;
    } else if (number <= 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
let sum=0;
let n=20;
for (let i=0;i<=n;i++){
    sum+=fibonacci(i);
}
console.log(sum);


