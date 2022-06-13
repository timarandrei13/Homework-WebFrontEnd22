function Highway(vehicleTypes) {
    this.vehicles = [];                                          // Compozitie
      for (let vehicleType of vehicleTypes) {
        this.vehicles.push(new Vehicle(vehicleType));
      }
}

Highway.prototype.drive = function () {
    let str = "";
    for (let vehicle of this.vehicles) {
        if (this.vehicles.indexOf(vehicle) === this.vehicles.length - 1) {
            str += vehicle.type;
        } else {
            str += vehicle.type + ",";
        }
    }
    console.log('${str} are driving on Highway!');
};

function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype = {
    drive() {
        console.log('${this.type} is driving!'); 
    },
};

function Car(type, name) {
    Vehicle.call(this, type);
    this.name = name;
}
Car.prototype = Object.create(Vehicle.prototype);                 // Mostenire

Car.prototype.drive = function () {
    console.log('${this.name} is driving on Highway!');
}

const vehicle1 = new Vehicle("Car");                              // Polimorfism
vehicle1.drive();

const vehicle2 = new Vehicle("Motorcycle");
vehicle2.drive();

const highway = new Highway(["Car", "Motorcycle"]);
highway.drive();

const car1 = new Car("Car", "Audi");
car1.drive();