import './style.css';

class List {
  constructor() {
    this.next = null;
  }

  append(node, position = this) {
    if (position.next === null) {
      position.next = { value: node.value, next: null };
    } else {
      this.append(node, position.next);
    }
  }

  prepend(node) {
    const object = { ...this };
    this.next = object;
    this.next.value = node.value;
  }

  size(num = 0, position = this) {
    if (position.next === null) {
      return num;
    }
    return this.size(num + 1, position.next);
  }

  head() {
    return this.next;
  }

  tail(position = this) {
    if (position.next === null) {
      return position;
    }
    return this.tail(position.next);
  }

  at(index, position = this) {
    if (index === 0) {
      return position;
    }
    return this.at(index - 1, position.next);
  }

  pop(position = this) {
    if (position.next.next === null) {
      const lastNode = { ...position.next };
      position.next = null;
      return lastNode;
    }
    return this.pop(position.next);
  }

  contains(value, position = this) {
    if (value === position.value) {
      return true;
    }
    if (position.next === null) {
      return false;
    }
    return this.contains(value, position.next);
  }

  find(value, position = this, count = 0) {
    if (value === position.value) {
      return count;
    }
    if (position.next === null) {
      return false;
    }
    return this.find(value, position.next, count + 1);
  }

  toString(position = this, string = '') {
    if (position.value) {
      string = string.concat(`( ${position.value} )`);
      if (position.next !== null) {
        string = string.concat(` -> `);
      }
    }
    if (position.next === null) {
      return string;
    }
    return this.toString(position.next, string);
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.link = nextNode;
  }
}

// const node = new Node(4);
// const node2 = new Node(5);
// const node3 = new Node(6);
// const node4 = new Node(7);
// const list = new List();
// list.append(node);
// list.append(node2);
// list.append(node3);
// list.prepend(node4);
// console.log(list.toString());
