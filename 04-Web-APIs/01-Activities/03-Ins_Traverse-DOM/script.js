console.log("Document Body: ")
console.log(document.body);

console.log("Children of Document Body: ")
console.log(document.body.children);
// all child elements

console.log("First child of body: ")
console.log(document.body.children[0]);
// just the h1 tag -> 0th index
console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);
//document.body.children[1] - what in ul
//...children[0] ->li ->#First child ul

// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul");
console.log("before style", firstChildUl) // logs entire



// Setting style of element
setTimeout(() => {
    firstChildUl.style.color = "green";
    console.log("changing colors")
}, 4000)
// firstChildUl.style.color = "green";


setTimeout(()=> {
    firstChildUl.style.color = "green";
    console.log("after style", firstChildUl);

}, 8000)