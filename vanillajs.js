function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log("hi prototype");
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                      
Rabbit.prototype.sayHi();             
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();              