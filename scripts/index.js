function playGame() {
  const playSection = getElementId("play");
  const typingSection = getElementId("typing");
  const gameScore = getElementId("scored");
  playSection.classList.add("hidden");
  gameScore.classList.add("hidden");
  typingSection.classList.remove("hidden");
  alphaRandom();
  setTextElement("score", 0);
  setTextElement("life", 5);
  timing();
}

// random alphabet function

function alphaRandom() {
  const alphaText = "abcdefghijklmnopqrstuvwxyz";
  const arrAlpha = alphaText.split("");
  const randomIndex = Math.floor(Math.random() * arrAlpha.length);
  const display = getElementId("display");
  display.innerText = arrAlpha[randomIndex];
  wordColor(arrAlpha[randomIndex]);
  return arrAlpha[randomIndex];
}

// word bg color

function wordColor(element) {
  const word = getElementId(element);
  word.classList.add("bg-orange-400");
}
// remove bg color
function removeBgColor(element) {
  const word = getElementId(element);
  word.classList.remove("bg-orange-400");
}

//  key borad typing

document.addEventListener("keyup", function (event) {
  const display = getElementId("display");
  let scoreCount = getElementIdValue("score");
  let lifeCount = getElementIdValue("life");
  if (display.innerText.toLowerCase() === event.key) {
    alphaRandom();
    removeBgColor(event.key);
    setTextElement("score", (scoreCount += 1));
  } else {
    // alphaRandom();
    setTextElement("life", (lifeCount -= 1));
    if (lifeCount <= 0) {
      removeBgColor(display.innerText.toLowerCase());
      const typingSection = getElementId("typing");
      const gameScore = getElementId("scored");
      const mainScore = getElementId("mainScore");
      typingSection.classList.add("hidden");
      gameScore.classList.remove("hidden");
      mainScore.innerText = scoreCount;
    }
  }
});
