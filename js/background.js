const images = ["01.JPG", "02.JPG", "03.JPG", "04.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector("body");
bgImage.style.backgroundImage = `url(./img/${chosenImage})`;

// console.log(bgImage);

// document.body.appendChild(bgImage);


// recap
// random() 함수의 숫자는 0과 1사이의 숫자다 (0.xxxxxxx)
// 어떤 수 사이의 어떠한 랜덤한 수를 가져오고 싶을 때 해야할 일은
// 그냥 그 수를 곱한다. 그게 어떠한 숫자든 상관 없이.
// floor()로 반올림해준다.
