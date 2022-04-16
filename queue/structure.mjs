export class Queue {
  #count = 0;
  #lowestCount = 0;
  #items = {};

  enqueue(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }
  isEmpty() {
    return this.#count === 0;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return result;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.#lowestCount];
  }
  size() {
    return this.#count - this.#lowestCount;
  }
  clear() {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) return "";
    let objString = `${this.#items[this.#lowestCount]}`;
    for (let i = this.#lowestCount + 1; i < this.#count; i++) {
      objString = `${objString},${this.#items[i]}`;
    }
    return objString;
  }
}

// const queue = new Queue();
// queue.enqueue("Leandro");
// queue.enqueue("Maria");
// queue.enqueue("Mário");
// queue.dequeue();
// console.log(queue.peek());
// console.log(queue.size());
// console.log(queue.toString())
