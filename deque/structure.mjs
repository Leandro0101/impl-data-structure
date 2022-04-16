export class Deque {
  #count = 0;
  #lowestCount = 0;
  #highestCount = 0;
  #items = {};

  isEmpty() {
    return this.#count === 0;
  }
  clear() {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
    this.#highestCount = 0;
  }
  toString() {
    if (this.isEmpty()) return "";
    let objString = `${this.#items[this.#lowestCount]}`;
    for (let i = this.#lowestCount + 1; i < this.#highestCount + 1; i++) {
      objString = `${objString},${this.#items[i]}`;
    }
    return objString;
  }
  size() {
    return this.#count;
  }
  addBack(element) {
    this.#items[this.#count] = element;
    this.#highestCount = this.#count === 0 ? 0 : this.#highestCount + 1;
    this.#count++;
  }
  addFront(element) {
    if (this.isEmpty()) this.addBack(element);
    else if (this.#lowestCount > 0) {
      this.#lowestCount--;
      this.#items[this.#lowestCount] = element;
    } else {
      this.#lowestCount--;
      this.#items[this.#lowestCount] = element;
      this.#count++;
    }
  }
  removeBack() {
    const result = this.#items[this.#highestCount];
    delete this.#items[this.#highestCount];
    this.#highestCount--;
    this.#count--;
    return result;
  }
  removeFront() {
    const result = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    this.#count--;
    return result;
  }
}

const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack("John");
console.log(deque.toString());
deque.addBack("Jack");
console.log(deque.toString());
deque.addBack("Camila");
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
console.log(deque.removeFront());
console.log(deque.toString());
console.log(deque.removeBack());
console.log(deque.toString());
deque.addFront("John");
console.log(deque.toString());
