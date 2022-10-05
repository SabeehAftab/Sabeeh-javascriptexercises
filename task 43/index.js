const magicians = ["Harry", "James", "Potter"];

const show_magicians = (magicians) => {
  magicians.forEach((magician) => {
    console.log("Great Magicians:", magician,"The Great");
    
  });
};

const make_great = (magicians) => {
  let arr = [];
  magicians.map((magician, i) => {
    
    console.log("Original Magicians:", magician);
  });
  return arr;
};

const changedMagi = make_great(magicians);

show_magicians(magicians);
show_magicians(changedMagi);
