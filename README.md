# CFG-Assignments
## Assignment 2 - Javascript

* unshift(): Definition and example of use
Unshift() is a method used in JS to add elements to the beginning of an array. It modifies the array and returns the new length of the array. Find the example below in the assignment_questions.js file if you want to see it in the console:

let CFGDegree = ["fullstack", "software engineering", "data science"];
console.log(CFGDegree); // Will return ["fullstack", "software engineering", "data science"]
let length = CFGDegree.unshift("data engineering", "product management");
console.log(CFGDegree); // Will return ["data engineering", "product management", "fullstack", "software engineering", "data science"]
console.log(length); // Will return 5

* shift(): Definition and example of use
Shift() is a method in JS to remove the first element of an array. It modifies the orginal array and returns the removed element. If the length property is 0, it will return undefined. Find the example below in the assignment_questions.js file if you want to see it in the console:

let shiftExample = languages.shift();
console.log(CFGDegree); // Will return ["product management", "fullstack", "software engineering", "data science"]
console.log(shiftExample); // Will return data engineering.

* split(): Definition and example of use
Split() is a method in JS that splits a string into an array of substrings based on a specific separator and returns the new array. Find the example below in the assignment_questions.js file if you want to see it in the console:
let CFGDegree2 = "fullstack, software engineering, data science, product management, data engineering"
let CFGDegreeArray = CFGDegree2.split(",");
console.log(CFGDegreeArray); // Will return ["fullstack, software engineering, data science, product management, data engineering"]

* Object Methods: An object method is a function inside an object. Find the example of new object and an object method below in the assignment_questions.js file if you want to see it in the console:
const languages = {
    name: "Javascript",
    creator: "Brendan Eich",
    frameworks: ["react", "vue"],
    myFav: function() { // Method
        console.log("Javascript is my favorite language");
    }
};
console.log(languages.name); // Will return Javascript
console.log(languages.myFav()); // Will return Javascript is my favorite language

* onmouseover Event: A JS event that occurs when the mouse pointer moves onto an element, trigering a specific action or behaviour. 

* onclick Event: A JS event that occurs when an element is clicked by the user. 

* onsubmit Event: A JS event that occurs when a form is submitted by the user, typically by clicking a submit button. 


