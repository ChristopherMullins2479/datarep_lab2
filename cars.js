class Vecicle{

    //vecicle constructor
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //method to print out info
    vecicleInfo(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

}

//gives values to vecicle class
let myVecicle = new Vecicle("Totota","Yaris",2007);
let info = myVecicle.vecicleInfo();

//new class car extends vecicle
class Car extends Vecicle{
    constructor(make,model,year,doors){

        super(make,model,year);
        this.doors = doors;

    }

    //method for car info
    carInfo(){
        super.vecicleInfo();
        console.log(`Doors: ${this.doors}`);
    }

}

//sets values into car class
let myCar = new Car("VW","Polo",2002,3);
myCar.carInfo();