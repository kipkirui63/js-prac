function person(name, age) {
    this.name = name;
    this.age = age;
}

var John = new person("John", 25);
var James = new person("James", 21);

console.log(John.age, James.age);
