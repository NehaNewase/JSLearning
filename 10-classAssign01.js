class Vehicle{

    constructor(vehicleNo, vehicleType, company, fuelType, color){
        this.vehicleNo = vehicleNo;
        this.vehicleType = vehicleType;
        this.company = company;
        this.fuelType = fuelType;
        this.color = color;
        
    }

    show(){
        console.log(`Vehicle Details is Vehicle No: ${this.vehicleNo} , Vehicle Type: ${this.vehicleType}
  
        company: ${this.company}, fuelType: ${this.fuelType}, Color : ${this.color}`);
    }

}

let vehicle1 = new Vehicle(2737, "SUV", "Tata Nexon", "petrol", "white");

let vehicle2 = new Vehicle(2321, "Hatchback", "Tata indica", "petrol", "red");

let vehicle3 = new Vehicle(7829, "sedan", "vento", "diesel", "black");

let vehicle4 = new Vehicle(0292, "crossover", "Suzuki scross", "petrol", "grey");


const array = [vehicle1, vehicle2, vehicle3, vehicle4];

console.log(`Traversing array`);

for (const Vehicle of array) {
    Vehicle.show();
}