//complete this code
class Animal {
	constructor(species){
		this.species  = species
	}
	 get species() {
    return this.species;
  }

  makeSound(species) {
    console.log(`The ${species} makes a sound`)
  }
}

class Dog extends Animal {
	constructor(){
		super(species)
	}
	
	bark(){
		
		Animal.makeSound(this.species)
		console.log("woof")
	}
}

class Cat extends Animal {
	constructor(){
		super(species)
	}
	purr(){
		Animal.makeSound(this.species)
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
