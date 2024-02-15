// get the element by id
function getElementId(element) {
  const getId = document.getElementById(element);
  return getId;
}

// getelementId value function

function getElementIdValue(element) {
  const getTextValue = document.getElementById(element);
  const textValue = getTextValue.innerText;
  const value = parseInt(textValue);
  return value;
}

// setText value in aelement

function setTextElement(element, value) {
  const elment = getElementId(element);
  elment.innerText = value;
}
