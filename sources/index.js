function generateHaiku(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  new Typewriter(poemElement, {
    strings: "haiku goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let haikuFormElement = document.querySelector("#haiku-form");
haikuFormElement.addEventListener("submit", generateHaiku);
