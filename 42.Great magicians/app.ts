function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
      greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
  }
  
  let magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  let greatMagicians: string[] = make_great(magicianNames);
  

  function show_magicians(magicians: string[]): void {
    console.log('Magicians:');
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  show_magicians(greatMagicians);
  