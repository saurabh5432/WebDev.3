// var tooltipTriggerList = [].slice.call(
//   document.querySelectorAll('[data-bs-toggle="tooltip"]')
// );
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl);
// });

function myFunction() {
  let text;
  let person = prompt(" Go to my Github profile:", " https://www.google.com/search?q=github&oq=&aqs=chrome.0.69i59i450l8.470646651j0j7&sourceid=chrome&ie=UTF-8 ");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
}
