//variable acts as a global but let can be accessed only in certain scope
var a=5;
var b=9;
var name="Krishna"
c=a+b;
console.log("The addition is:"+c);
{
    let a=11;
    let x=4;
    let name="Riya"
    console.log(name);//it prints the name inside the scope
    console.log("Inside let:"+a); //prints inside a of let
    let city; //we can leave let unassigned 
}
console.log(name); //prints variable name
console.log(a); //prints outside value of a
const H=10;
H=11; //constant cannot be changed
 //But if array is declared then it can be appended.