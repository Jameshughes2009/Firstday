var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function(){
  console.log("inside increment button");
  count = count + 2;
  console.log("new count cal", count); setCounterText();
})

// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function(){
  console.log("inside decremet function");
  //if 0, content we want greater than 0
  if (count > 0)count = count - 1;
  console.log("dec count value", count);
  setCounterText();
})
