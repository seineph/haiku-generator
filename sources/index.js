function publishHaiku(response) {
  let poemElement = document.querySelector("#poem");
  new Typewriter(poemElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  console.log(response.data.answer);
}

function generateHaiku(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");

  let apiKey = "8daacfbefa5ad84o0e990686f432t73c";
  let context = `Create each answer in Haiku format, follow the rules at all times. Give the haiku in three lines with <br/>. Sign each poem with <strong>SheCodes.ai</strong>.`;
  let prompt = `write a haiku about ${userInstructions.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="blink">⏳ Generating a Haiku about ${userInstructions.value}</span>`;

  axios.get(apiUrl).then(publishHaiku);
}

let haikuFormElement = document.querySelector("#haiku-form");
haikuFormElement.addEventListener("submit", generateHaiku);
