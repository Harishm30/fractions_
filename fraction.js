
class add {
  add() {
    return this.num1 + this.num2;
  }
}

let add = new add(21, 4);
console.log(add.add()); 


class Divide {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
}

let divide = new Divide(10, 5);
console.log(divide.divide()); 

