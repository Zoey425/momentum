# 크롬 앱 클론 코딩

크롬 앱 클론 코딩 작업

![앱 클론코딩이미지](img.jpg)


---


## Background.js 


```Javascript
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector("body");
bgImage.style.backgroundImage = `url(../img/${chosenImage})`;

// console.log(bgImage);

// document.body.appendChild(bgImage);


// recap
// random() 함수의 숫자는 0과 1사이의 숫자다 (0.xxxxxxx)
// 어떤 수 사이의 어떠한 랜덤한 수를 가져오고 싶을 때 해야할 일은
// 그냥 그 수를 곱한다. 그게 어떠한 숫자든 상관 없이.
// floor()로 반올림해준다.

```


---


## Clock.js
```Javascript 
const clock = document.querySelector("h2#clock");


function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${mins}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
// 함수를 매 5초마다 실행


// padStart() 함수는 내가 가지고있는 string을 보다 길게 만들 때 사용.
// setInterval() 함수는 정한 시간마다 함수를 실행시키게 해준다. 시간은 밀리세컨드로 1초 = 1000

```

---


## Todo.js


```Javascript 
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoListWarp = document.querySelector("div.todo_list");
const toDoBtn = document.querySelector("p.todo_btn");
const toDoCBtn = document.querySelector("p.close_btn");

// 버튼 클릭시 나오게하기
function showEvent(){
  toDoListWarp.style.height = '500px';
  toDoListWarp.style.padding = '20px';
  toDoListWarp.style.transition = "all 0.5s ease";
  toDoBtn.style.opacity = "0.8";

}

toDoBtn.addEventListener("click", showEvent);


//버튼 클릭시 닫기
function closeEvent(){
  toDoListWarp.style.height = '0px';
  toDoListWarp.style.padding = '0px';
  toDoListWarp.style.transition = "all 0.5s ease";
  toDoBtn.style.opacity = "1";

}

toDoCBtn.addEventListener("click", closeEvent)

const TODOS_KEY = "todos";
let toDos = [];
// toDos는 항상 빈 array로 시작 


function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
  // JavaScript의 object나 array 등을 string으로 변환 가능하다. 
}


function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(typeof li.id, li.id);
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  saveToDos();
}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerHTML = "✓";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  // input의 value를 새로운 변수에 복사
  // 그 위로 toDoInput.value값에 어떤 행동을 해도 newTodo에는 아무런 영향이 없다.
  
  toDoInput.value = "";
  // console.log(newTodo, toDoInput.value);
  

  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  }

  // 데이터베이스로 매번 사용자가 적어둔 text를 push하는데, object를 push하고 싶을 땐 위의 코드를 확인
  toDos.push(newTodoObj);
  


  //handleToDoSubmit function이 아래 function 사용.
  paintToDo(newTodoObj);
  // 변수 newTodo는 input의 값을 비우기 전의 값을 나타냄 
  // localStorage에는 배열(Array)를 저장불가. 오직 String(text)만 가능 
  // 위에 push한걸 토대로 작동하긴 하는데 만약 지울 동일한 text일 경우 어떠한 text가 지워진지 모르기에 toDos에 ID값을 부여하려고 한다.

  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  // 위에서 작업한 string을 string이 아닌 JavaScript에서 사용가능한 object으로 만들 수 있다. 

  toDos = parsedToDos; 
  console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}

// recap
// 작성방법에는 두가지가 있다.
// parsedToDos.forEach((item) => console.log("this is the turn of", item));

// 2번째는
// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

// JavaScript는 이 function을 호출하면서 array에 있는 각각의 item을 준다.
```

