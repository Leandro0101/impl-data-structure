export class Stack {
  #count = 0;
  #items = {};
  push(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }
  size() {
    return this.#count;
  }
  isEmpty() {
    return this.#count === 0;
  }
  pop() {
    if (this.isEmpty()) return undefined;
    this.#count--;
    const result = this.#items[this.#count];
    delete this.#items[this.#count];
    return result;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.#count - 1];
  }
  clear() {
    this.#items = {};
    this.#count = 0;
  }
  toSring() {
    if (this.isEmpty()) return "";

    let objString = `${this.#items[0]}`;
    for (let i = 1; i < this.#count; i++) {
      objString = `${objString},${this.#items[i]}`;
    }
    return objString;
  }
}

// using the stack
// const stack = new Stack();
// stack.push("Leandro");
// console.log(stack.peek());
// console.log(stack.size())
// stack.push("Maria");
// console.log(stack.toSring())
// console.log(stack.isEmpty())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.isEmpty())
