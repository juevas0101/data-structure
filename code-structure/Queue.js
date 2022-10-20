/* !!This is an example code*/

function Queue() {
    this.items = [];
}

Queue.prototype.enqueue = function (element) {
    this.items.push(element);
};

Queue.prototype.dequeue = function () {
    return this.items.shift();
};

Queue.prototype.isEmpty = function () {
    return this.size() === 0;
};

Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.size = function () {
    return this.items.length;
};

Queue.prototype.toString = function () {
    return this.items.toString();
};

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");

console.log(queue.toString());

queue.enqueue("Camila");

console.log(queue.toString());

console.log(queue.size());

console.log(queue.toString());
console.log(queue.isEmpty());

queue.dequeue();
queue.dequeue();

console.log(queue.toString());