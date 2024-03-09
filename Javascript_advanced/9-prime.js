function countPrimeNumbers() {
    let count = 1;
    let flag = 0;
    for (let i = 3; i <= 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
            else
                flag = 1;
        }
        if (flag == 1)
            count++;
    }
    console.log(count);
    return count;
}
const startTime = performance.now();
countPrimeNumbers();
const endTime = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds`);