let btnTranslate = document.querySelector('#btn-translate');
let textInput = document.querySelector('#input-txt');
let outputDiv = document.querySelector("#output");

// let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// let serverURL = "https://api.funtranslations.com/translate/minion.json" // minnon api 
let serverURL = "	https://api.funtranslations.com/translate/pirate.json" // pirate api
function getTranslationURL(input) {
    return `${serverURL}?text=${input}`
}

function errorHandler(error) {
    console.log("error occuerd", error);
    alert("something wromg with server!!")
}

function clickHandler() {
    // console.log("clicked");
    // console.log("input", textInput.value) // value will get the value which we type inside text area after click event
    // outputDiv.innerText = "banananaada :- " + textInput.value

    let inputText = textInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            // console.log(json.contents.translated)
        })
        .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)
