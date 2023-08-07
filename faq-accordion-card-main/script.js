document.querySelectorAll(".accordion__question").forEach((item) => {
    item.addEventListener("click", (event) => {
        item.classList.toggle("show");
        item.nextElementSibling.classList.toggle("show");
    });
});
