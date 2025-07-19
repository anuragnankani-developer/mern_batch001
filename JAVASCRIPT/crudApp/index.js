console.log("javascript");

function addUser(event) {
  event.preventDefault();
  let fullName = document.getElementById("fullname").value;
  let userName = document.getElementById("username").value;
  let email = document.getElementById("useremail").value;
  let password = document.getElementById("userpassword").value;

  if (!fullName || !userName || !email || !password) {
    return alert("All Fields are Required....");
  } else {
    let getData = JSON.parse(localStorage.getItem("userInfo")) || [];

    let compareEmail = getData.some((value) => value.email === email);
    if (compareEmail) {
      return alert("Email is already Registered");
    }

    let userObj = {
      id: randomId(),
      fullname: fullName,
      username: userName,
      email: email,
      password: password,
    };
    getData.push(userObj);

    localStorage.setItem("userInfo", JSON.stringify(getData));
    alert("User Added Successfully");
  }
  window.location.href = "allUser.html";
}

function showUsers() {
  const users = JSON.parse(localStorage.getItem("userInfo")) || [];

  const setData = document.getElementById("tableBody");

  const userData = users.map((value, index) => {
    return `
        <tr> 
        <td> ${index + 1} </td> 
        <td> ${value.fullname} </td> 
        <td> ${value.username} </td> 
        <td> ${value.email} </td> 
        <td> ${value.password} </td> 
        <td> <button class="btn btn-primary" onclick="editUser(event,'${
          value.id
        }')" >Edit</button>  
        <button class="btn btn-danger" onclick="removeUser('${
          value.email
        }')" >Delete</button> </td> 
        </tr>
        `;
  });
  setData.innerHTML = userData.join("");
}

function randomId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 8);
}
// let findDate = Date.now().toString(36) + Math.random()
// let findDate = Date.now().toString(36) + Math.floor(Math.random())
let findDate =
  Date.now().toString(36) + Math.random().toString(36).substr(2, 8);
// console.log(findDate)

function removeUser(email) {
  console.log(email);
  if (!email) {
    return alert("Email is Required");
  }
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

  let filteredData = allData.filter((value) => value.email !== email);
  console.log(filteredData);
  localStorage.setItem("userInfo", JSON.stringify(filteredData));
}

function editUser(event, id) {
  event.preventDefault();

  let editData = JSON.parse(localStorage.getItem("userInfo")) || [];

  let findData = editData.find((value) => value.id == id);

  let { fullname, username, email, password } = findData;

  document.getElementById("editFullname").value = fullname;
  document.getElementById("editUserName").value = username;
  document.getElementById("editUseremail").value = email;
  document.getElementById("editUserpassword").value = password;

  localStorage.setItem("userId", id);

  document.getElementById("myTable").style.display = "none";
  document.getElementById("myForm").style.display = "block";
}

function updateUser(event) {
  event.preventDefault();
  const userId = localStorage.getItem("userId");
  let editData = JSON.parse(localStorage.getItem("userInfo")) || [];
  let fullName = document.getElementById("editFullname").value;
  let userName = document.getElementById("editUserName").value;
  let userEmail = document.getElementById("editUseremail").value;
  let userPassword = document.getElementById("editUserpassword").value;

  let findIndex = editData.findIndex((value) => value.id === userId);

  if (editData[findIndex].email !== userEmail) {
    if (editData.some((value) => value.email === userEmail))
      return alert("email is already registered");
  }
  editData[findIndex].fullname = fullName;
  editData[findIndex].username = userName;
  editData[findIndex].email = userEmail;
  editData[findIndex].password = userPassword;

  localStorage.setItem("userInfo", JSON.stringify(editData));
  document.getElementById("myTable").style.display = "block";
}

function hideForm(event) {
  event.preventDefault();
  document.getElementById("myTable").style.display = "block";
  document.getElementById("myForm").style.display = "none";
}

showUsers();
