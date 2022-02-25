class Animal {
  constructor (herbivore, sleeping) {
    this.herbivore = herbivore;
    this.sleeping = sleeping; 
  }

  sleep () {
    this.sleeping = true;
    console.log('Спит');
  }

  eat () {
    console.log('Eст');
  }
}

const animal = new Animal(false, false)

class Cat extends Animal {
  constructor(fur, furColor, tailLength, numberOfPaws, abilityToSwim){
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

const cat = new Cat(true, 'red', 10, 4, true)

class HomeCat extends Cat {
  constructor (fur, furColor, tailLength, numberOfPaws, abilityToSwim, diet = [], name){
    super(fur, furColor, tailLength, numberOfPaws, abilityToSwim);
    this.diet = diet;
    this.name = name;
  }

  speak(){
    console.log(`${this.name} ласково мяукает`);
  }
}

const homeCat = new HomeCat(false, false, 20, 4, false, ['meet', 'milk'], 'Sem')

class WildCat extends Cat {
  constructor(fur, furColor, tailLength, numberOfPaws, abilityToSwim){
    super(true, furColor, tailLength, numberOfPaws, true);
  }
  
  speak(){
    console.log('Грозно мяукает');
  }
  
}

const wildCat = new WildCat(true, 'black', 13, 4, true)

class CircusCat extends HomeCat {
  constructor (fur, furColor, tailLength, numberOfPaws, abilityToSwim, diet = [], name, trainerName){
    super(fur, furColor, tailLength, numberOfPaws, abilityToSwim, diet, name)
    this.trainerName = trainerName; 
  }
  
  salto () {
    console.log (`${this.name} делает сальто`);
  }
}

const circusCat = new CircusCat(true, 'white', 15, 4, true, ['meet', 'milk'], 'Bob', 'John')
