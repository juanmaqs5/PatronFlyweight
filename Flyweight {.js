class Flyweight {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(key) {
    if (!this.flyweights[key]) {
      this.flyweights[key] = new Flyweight(key);
    }
    return this.flyweights[key];
  }
}

const factory = new FlyweightFactory();

function main() {
  const flyweight1 = factory.getFlyweight('key1');
  const flyweight2 = factory.getFlyweight('key1');

  console.log(flyweight1 === flyweight2); // Output: true (Same instance)

  const flyweight3 = factory.getFlyweight('key2');
  console.log(flyweight1 === flyweight3); // Output: false (Different instance)
}

main();