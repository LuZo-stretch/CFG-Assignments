# CFG-Assignments

## Assignment 3 - SQL

My group of friends that like to go to the cinema has grown and we have decided to create a club and organize ourselves better. We want to be able to find what movies are running in which cinema per area, and also see what other members are in the same area to organize events and be able to email them. To do this, I want to be able to store movies (title, genre, rating), cinemas (names, areas, and how plush or how ugly they are), club members (names, emails and the area they are based in). I also want to have a join table that will show the movies, cinemas they are playing in, and show times. I have written queries to add values for all these tables, and also a stored procedure that allows to select one cinema and show the movie, rating and the genre. Like this, the members always know what is playing near them. Some of the members want to organize a local event and have used a join by query to show members that are located in a specific area. Apparently, this created some drama in the club as other members felt excluded. 

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


