const magicians = ["magician1", "magician2", "magician3"];

const show_magicians = (magicians) => {
  magicians.map((magician, i) => {
    magicians[i] = magician + " The Great ";
  });

  return magicians;
};

const data = show_magicians(magicians);
console.log("Magicians", data);
