


// 

//child-class
function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName = function () {
    //     console.log('im '+this.name);
    // }
    // this.sayAge = function () {
    //     console.log('im '+this.age);
    // }
}

// base-class
Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age);
}

var p1 = new Person('Nag', 32);
var p2 = new Person('Ria', 1);
// ..

var p11 = Object.create(p1);
var p12 = Object.create(p11);
