import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 class Stack {
  constructor(store) {
    this.store = store;
  }
  addLink(el) {// это стек => добавляем в конец
    if (isNaN(this.store)) {
      this.store = [];
      this.store.push(el);
      return new Stack(this.store);
    } else {
      this.store.push(el);
      return new Stack(this.store);
    }
  }
  removeLink(position) {
    try{
        if (isNaN(this.store[position]) || typeof position !== "number" || !Number.isInteger(position)) {
        throw new Error("You can't remove incorrect link!");
      } else {
        this.store.splice(position, 1);
        return new Stack(this.store);
      }
    } catch (e){
      return e.message;
    }
  }
  getLength() {
    return this.store.length;
  }
  reverseChain() {
    return new Stack(this.store.reverse());
  }
  finishChain() {
    if (this.store.length===0) {
      let result = `( )`;
      return result;
    } else {
      let result = this.store.join("~~");
      this.store = undefined;
      return result;
    }
  }
}

let chainMaker = new Stack();

export default chainMaker;
