// let accessData = document.querySelector('#second')
// accessData.innerHTML="<p> I am paragraph written by javascript"
// console.log(accessData)


function changeTheText(){
let accessClass = document.querySelector('#second')
accessClass.innerHTML = "<p> p tag is created </p>"
console.log(accessClass)
}

function changeAnotherText(){
let accessClass = document.querySelector('#second')
accessClass.innerHTML = "<h1> h1 is triggered </h1>"
console.log(accessClass)
}

let accessAttribute= document.getElementById("second").setAttribute("class","and")

console.log(accessAttribute);

let accessButton= document.getElementById('button');
accessButton.addEventListener('click',function(){
        console.log('event is triggered')
})

accessButton.addEventListener('click',function(){
        console.log('my function is called')
})


