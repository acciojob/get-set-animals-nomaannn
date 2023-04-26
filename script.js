//complete this code
class Animal {
	constructor(species){
		this.species  = species
	}
	 get species() {
    return this.species;
  }

  makeSound(sound) {
    console.log(sound);
  }
}

class Dog extends Animal {
	constructor(){
		super(species)
	}
	
	bark(){
		// console.log("woof")
		Animal.makeSound("woof")
	}
}

class Cat extends Animal {
	constructor(){
		super(species)
	}
	purr(){
		Animal.makeSound("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
