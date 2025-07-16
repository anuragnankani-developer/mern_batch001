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

    let userObj = {
        fullname: fullName,
        username: userName,
        email: email,
        password: password
    }
    getData.push(userObj);

    localStorage.setItem("userInfo", JSON.stringify(getData));
    alert('User Added Successfully');

    }
    console.log('dataaaaaaaaaaa')

    
}

function showUsers(){
    const users = JSON.parse(localStorage.getItem("userInfo")) || [];

    const setData = document.getElementById('tableBody');

    const userData = users.map((value, index)=>{
        // console.log(value)
        console.log(value.fullname, value.username, value.email, value.password);
       return `
        <tr> 
        <td> ${index + 1 } </td> 
        <td> ${value.fullname} </td> 
        <td> ${value.username} </td> 
        <td> ${value.email} </td> 
        <td> ${value.password} </td> 

        </tr>
        `       

    })
     setData.innerHTML = userData.join("")

     let arr = [1,2,3,4,5];
     let joinData=arr.join("-")
    
console.log(joinData);




}
showUsers();