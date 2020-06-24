function sayHello(name) {
    console.log(`Hello, ${name}`);
}

function callSayHelloWithLars(callback) {
    const innerName = 'Lars';
    callback(innerName);
}

// callSayHelloWithLars(sayHello);
console.log(sayHello("dave"))