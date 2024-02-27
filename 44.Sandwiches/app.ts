function make_sandwich(...ingredients: string[]): void {
    console.log('Sandwich Order:');
    for (let i=0; i<ingredients.length; i++){
      console.log(`-${ingredients[i]}`)
    }
  }
       console.log(`\nEnjoy your Sandwich`);
  
  make_sandwich("Ham", "Cheese", "Tomato");
  make_sandwich("Turkey", "Swiss", "Mayo");
  make_sandwich("Peanut Butter", "Jelly");

  

  