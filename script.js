
let yes_btn = document.querySelector(".green");
let no_btn = document.querySelector(".red");

no_btn.addEventListener("click", () => {
    alert("This is not possible. Are you out of your mind!?😤")
});

yes_btn.addEventListener("click", () => {
    prompt("Show your feelings in atleast 1lakh characters.🙈")
});

no_btn.addEventListener("mouseover", () => {
    const x = getRandomnumber(-300, 300);
    const y = getRandomnumber(-300, 300);
    no_btn.style.transform = `translate(${x}%, ${y}%)`;
});



function getRandomnumber(min, max) {
    return Math.random() * (max - min) + min;
};
