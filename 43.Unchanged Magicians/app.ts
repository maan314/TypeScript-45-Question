function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
      greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
  }

  function show_magicians(magicians: string[]): void {
    console.log('Magicians:');
    for (let magician of magicians) {
      console.log(magician);
    }
  }

  let magicianNames: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  let greatMagicians: string[] = make_great([...magicianNames]);
  
  show_magicians(magicianNames);
  show_magicians(greatMagicians);
  