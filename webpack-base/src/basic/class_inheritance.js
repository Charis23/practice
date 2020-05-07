class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('hello');
    }
}

class American extends Person {
    constructor(name, age) {
        // 在构造器中必须先调用super()函数
        // 子类中的super指向父类的构造器constructor
        super(name, age);
    }
}

const american = new American('Tom', 23);
console.log(american);

console.log('********************************');

class Chinese extends Person {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;  // this is not allowed before super()
    }
}

const chinese = new Chinese('Zhang San', 12, '12345XXXXXXXX');
console.log(chinese);
