var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };  
}

var myCar = new Car(70, "Ninja Man");
var myCar2 = new Car(60, "Shaun");
var myCar3 = new Car(40, "Net Ninja");
var myCar4 = new Car(50, "Mark");
var myCar5 = new Car(90, "John");

myCar.drive(30,5);
myCar3.logDriver();




