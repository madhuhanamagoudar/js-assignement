console.time();//	Starts a timer (can track how long an operation takes)
console.log("Hello There!!!");//prints a message to the console
console.warn("Hey there is a warning!!!");//Outputs a warning message to the console
console.error("Hey there is a error!!!really??");//prints a error message in the console
console.info("It's a informational message");//Outputs an informational message to the console
var a={name:"John",age:"21",Country:"UK"};
var b={name:"Peter",age:"24",Country:"US"};
var c={name:"Robin",age:"22",Country:"India"};

var car1 = { name : "Audi", model : "A4" }
var car2 = { name : "Volvo", model : "XC90" }
var car3 = { name : "Ford", model : "Fusion" }

console.table([car1, car2, car3]);
//console.log(a); //prints only one variable
//console.log=({a,b,c}); //prints all at once it's a good coding practice
console.table([a,b,c]); //prits in form of table don't know why it's not printing the code is correct
console.trace();//	Outputs a stack trace to the console
console.timeEnd();//Stops a timer that was previously started by console.time()
//console.clear(); //clears the console