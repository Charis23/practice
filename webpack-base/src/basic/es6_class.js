// 每个class都有一个default的构造器
// 当 new 一个类时， 会优先执行构造器里面的code
class Animal {

    info = 'this is the information for Animal';  //info也是【实例属性】

    constructor(name, age) {
        // 构造器里面的属性也是实例属性
        this.name = name;
        this.age = age;
    }

    // 在class中通过static修饰的属性是【静态属性】
    static type = 'Animal';

    static say() {
        return 'Animal wants to say hi';
    }

    // 【实例方法】: 直接在class中定义， 本质还是在Class的原型对象prototype上
    greet() {
        return 'Woo...';
    }

}

console.log('静态属性：', Animal.type);
console.log('静态方法：', Animal.say());

const animal = new Animal('Jerry', 2);
console.log(animal);
console.log('实例方法：', animal.greet());


