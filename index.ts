namespace test.task {
  export class Lock {
    keys: Key[];
    constructor() {
      this.keys = [];
    }
    createKey() {
      var key = new Key((Math.random() + 1).toString(36).substring(7));
      this.keys.push(key);
      return key;
    }
    check(key: Key) {
      return this.keys.some((local_key) => local_key.id === key.id);
    }
    expire(key: Key) {
      this.keys.splice(this.keys.indexOf(key), 1);
    }
  }
  class Key {
    id: string;
    constructor(id: string) {
      this.id = id;
    }
  }
}

var lock1 = new test.task.Lock();
var key1 = lock1.createKey();
console.log(lock1.check(key1)); // true
lock1.expire(key1);
console.log(lock1.check(key1)); // false

var lock2 = new test.task.Lock();
var key2 = lock2.createKey();
console.log(lock1.check(key2)); // false