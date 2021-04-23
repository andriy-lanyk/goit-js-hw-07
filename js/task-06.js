const input = document.querySelector("#validation-input");

input.addEventListener("blur", checkInputContent);

function checkInputContent(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        if (input.classList.contains("invalid")) {
            input.classList.replace("invalid", "valid");
        } else {
            input.classList.add("valid");
        };
    } else {
        if (input.classList.contains("valid")) {
           input.classList.replace("valid", "invalid"); 
        } else {
            input.classList.add("invalid");
        };
    }
}
