var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var inputEL = $("#shopping-input")

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();
    console.log(inputEL.val())
    var itemVal = inputEL.val();

    var listItemEL = $("<li>")
    listItemEL.text(itemVal)
    shoppingListEl.append(listItemEL);

    $('input[type="text"]').val("")
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", handleFormSubmit)
