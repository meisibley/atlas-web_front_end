console.log("Start of the execution queue");
function timeOut() {
    console.log("Final code block to be executed");
}
setTimeout(timeOut, 0);
for (let i = 0; i < 100; i++) {
    console.log(i + 1);
}
console.log("End of the loop printing");