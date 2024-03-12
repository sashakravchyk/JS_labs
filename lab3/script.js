// 1.2.3
var car1 = new Object();

car1.color = "Red";
car1.maxSpeed = 250; 
car1.driver = { 
    name: "Oleksandra Kravchyk", 
    category: "C", 
    personalLimitations: "No driving at night" 
};
car1.tuning = true; 
car1.numberOfAccidents = 0; 

// 1.2.5

car1.drive = function() {
    console.log("I am not driving at night");
};

//1.2.3
console.log("1.2.3");
console.log("car1:", car1);
//1.2.5
console.log("1.2.5");
car1.drive();
console.log("----------------------------------");

// 1.2.4
var car2 = {
    color: "Blue", 
    maxSpeed: 180, 
    driver: { 
        name: "Oleksandra Kravchyk", 
        category: "B", 
        personalLimitations: null 
    },
    tuning: false, 
    numberOfAccidents: 2, 

    // 1.2.6
    drive: function() {
        console.log("I can drive anytime");
    }
};

//1.2.4
console.log("1.2.4");
console.log("car2:", car2);

//1.2.6
console.log("1.2.6");
car2.drive();
console.log("----------------------------------");


// 1.2.7

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

//1.2.8

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};


// 1.2.9
Truck.prototype.trip = function() {
    // Перевірка наявності властивості driver
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        
        var message = "Driver " + this.driver.name + " ";
        if (this.driver.nightDriving) {
            message += "drives at night ";
        } else {
            message += "does not drive at night ";
        }
        message += "and has " + this.driver.experience + " years of experience";
        
        console.log(message);
    }
};

//1.2.7
console.log("1.2.7");
var myTruck = new Truck("Black", 5000, 60, "Mercedes-Benz", "Sprinter");
//1.2.8
console.log("1.2.8");
myTruck.AssignDriver("Oleksandra Kravchyk", false, 2);
console.log(myTruck);

//1.2.9
console.log("1.2.9");
myTruck.trip();
var truckWithoutDriver = new Truck("Blue", 6000, 70, "Chevrolet", "Silverado");
truckWithoutDriver.trip(); 
console.log("----------------------------------");

//1.2.10
console.log("1.2.10");
var truck1 = new Truck("Red", 5000, 90, "Ford", "F-150");
truck1.AssignDriver("Oleksandra Kravchyk", true, 5);

console.log("Trip for truck1:");
truck1.trip();

var truck2 = new Truck("Grey", 3000, 70, "Mercedes-Benz", "Sprinter");
truck2.AssignDriver("Oleksandra Kravchyk", false, 3);

console.log("Trip for truck2:");
truck2.trip();
console.log("----------------------------------");

//1.2.12
class Square {
    //1.2.13
    constructor(a) {
        this.a = a;
    }

    length() {
        console.log("Sum of sides: ", 4 * this.a);
    }

    square() {
        console.log("Area of the square: " + this.a * this.a);
    }

    info() {
        console.log("Side lengths: " + this.a + ", " + this.a + ", " + this.a + ", " + this.a);
        console.log("Sum of all sides: " + 4 * this.a);
        console.log("Angles: 90°, 90°, 90°, 90°");
        console.log("Area of the square: " + this.a * this.a);
    }

    //1.2.14
    static help() {
        console.log("A square is a regular quadrilateral with four equal sides and four right angles.");
    }
}

//1.2.12
// console.log("1.2.12");
// const square = new Square(5); 
// console.log("Area:", square.getArea()); 
// console.log("Perimeter:", square.getPerimeter()); 

//1.2.14
console.log("1.2.14");
Square.help();
console.log("----------------------------------");

console.log("1.2.15");

const square = new Square(5); 


square.length(); 
square.square(); 
console.log("----------------------------------");
square.info();
console.log("----------------------------------");

//1.2.16
console.log("1.2.16");

class Rectangle extends Square {
    constructor(a, b) {
        super(a); 
        this.b = b;
    }

    //1.2.22
    get a() {
        return this._a;
    }

    set a(value) {
        if (typeof value === 'number' && value > 0) {
            this._a = value;
        } else {
            console.error("Invalid value for side 'a'");
        }
    }

    get b() {
        return this._b;
    }

    set b(value) {
        if (typeof value === 'number' && value > 0) {
            this._b = value;
        } else {
            console.error("Invalid value for side 'b'");
        }
    }

    //1.2.17
static help() {
    console.log("A rectangle is a four-sided figure with opposite sides equal and four right angles.");
}

length() {
    console.log("Sum of sides:", 2 * (this.a + this.b));
}

square() {
    console.log("Area of the rectangle:", this.a * this.b);
}

info() {
    console.log("Side lengths:", this.a + ", " + this.a + ", " + this.b + ", " + this.b);
    console.log("Sum of all sides:", 2 * (this.a + this.b));
    console.log("Angles: 90°, 90°, 90°, 90°");
    console.log("Area of the rectangle:", this.a * this.b);
}

}

const rectangle = new Rectangle(10, 5); 
console.log(rectangle); 
console.log("----------------------------------");
console.log("1.2.17");
rectangle.length(); 
rectangle.square(); 
console.log("----------------------------------");
rectangle.info(); 
console.log("----------------------------------");


//1.2.18
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A rhombus is a quadrilateral with all four sides of equal length.");
    }

    length() {
        console.log("Sum of all sides: " + 4 * this.a);
    }

    square() {
        console.log("Area of the rhombus: " + 0.5 * this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }

    info() {
        console.log("Side length: " + this.a);
        console.log("Sum of all sides: " + 4 * this.a);
        console.log("Angles: " + this.alpha + "°, " + this.beta + "°, " + this.alpha + "°, " + this.beta + "°");
        console.log("Area of the rhombus: " + 0.5 * this.a * this.a * Math.sin(this.alpha * Math.PI / 180));
    }
}


console.log("1.2.19");
const rhombus = new Rhombus(5, 120, 60);
Rhombus.help(); 
rhombus.length();
rhombus.square(); 
console.log("----------------------------------");
rhombus.info(); 
console.log("----------------------------------");

//1.2.20

class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        this.b = b;
    }


    //1.2.21
    static help() {
        console.log("A parallelogram is a quadrilateral with opposite sides parallel.");
    }

    length() {
        console.log("Side lengths: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
        console.log("Angles: " + this.alpha + "°, " + (180 - this.alpha) + "°, " + this.beta + "°, " + (180 - this.beta) + "°");
        console.log("Sum of all sides: " + (2 * this.a + 2 * this.b));
    }

    square() {
        console.log("Area of the parallelogram: " + (this.a * Math.sin(this.beta * (Math.PI / 180)) * this.b));
    }

    info() {
        console.log("Side lengths: " + this.a + ", " + this.b + ", " + this.a + ", " + this.b);
        console.log("Angles: " + this.alpha + "°, " + (180 - this.alpha) + "°, " + this.beta + "°, " + (180 - this.beta) + "°");
        console.log("Sum of all sides: " + (2 * this.a + 2 * this.b));
        console.log("Area of the parallelogram: " + (this.a * Math.sin(this.beta * (Math.PI / 180)) * this.b));
    }
}

console.log("1.2.21");
const parallelogram = new Parallelogram(6, 4, 120, 60); 
Parallelogram.help(); 
parallelogram.length(); 
parallelogram.square(); 
console.log("----------------------------------");
parallelogram.info(); 
console.log("----------------------------------");

console.log("1.2.23");
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();
console.log("----------------------------------");


//1.2.24

console.log("1.2.24");
const square1 = new Square(8);
console.log("Square:");
square.info();
console.log("----------------------------------");

const rectangle1 = new Rectangle(5, 8);
console.log("Rectangle:");
rectangle.info();
console.log("----------------------------------");

const rhombus1 = new Rhombus(6, 50, 130);
console.log("Rhombus:");
rhombus.info();
console.log("----------------------------------");

const parallelogram1 = new Parallelogram(5, 7, 70, 110);
console.log("Parallelogram:");
parallelogram.info();
console.log("----------------------------------");

//1.2.25

console.log("1.2.25-1.2.26");
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

//1.2.26
const defaultTriangle = Triangular();
console.log(defaultTriangle);


const Triangle = Triangular(6, 8, 10);
console.log(Triangle);

const { a, b, c } = Triangular(7, 24, 25);

console.log(`a: ${a}, b: ${b}, c: ${c}`);
console.log("----------------------------------");


//1.2.27-1.2.28
function PiMultiplier(number) {
    return function() {
        return Math.PI * number;
    };
}


console.log("1.2.27-1.2.28");

const multiplyBy2Pi = PiMultiplier(2);
const multiplyBy2DividedBy3Pi = PiMultiplier(2/3); 
const dividePiBy2 = PiMultiplier(1/2); 

console.log("Multiplied by 2:", multiplyBy2Pi()); 
console.log("Multiplied by 2/3:",multiplyBy2DividedBy3Pi()); 
console.log("Multiplied by 1/2:",dividePiBy2()); 
console.log("----------------------------------");

//1.2.29
function Painter(color) {
    return function(object) {
        const type = object.type ? object.type : "No 'type' property occurred!";
        console.log(`Color: ${color}, Type: ${type}`);
    };
}

const paintRed = Painter('Black');
const paintBlue = Painter('Green');

const object1 = { type: 'Rectangle' };
const object2 = { shape: 'Circle' };

console.log("1.2.29");
paintRed(object1); 
paintBlue(object2); 
console.log("----------------------------------");

//1.2.30
const PaintBlue = Painter('Blue');
const PaintRed = Painter('Red');
const PaintYellow = Painter('Yellow');

const object3 = { type: 'Rectangle' };
const object4 = { shape: 'Circle' };
const object5 = { type: 'Triangle' };

console.log("1.2.30");
PaintBlue(object3); 
PaintRed(object4); 
PaintYellow(object5); 
console.log("----------------------------------");

// 1.2.31

const object6 = {
    maxSpeed: 280,
    type: 'Sportcar',
    color: 'magenta'
};

const object7 = {
    type: 'Truck',
    avgSpeed: 90,
    loadCapacity: 2400
};

const object8 = {
    maxSpeed: 180,
    color: 'purple',
    isCar: true
};

const PaintBlue31 = Painter('Blue');
const PaintRed31 = Painter('Red');
const PaintYellow31 = Painter('Yellow');

console.log("1.2.31");
PaintBlue(object6);
PaintRed(object7); 
PaintYellow(object8); 
console.log("----------------------------------");
