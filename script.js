const numberOfAdvice = document.querySelector(".adviceNumber");
const content = document.querySelector(".advice");
const btnSwapAdvice = document.getElementById("icon");

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => {
            numberOfAdvice.textContent = `advice # ${data.slip.id}`;
            content.textContent = `"${data.slip.advice}"`;
        });
}
getAdvice();

// for swap advice when click on the icon
btnSwapAdvice.addEventListener("click", () => {
    getAdvice();
});
