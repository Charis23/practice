// 构造函数
function Person(name, age) { // name和age都是【实例属性】
    this.name = name;
    this.age = age;
}

Person.type="Human"; // type是【静态属性】：直接通过构造函数访问的属性
console.log("静态属性：", Person.type); 

Person.say = function() {
    return 'Person wants to say hi';
}
console.log("静态方法：", Person.say()); 

// create instance
const person = new Person('Tom', 12);
console.log(person);

// 用prototype来定义【实例方法】
Person.prototype.greet = function() {
    return 'Hi, I am a person';
}

console.log("实例方法：", person.greet());  //定义后才能调用【实例方法】



console.log('****************************');