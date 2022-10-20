/* !!This is an example code*/

function Stack() {
    this.items = [];
}

Stack.prototype.addElement = function (element) {
    this.items.push(element);
};

Stack.prototype.removeElement = function () {
    return this.items.pop();
};

Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
};

Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
};

Stack.prototype.size = function () {
    return this.items.length;
};

Stack.prototype.clear = function () {
    return (this.items = []);
};

Stack.prototype.toString = function () {
    return this.items.toString();
};

const stack = new Stack();

console.log(stack.isEmpty());

stack.addElement(1);
stack.addElement(2);

console.log(stack.peek());

stack.addElement(3);

console.log(stack.size());

console.log(stack.isEmpty());

stack.removeElement();
stack.removeElement();

console.log(stack.size());

console.log(stack.toString());
