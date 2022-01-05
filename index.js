// // //objects


// // //creating object using constructor function

// // var myObj = new Object();

// // myObj.name = "Student1";    //dot notation
// // myObj["age"] = 24;         //square braces notation

// // console.log("OBJECT", myObj);

// // //Objects are comma separated entities
// // var myObj2 = {
// //     name : "harshita",
// //     age : 24
// // }

// // console.log(myObj2);

// // // Accessing keys and values.

// // console.log(myObj2["age"], myObj.age);     //accessing the values






// // //accessing the keys    = for-in loop , using Object.keys
// // // var arr = ["e", "l", "e", "v"];

// // console.log("accessing the keys");

// // for (const key in myObj2) {
// //     console.log(key, myObj2[key]);
// // }


// // const arrOfKeys = Object.keys(myObj2);
// // const arrOfValues = Object.values(myObj2);
// // console.log("**********KEYS********", arrOfKeys, arrOfValues);



// //methods = a function which is defined as a key's value of an object
// // and functions
// // OOPS  = object oriented programming structure

// // JS 

// //John doe is 28 years old. He works as a pilot.

// // var user = {
// //     firstName : "John",
// //     lastName : "Doe",
// //     age : 28,
// //     occupation : "Pilot",
// //     displayInfo : function (){  //method
// //         console.log(this.firstName, this.lastName, " is ", this.age , "years old. He works as a ", this.occupation);
// //     }
// // }
// // // console.log("USER", user.firstName);
// // user.displayInfo();

// // Spread operator ...

// var obj1 = {    //personal info
//     name : "harshita",
//     age : 24,
// }

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  console.log(me);
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  console.log(me);
  me.printIntroduction();

// var fullInfo = {
//     ...obj1,
//     ...obj2
// }
// console.log(fullInfo);

// console.log(Object.entries(fullInfo)[0][0]);

const foo = function() {
    return function(){
          console.log("Hello World");
    }
}
foo()();

