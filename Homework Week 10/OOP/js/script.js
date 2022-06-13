function Highway(vehicles) {
    this.vehicles = vehicles
}

Highway.prototype.drive = function() {
    console.log("Vehicle is driving on highway!")
}

function Vehicle(name, color, engine, fuel, wheels) {
    this.name = name;
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.wheels = wheels;
}

Vehicle.prototype = {
    constructor: Vehicle,
    drive() {
        console.log("driving");
    },
    park() {
        console.log("parking");
    },
}

function Car(name, color, engine, fuel) {
    Vehicle.call(this, name, color, engine, fuel, Car.WHEELS);
}
Car.WHEELS = 4;
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(name, color, engine, fuel) {
    Vehicle.call(this, name, color, engine, fuel, Motorcycle.WHEELS);
}
Motorcycle.WHEELS = 2;
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;
