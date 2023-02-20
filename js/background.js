const images = ["0.png", "1.png", "2.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

//새로운 태그 만들기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
//새로 만든 태그 body에 추가하기
document.body.append(bgImage);