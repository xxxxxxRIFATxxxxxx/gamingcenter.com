// Get the container element
var btnContainer = document.getElementById("2nd-link-container");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("2nd-link-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};

// For Hide Show Content
const listOfProduct = document.querySelector(".list-of-product");
const howToUse = document.querySelector(".how-to-use");
const aboutProduct = document.querySelector(".about-product");
const reviews = document.querySelector(".reviews");

document.querySelector(".list-btn").addEventListener("click", () => {
    howToUse.style.display = "none";
    aboutProduct.style.display = "none";
    reviews.style.display = "none";

    listOfProduct.style.display = "block";
});

document.querySelector(".how-to-use-btn").addEventListener("click", () => {
    listOfProduct.style.display = "none";
    aboutProduct.style.display = "none";
    reviews.style.display = "none";

    howToUse.style.display = "block";
});

document.querySelector(".about-product-btn").addEventListener("click", () => {
    listOfProduct.style.display = "none";
    howToUse.style.display = "none";
    reviews.style.display = "none";

    aboutProduct.style.display = "block";
});

document.querySelector(".reviews-btn").addEventListener("click", () => {
    listOfProduct.style.display = "none";
    howToUse.style.display = "none";
    aboutProduct.style.display = "none";

    reviews.style.display = "block";
});