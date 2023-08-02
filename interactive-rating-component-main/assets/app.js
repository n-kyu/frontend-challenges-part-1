const ratingCard = document.querySelector(".card-rating");
const resultCard = document.querySelector(".card-result");
const ratingNumbers = document.querySelectorAll(".card-rate-score");
const resultRateValue = document.querySelector(".card-result-value");

let activeRatingNumber;

function selectRating(number) {
    const selectedRatingNumber = ratingNumbers[number - 1];
    selectedRatingNumber.classList.add("card-rate-score-active");

    if (activeRatingNumber) {
        const activeRating = ratingNumbers[activeRatingNumber - 1];
        activeRating.classList.remove("card-rate-score-active");
    }

    activeRatingNumber = number;
}

function submited() {
    if (!activeRatingNumber) {
        alert("please select a rating");
        return;
    }
    ratingCard.classList.add("hide");
    resultCard.classList.remove("hide");

    resultRateValue.textContent = activeRatingNumber;
}
