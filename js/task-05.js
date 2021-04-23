const input = document.querySelector("#name-input");
const greetName = document.querySelector("#name-output");

input.addEventListener("input", changeGreetName);

function changeGreetName(event) {
    greetName.textContent = "незнакомец";
    if (event.currentTarget.value !== "") {
    greetName.textContent = event.currentTarget.value
    }

    console.log(event)
}

