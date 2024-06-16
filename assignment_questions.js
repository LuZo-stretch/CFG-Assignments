
// 2.1

let CFGDegree = ["fullstack", "software engineering", "data science"];
console.log(CFGDegree);
//// UNSHIFT() EXAMPLE
let length = CFGDegree.unshift("data engineering", "product management");
console.log(CFGDegree);
console.log(length);
//// SHIFT() EXAMPLE
let shiftExample = CFGDegree.shift();
console.log(CFGDegree);
console.log(shiftExample);
//// SPLIT() EXAMPLE
let CFGDegree2 = "fullstack, software engineering, data science, product management, data engineering"
let CFGDegreeArray = CFGDegree2.split(",");
console.log(CFGDegreeArray);

// 2.2

//// NEW OBJECT
const languages = {
    name: "Javascript",
    creator: "Brendan Eich",
    frameworks: ["react", "vue"],
    myFav: function() { // METHOD
        console.log("Javascript is my favorite language");
    }
};
console.log(languages.name);
console.log(languages.myFav());


