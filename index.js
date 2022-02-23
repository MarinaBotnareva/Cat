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
    } 
  }

  climb () {
    console.log('Лезет');
  }

}

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

class WildCat extends Cat {
  constructor(herbivore, sleeping, fur, furColor, tailLength, numberOfPaws, abilityToSwim){
    super(false, false, true, furColor, tailLength, numberOfPaws, true);
  }
  
  speak(){
    console.log('Грозно мяукает');
  }
  
}

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