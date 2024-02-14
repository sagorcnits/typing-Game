function playGame() {
  const playSection = document.getElementById("play");
  const typingSection = document.getElementById("typing");
  playSection.classList.add("hidden");
  typingSection.classList.remove("hidden");
  alphaRandom();
}

setInterval(function () {
  alphaRandom();
}, 1000);

// random text
let count = 0;

function alphaRandom() {
  const alphaText = "abcdefghijklmnopqrstuvwxyz";
  const arrAlpha = alphaText.split("");
  const randomIndex = Math.floor(Math.random() * arrAlpha.length);
  const display = document.getElementById("display");
  display.innerText = arrAlpha[randomIndex];
  wordColor(arrAlpha[randomIndex]);

  document.body.addEventListener("keyup", function (event) {
    if (event.key === arrAlpha[randomIndex]) {
      count += 1;
    }
  });
}

// word bg color

function wordColor(element) {
  const word = document.getElementById(element);
  word.classList.add("bg-orange-400");
}

//  key borad typing
