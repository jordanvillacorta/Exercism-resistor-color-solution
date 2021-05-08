// PSEUDO
// iterate over colors array
  // if color is equal to colors at i
    // return i
//

export function colorCode(color) {
    for (let i = 0; i < COLORS.length; i++) {
      if (color === COLORS[i]) {
        return i;
      } 
    }
  };
  
  export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];