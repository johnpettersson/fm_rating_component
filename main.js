
let selectedRating;

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const ratingspan = document.getElementById("ratingspan");

const submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", handleSubmit);

const form = document.getElementById("ratingform");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(form);

    let rating = formData.get("rating")
    
    if (rating) {
        ratingspan.textContent = rating;
    
        card1.classList.add("d-none");
        card2.classList.remove("d-none");
    }
}