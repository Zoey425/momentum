// const title = document.getElementById("title");
// title.innerText = "I got you!"
// innerText
// innerHTML

// console.dir(title);
// console.log(title.id);
// console.log(title.className)


// elements 를 한번에 셀렉할수 있는 방법들 중 2가지

// const hellos = document.getElementsByClassName("hello");
// //  use getElementsByClassName when you want select many elements at the same time.
// console.log(hellos);


// const titleV = document.getElementsByTagName("h1");
// console.log(titleV);


// What is the querySelector?
// querySelector는 element를 css방식으로 검색 가능
 
//querySelector 오직 하나의 첫번째 element만 return해준다.
// const queryS = document.querySelector(".bye h1");
// console.log(queryS);


// const querySAll = document.querySelectorAll(".bye h1");
// selector 안의 조건에 부합하는 모든 element를 가져다 준다.

// console.log(querySAll);

// const test = document.querySelector("#title");
// const test1 = document.getElementById("title");
// 위의 두 문장은 같은걸 불러온다 
// 하지만 querySelector는 #title h1가능하지만 getElementById는 불가능.

// title.innerHTML = "Hello";
// title.style.color = "blue";




// Click Event!
// const hOne = document.querySelector("div.bye:first-child h1");
// console.log(hOne)


// function handleTitleClick() {
//   hOne.style.color = "green";
// }

// function handleMouseEnter() {
//   hOne.innerText = "Mouse is here";
// }

// function handleMouseLeave() {
//   hOne.innerText = "Mouse is gone!"
// }

// function handleWindowResize(){
//   document.body.style.backgroundColor = "yellow";
// }

// function handWindowCopy() {
//   alert("copier!")
// }


// function handleWindowOffline() {
//   alert("NO WIFI CONNECTION")
// }

// function handleWindowOnline() {
//   alert("ALL GOOD")  
// }

// hOne.addEventListener("click" , handleTitleClick);
// 위의 줄 코드를 onclick으로 변경 가능
// hOne.onClick = handleTitleClick;
// hOne.addEventListener("mouseenter", handleMouseEnter);
// hOne.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handWindowCopy);


// // wifi
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);




// Click Event with IF
const h1 = document.querySelector("div.nice:first-child h1");



function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === 'blue') {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick)