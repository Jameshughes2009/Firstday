// Logs window object using this
// if you console.log(window) you will get the same reponse as "This"
console.log("this: ");
console.log(this);

// Logs the document object
console.log("window.document: ");
console.log(window.document);

// Logs body of document
console.log("document.body: ");
console.log( document.body);

console.log("Document head")
console.log(document.head)
//if choosing a class use the .before the text
console.log("doc test h1",document.querySelector("h1"));
console.log("Doc Button",document.querySelector(".btn-test"))