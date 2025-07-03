
let yes_btn = document.querySelector(".green");
let no_btn = document.querySelector(".red");

no_btn.addEventListener("click", () => {
    alert("This is not possible. Are you out of your mind!?😤")
})

yes_btn.addEventListener("click", () => {
    prompt("Show your feelings in atleast 1lakh characters.🙈")
})


no_btn.addEventListener("mouseover", () => {
    let left = getRandomnumber(0, 100);
    let top = getRandomnumber(50, 100);

    no_btn.style.left = `${left}%`;
    no_btn.style.top = `${top}%`;
})


function getRandomnumber(min, max) {
    return Math.random() * (max - min) + min;
}
