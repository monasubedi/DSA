class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow, cannot perform dequeue."
        }
        return this.items.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return "Underflow."
        }
        return this.items[0];
    }


    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }


}


//1. Circular Queue Implementation
//Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO principle, and the last position is connected back to the first position to make a circle.

var MyCircularQueue = function (k) {
    this.queue = [];
    this.size = k;
}

MyCircularQueue.prototype.enQueue = function (value) {
    if (this.queue.length === this.size) return false;
    this.queue.push(value);
    return true;
}
MyCircularQueue.prototype.deQueue = function () {
    if (this.queue.length > 0) {
        this.queue.shift();
        return true;
    }
    return false;

}

MyCircularQueue.prototype.Front = function () {
    if (this.queue.length > 0) {
        return this.queue[0];
    }
    return false;
}

MyCircularQueue.prototype.Rear = function () {
    if (this.queue.length > 0) {
        return this.queue[this.queue.length - 1];
    }
    return false;
}

MyCircularQueue.prototype.isEmpty = function () {

    return this.queue.length === 0;
}

MyCircularQueue.prototype.isFull = function () {
    return this.queue.length === this.size;
}

//2. Implement Stack using Queues
//Implement a LIFO stack using only two queues.
//The implemented stack should support all the functions of a stack(push,top,pop and empty)

var MyStack = function () {
    this.q1 = [];
    this.q2 = [];

}

MyStack.prototype.push = function (x) {
    this.stack.push(x);
}