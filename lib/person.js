var Person = function(firstName, lastName, age, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  (typeof age === 'undefined') ? this.age = 30 : this.age = age;
  (typeof height === 'undefined') ? this.height = (Math.floor(Math.random() * 19) + 60) : this.height = height;
  (typeof friends === 'undefined') ? this.friends = 'empty' : this.friends = friends;
};

Person.prototype = {
  display: function(){
    return this.firstName + " " + this.lastName + " is " + this.age + " and is " + this.height + " inches tall and his/her friends are " + this.friends;
  }
};

var katy = new Person("Katy", "Feng", 22, 63, []),
charlie = new Person("Charlie", "Talbot", 44, 69, [katy.firstName]),
 ashlinn = new Person("Ashlinn", "Brennan", 24, 67, [charlie.firstName, katy.firstName]),
 patrice = new Person("Patrice", "Pat", 78, 70, [katy.firstName]),
 chris = new Person("Chris", "Soules", 33, 73, []),
 chrish = new Person("Chris", "Harrison", 43, 70, [chris.firstName]),
 whitney = new Person("Whitney", "Bischoff", 29, 67, [chris.firstName, chrish.firstName]),
 kaitlyn = new Person("Kaitlyn", "Bristowe", 29, 64, [chris.firstName, chrish.firstName]),
 becca = new Person("Becca", "Tilley", 25, 65, [chris.firstName, chrish.firstName]),
 jade = new Person("Jade", "Roper", 28, 64, [chris.firstName, chrish.firstName]);

katy.friends = [charlie.firstName, ashlinn.firstName, patrice.firstName];

console.log(katy.display());
console.log(charlie.display());
console.log(ashlinn.display());
console.log(patrice.display());
console.log(chris.display());
console.log(chrish.display());
console.log(whitney.display());
console.log(kaitlyn.display());
console.log(becca.display());
console.log(jade.display());
