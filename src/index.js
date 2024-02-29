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

  insertAt(node, index, position = this) {
    if (index === 1) {
      const object = { ...position };
      position.next = object;
      position.next.value = node.value;
      return undefined;
    }
    if (position.next === null) {
      return 'Index to long';
    }
    return this.insertAt(node, index - 1, position.next);
  }

  removeAt(index, position = this) {
    if (index === 1) {
      const node = position.next;
      position.next = null;
      return node;
    }
    if (position.next === null) {
      return 'Index to long';
    }
    return this.removeAt(index - 1, position.next);
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.link = nextNode;
  }
}

// const node = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);
// const list = new List();
// list.append(node);
// list.append(node2);
// list.append(node3);
// list.append(node4);
// list.insertAt(node4, 3);
// console.log(list.removeAt(5))
// console.log(list);
