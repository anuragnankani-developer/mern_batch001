console.log('Hello from DOM')

var data = document.body
console.log(data);

let lome = document.getElementsByClassName('lome')
lome.innerHTML
console.log(lome)

let accessHeading = document.getElementById("heading")
accessHeading.innerHTML = " <h1> content is changed by javascript </h1>"
console.log(accessHeading);
let images = document.getElementById("monkImg").src = "camera.jpg"

console.log(images);

let paragraph = document.getElementById("graph");
paragraph.classList.add("paragraph","newClass")
paragraph.classList.remove("newClass")
paragraph.classList.remove("para")
paragraph.style.marginLeft="30px"
paragraph.style.border="2px solid"
paragraph.parentElement.style.color="red"
console.log(paragraph)


