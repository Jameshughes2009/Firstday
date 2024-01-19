function keydownAction(event) {
  // TODO: Complete keydown function
  console.log("key is pressed down");
  console.log("key", event.key);
  console.log("code", event.code);

  document.querySelector("#code").textContent = event.code;
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
