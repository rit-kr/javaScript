class Stack {
    constructor() {
        this.arr = [];
    }
    push(value){
        this.arr.push(value);
        return this.arr;
    }
    pop() {
        this.arr.pop();
    }
    peek(i = this.arr.length - 1) {
        return this.arr[i];
    }
    reverse() {
        return this.arr.reverse();
    }
    isEmpty() {
        return this.arr.length === 0;
    }
    displayStack() {
        return this.arr.join(" ");
    }
    get length() {
        return this.arr.length;
    }
}
console.group("Stack");
let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true
console.groupEnd();

class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(value){
        this.arr.push(value);
        return this.arr;
    }
    // dequeue() {
    //     this.arr.shift();
    // }
    dequeue() {
        this.arr.splice(0,1);
    }
    peek(i = 0) {
        return this.arr[i];
    }
    reverse() {
        return this.arr.reverse();
    }
    isEmpty() {
        return this.arr.length === 0;
    }
    displayQueue() {
        return this.arr.join(" ");
    }
    get length() {
        return this.arr.length;
    }
}
console.group("Queue")
let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true
console.groupEnd();