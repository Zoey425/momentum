const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // saving username
  localStorage.setItem(USERNAME_KEY, username)

  paintGreetings(username);
}

// recap!
// event.preventDefault();  : 브라우저의 기본 동작을 막음
// loginForm.classList.add(HIDDEN_CLASSNAME); : loginForm에 hidden 클래스를 추가
// const username = loginInput.value; : loginInput의 값을 변수 username에 저장
// greeting.innerText = `Hello ${username}` : 비어있는 h1인 greeting에 Hello ${username}라는 string을 넣어줌
// greeting.classList.remove(HIDDEN_CLASSNAME) : 그 다음에 hidden이라는 클래스 이름을 remove 시켜준다.


function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


// local storage에 username 값의 유무확인
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);


if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  // show the greetings
  paintGreetings(username);
}