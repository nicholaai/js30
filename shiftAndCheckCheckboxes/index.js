let shiftHeld = false;
let lastChecked;
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleClick(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        // if the current checkbox is what we clicked or if it's the last checked we swap inBetween
        // once the checkbox is this (the clicked item) it starts the flagging process
        // once the checkbox is equal to last checked, it stops the flagging process
        inBetween = !inBetween;
      }
      // only check the inBetween checkboxes
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));
