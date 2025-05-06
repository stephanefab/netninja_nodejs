const name = "Tester";
console.log(name);

const greet = (name) => {
    console.log(`Hello, ${name}!`);
}

greet("Mario");
console.log(global);

// global
setTimeout(() => {
    console.log("Hello, World!");
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("Hello, World each interval!");
}, 1000);

console.log(__dirname);
console.log(__filename);

