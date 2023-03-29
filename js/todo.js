const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
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

  //handleToDoSubmit function이 아래 function 사용.
  paintToDo(newTodo);
  // 변수 newTodo는 input의 값을 비우기 전의 값을 나타냄 
}

toDoForm.addEventListener("submit", handleToDoSubmit)