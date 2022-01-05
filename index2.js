

// Object in JS: 
// It is an non primitive data type
// It contains data in key value pairs
// {}

// Ways to create an object 
// 1.>  By using curly braces

let student = {
    id:12,
    rollNo : [101,1012],
    name : "Rahul",
    contact : 1234567890,
}

console.log("STUDENT DATA", student);
//  access specific or individual value : by accessing the keys

console.log(student.contact);   //One way   // Preferred way
console.log(student["contact"]);   //Second way : Make sure you put the key in string quotes




// this keyword :::::::;

let employee = {
    name : "John",
    salary : 25000,
    designation : "HR",
    displayEmpDetails : function(){     //method
        console.log(this.name + " is earning " + this.salary + " at " + this.designation + " position. ");  //code block
    }
}

employee.displayEmpDetails();

// method  and functions
//functions = regular functions that you create in JS
//method = it is a function which is actually a property of any object.




//  Second way of creating an Object : By using Constructor function

let myObj = new Object();

myObj.city= "Ajmer";    // one way
myObj["state"]= "Rajasthan";    // second way

console.log(myObj);



// How to Retrieve all the keys and values . 
// Object.keys and Object.values both return a list of key and values in an array.


const myObjKeys = Object.keys(employee);
console.log(myObjKeys);


const myObjValues = Object.values(employee);
console.log(myObjValues );


// *******************IMPORTANT*************************
//  spread operator  => it helps you to destructure the element => ...

let newObj = {...student, ...employee};
let newObj2 = {...employee, ...myObj};
console.log("New Object",newObj);


console.log("****************SPREAD OPERATOR IN ARRAY******************");

let arr = [1,2,3,4,4,5];
let arr2 = ["a","e","i","o","u"];

let newArr = [arr];
let newArr2 = [...arr];
let newArr3 = arr;
console.log(newArr, newArr2, newArr3);


let obj = {
    name : ["balu","harshita"],
    display : function(){
        console.log(this.name[0]);
    }
}
obj.display();



// Object.create() function : which allows you to create an object by taking 
// reference of ANY EXISTING object

var teacher = Object.create(employee);
console.log(teacher);