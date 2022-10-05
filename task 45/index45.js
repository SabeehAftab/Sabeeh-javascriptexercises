class Car {
    constructor(creator, model, ...optData) {
      this.creator = creator;
      this.model = model;
      this.optData = optData;
    }
  
    printData() {
      console.log("Creator", this.creator);
  
      console.log("Model", this.model);
  
      for (var i = 0; i < this.optData.length; i++) {
        console.log(this.optData[i]);
      }
      console.log("\n");
    }
  }
  
  var car = new Car(
    (creator = "sonata"),
    (model = "2018"),
    (color = "Red"),
    (reg = "Karachi")
  );
  car.printData();
  
  var car = new Car(
    (creator = "Toyota"),
    (model = "2008"),
    (color = "white"),
    (reg = "Lahore"),
    (body = "green")
  );
  car.printData();