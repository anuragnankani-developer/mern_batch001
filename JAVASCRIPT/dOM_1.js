function changeContent(){

    let data = document.getElementById('first');
    
    data.innerHTML="Helloooo"
    console.log(data);
}



function addNewContent(){

    let data = document.getElementById('first');
    
    data.innerHTML="<h1 id='anotherId' > hello from javascript </h1>"
    console.log(data);
    let newData = document.getElementById('anotheId');
console.log(newData);
}


let addElement = document.createElement("h1");
addElement.innerText = "New h1 tag is introduced";
let excessElement = document.getElementById('first')

excessElement.appendChild(addElement);

var element = document.getElementsByTagName("div")
console.log(element);







