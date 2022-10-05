const ordinal = (number) => {
    const ordinalRules = new Intl.PluralRules("en", {
      type: "ordinal"
    });
    const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
    };
    const suffix = suffixes[ordinalRules.select(number)];
    return (number + suffix);
  }
  console.log(ordinal(1));
  console.log(ordinal(2));
  console.log(ordinal(3));
  console.log(ordinal(4));
  console.log(ordinal(5));
  console.log(ordinal(6));
  console.log(ordinal(7));
  console.log(ordinal(8));
  console.log(ordinal(9));
