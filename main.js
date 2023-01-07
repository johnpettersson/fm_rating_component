
let selectedRating;

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const ratingspan = document.getElementById("ratingspan");

const submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", handleSubmit);

document.querySelector(".ratings").childNodes.forEach(button => {
    button.addEventListener("click", selectRating);
})

function selectRating(e) {
    if (selectedRating)
        selectedRating.classList.remove("active");
    

    selectedRating = e.target;
    selectedRating.classList.add("active");
}

function handleSubmit(e) {
    if (!selectedRating) {
        return;
    }
    
    ratingspan.textContent = selectedRating.textContent;
    
    card1.classList.add("d-none");
    card2.classList.remove("d-none");
}