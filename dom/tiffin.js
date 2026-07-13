const obj = {
  listeners: [],
  addEventListener(cb) {
    this.listeners.push(cb);
  },
  browserMaiClick: function () {
    for (const fn of this.listeners) {
      fn();
    }
  },
};

obj.addEventListener(function () {});
