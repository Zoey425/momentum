const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const typeUserWrote = loginInput.value;
  // saving username
  localStorage.setItem(USERNAME_KEY, typeUserWrote);
  // localStorage에 뭔가를 저장하면 paintGreetings를 호출하는 순간에 그 유저 정보는 이미 localStorage에 저장되어있다.
  paintGreetings();
}

// recap!
// event.preventDefault();  : 브라우저의 기본 동작을 막음
// loginForm.classList.add(HIDDEN_CLASSNAME); : loginForm에 hidden 클래스를 추가
// const username = loginInput.value; : loginInput의 값을 변수 username에 저장
// greeting.innerText = `Hello ${username}` : 비어있는 h1인 greeting에 Hello ${username}라는 string을 넣어줌
// greeting.classList.remove(HIDDEN_CLASSNAME) : 그 다음에 hidden이라는 클래스 이름을 remove 시켜준다.
// localStorage.setItem(USERNAME_KEY, username) :  localStorage에 USERNAME_KEY("username")이라는 key 저장하고 value로 username=loginInput.value(입력한 값)으로 저장 
// paintGreetings(username); : 마지막으로 paintGreetings함수 불러주고 username, 즉 input의 값을 넣어준다.


function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
// greeting안에 text가 들어가고 
// classList를 remove 
 

// local storage에 username 값의 유무확인
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

// 앱이 실행되면, localStorage에서 savedUsername를 얻으려고 시도한다.


if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  // show the greetings
  paintGreetings();
}