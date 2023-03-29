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
