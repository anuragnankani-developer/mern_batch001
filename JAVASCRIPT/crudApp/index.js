console.log('javascript');

function addUser(){
    let fullName = document.getElementById('fullname').value;
    let userName = document.getElementById('username').value;
    let email = document.getElementById('useremail').value;
    let password = document.getElementById('userpassword').value;

    if(!fullName || !userName || !email || !password){
       return alert('All Fields are Required....')
    }else{
        let getData = JSON.parse(localStorage.getItem("userInfo")) || [];

        let compareEmail = getData.some((value)=> value.email === email);
        if(compareEmail){
            return alert('Email is already Registered')
        }

    let userObj = {
        id: randomId() ,
        fullname: fullName,
        username: userName,
        email: email,
        password: password
    }
    getData.push(userObj);

    localStorage.setItem("userInfo", JSON.stringify(getData));
    alert('User Added Successfully');
    }
    
    
}


function showUsers(){
    const users = JSON.parse(localStorage.getItem("userInfo")) || [];

    const setData = document.getElementById('tableBody');

    const userData = users.map((value, index)=>{
       return `
        <tr> 
        <td> ${index + 1 } </td> 
        <td> ${value.fullname} </td> 
        <td> ${value.username} </td> 
        <td> ${value.email} </td> 
        <td> ${value.password} </td> 
        <td> <button class="btn btn-primary" >Edit</button>  
        <button class="btn btn-danger" onclick="removeUser(${value.email})" >Delete</button> </td> 
        </tr>
        `       

    })
     setData.innerHTML = userData.join("")
}

function randomId(){
     return Date.now().toString(36) + Math.random().toString(36).substr(2,8)
}
    // let findDate = Date.now().toString(36) + Math.random()
    // let findDate = Date.now().toString(36) + Math.floor(Math.random())
    let findDate = Date.now().toString(36) + Math.random().toString(36).substr(2,8)
// console.log(findDate)

function removeUser(email){
    console.log(email)
    if(!email){
        return alert('Email is Required')
    }
    // debugger
    // let allData = JSON.parse(localStorage.getItem("userInfo")) || [];

    // if(index !== -1){
    //      allData.splice(index,1)

    //     localStorage.setItem("userInfo", JSON.stringify(allData))
    // }
    // let selectedIndex = allData.findIndex((value)=> value.email === email );
    // console.log(selectedIndex);
    // if(selectedIndex !== -1){
    //      allData.splice(selectedIndex,1)

    //     localStorage.setItem("userInfo", JSON.stringify(allData))
    // }

    let filteredData = allData.filter((value)=> value.email !== email)
    console.log(filteredData)
    localStorage.setItem("userInfo", JSON.stringify(filteredData))
}

showUsers();
