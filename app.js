const loginForm = document.getElementById("login-form");
//const loginForm = document.querySelector("#login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function handleBtnClick(){
  const value = loginInput.value;
  if (value === "") {
    console.log("please write your name");
  } else if(value.length > 15){
    alert("Your name is too long");
  } else{
    console.log(value)
  }
}

loginButton.addEventListener("click", handleBtnClick);
