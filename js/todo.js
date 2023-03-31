const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


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
  button.innerText = "❌";
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
