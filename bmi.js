class BMI{
    constructor(height,weight){

        this.height = height;
        this.weight = weight;

    }

    //calculate bmi method
    calc_BMI(){

        //bmi formula
        let bmi = this.weight/(this.height**2);
        //return bmi value
        return bmi;

    }
}

//this passes in values and then outputs those values using console.log
let myBMI = new BMI(1.69,64);
let bmiValue = myBMI.calc_BMI();
console.log("BMI value :"+bmiValue);