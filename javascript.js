let greet = "Hello, Welcome to my Personal Site!";
console.log(greet);
// alert(greet);

function myFunction() {
  console.log("hello");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}