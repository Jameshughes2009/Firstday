// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
var rootEL = $("#root");
console.log(rootEL);

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var titleEl = $("<p>");


// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
titleEl.text("~ Carol Dweck");


// TODO: Add the class `plain` to the author element
titleEl.attr("class", "pain");
console.log(titleEl);

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var h1EL = $("<h1>")

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
h1EL.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.")

// TODO: Apply the class `fancy` to the quote element
h1EL.attr("class", "fancy")

// TODO: Append the author element to the quote element
h1EL.append(titleEl) // parent (h1), child (title)
// parent (h1), child (title)
//quote element (parent)
//Athor element (child)
//author element (rhs) -> quote eelement (lhs)

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
// quote element (child)
//hmtl element id root -> #root -> parent element
rootEL.append(h1EL)//quote will appear first 


/**
 * titleEL.append(rootEL)
 * parent -> rootEl
 * child ->title
 */

// rootEL -> Grand grand parent elemtn
// any elemets we create in JS -> we add after rootEL
// IMPT NOTE -> we can't appened parent to child 
//why - parent elments needs to e here first, at the top, exisit before chld 
// this mean we have to append child to parent 
//parent.append(child) - correct syntax
