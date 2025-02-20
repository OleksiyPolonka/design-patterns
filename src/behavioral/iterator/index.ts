class CustomIterator {
  index = 0;
  data: Array<any>;

  constructor(data: Array<any>) {
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        }
        this.index = 0;

        return {
          value: void 0,
          done: true,
        };
      },
    };
  }
}

export default CustomIterator;
