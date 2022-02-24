class Animal {
  constructor (herbivore, sleeping) {
    this.herbivore = herbivore;
    this.sleeping = sleeping; 
  }

  sleep () {
    this.sleeping = true;
    console.log('Спит');
  }

  Eat () {
    console.log('Eст');
  }
}

const animal = new Animal(false, false)

class Cat extends Animal {
  constructor(herbivore, sleeping, fur, furColor, tailLength, numberOfPaws, abilityToSwim){
      super(false, false)
    this.fur = fur;
    this.furColor = furColor;
    this.tailLength = tailLength;
    this.numberOfPaws = numberOfPaws;
    this.abilityToSwim = abilityToSwim;
  }
  speak () {
    console.log('Мяукает');
  } 

  swim () {
    if (this.abilityToSwim = true) {
      console.log('Плывет');
    } else {
      console.log('Боится');
    }
  }

  climb () {
    console.log('Лезет');
  }

}

const cat = new Cat(false, false, true, 'red', 10, 4, true)

class HomeCat extends Cat {
  constructor (herbivore, sleeping, fur, furColor, tailLength, numberOfPaws, abilityToSwim, diet = [], name){
    super(false, false, fur, furColor, tailLength, numberOfPaws, abilityToSwim);
    this.diet = diet;
    this.name = name;
  }

  speak(){
    console.log(`${this.name} ласково мяукает`);
  }
}

const homeCat = new HomeCat(false, false, false, false, 20, 4, false, ['meet', 'milk'], 'Sem')

class WildCat extends Cat {
  constructor(herbivore, sleeping, fur, furColor, tailLength, numberOfPaws, abilityToSwim){
    super(false, false, true, furColor, tailLength, numberOfPaws, true);
  }
  
  speak(){
    console.log('Грозно мяукает');
  }
  
}

const wildCat = new WildCat(false, false, true, 'black', 13, 4, true)

class CircusCat extends HomeCat {
  constructor (herbivore, sleeping, fur, furColor, tailLength, numberOfPaws, abilityToSwim, diet = [], name, trainerName){
    super(false, false, fur, furColor, tailLength, numberOfPaws, abilityToSwim, diet, name)
    this.trainerName = trainerName; 
  }
  
  salto () {
    console.log (`${this.name} делает сальто`);
  }
}

const circusCat = new CircusCat(false, false, true, 'white', 15, 4, true, ['meet', 'milk'], 'Bob', 'John')