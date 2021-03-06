var Person = function(firstName, lastName, age, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  (typeof age === 'undefined') ? this.age = 30 : this.age = age;
  (typeof height === 'undefined') ? this.height = (Math.floor(Math.random() * 19) + 60) : this.height = height;
  (typeof weight === 'undefined') ? this.weight = 150 : this.weight = weight;
  (typeof friends === 'undefined') ? this.friends = [] : this.friends = friends;
};

Person.prototype = {
  display: function(){
    return this.firstName + " " + this.lastName + " is " + this.age + " and is " + this.height + " inches tall and his/her friends are " + this.friends;
  },
  fullName: function(){
  return this.firstName + " " + this.lastName;
  },
  weightInStone: function(){
  return Math.floor(this.weight / 14).toString();
  },
  addFriend: function(friend){
  return this.friends.push(friend);
  },
  removeFriend: function(friend){
  return this.friends.pop(friend);
  },
  greetPeople: function(friendsArray){
  var friends;
    (typeof friendsArray === 'undefined') ? friends = this.friends : friends = friendsArray;
    if (friends === []) {
      return "Hi!";
    } else {
      var output = [];
        for (i = 0; i < friends.length; i++) {
           output.push("Hi " + friends[i].fullName() + "!");
        }
    }
    return output.join(' ');
  }
};

var katy = new Person("Katy", "Feng", 22, 63, []),
charlie = new Person("Charlie", "Talbot", 44, 69, [katy.firstName]),
 ashlinn = new Person("Ashlinn", "Brennan", 24, 67, [charlie.firstName, katy.firstName]),
 patrice = new Person("The", "Bachelor", 78, 70, []),
 chris = new Person("Chris", "Soules", 33, 73, []),
 chrish = new Person("Chris", "Harrison", 43, 70, [chris.firstName]),
 whitney = new Person("Whitney", "Bischoff", 29, 67, [chris.firstName, chrish.firstName]),
 kaitlyn = new Person("Kaitlyn", "Bristowe", 29, 64, [chris.firstName, chrish.firstName]),
 becca = new Person("Becca", "Tilley", 25, 65, [chris.firstName, chrish.firstName]),
 jade = new Person("Jade", "Roper", 28, 64, [chris.firstName, chrish.firstName]);

katy.friends = [charlie.firstName, ashlinn.firstName, patrice.firstName];

