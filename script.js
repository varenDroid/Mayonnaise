let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#userInput");
let divOutput = document.querySelector("#translate-output");

// let serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
let serverUrl = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error) {
  console.log("Server Errror" + error);
  alert("Server error");
}

function generateserveQuery(text) {
  return serverUrl + "?" + "text=" + text;
}

function clickHandler() {
  // divOutput.innerText = "hehehhe " + txtInput.value;
  let userTextInput = txtInput.value;
  fetch(generateserveQuery(userTextInput))
    .then((response) => response.json())
    .then((json) => {
      let translatedString = json.contents.translated;
      console.log(translatedString);
      divOutput.innerText = translatedString;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
