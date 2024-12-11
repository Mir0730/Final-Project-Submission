// Timer for Airsoft Guns Sale
const saleEndDate = new Date("2024-12-31T23:59:59").getTime();
const timerDiv = document.getElementById("sale-timer");

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = saleEndDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerDiv.innerHTML = `<h4>Airsoft Sale Ends In: ${days}d ${hours}h ${minutes}m ${seconds}s</h4>`;
    } else {
        timerDiv.innerHTML = "<h4>The Airsoft Sale has ended!</h4>";
    }
}

setInterval(updateTimer, 10000);

// Change image dynamically
const images = ["images/sale1.jpg", "images/sale2.jpg", "images/sale3.jpg"];
let currentIndex = 0;

function changeImage() {
    const carouselImages = document.querySelectorAll(".carousel-item img");
    carouselImages.forEach((img, index) => {
        img.src = images[(currentIndex + index) % images.length];
    });
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 10000);

// Example Array and Loop Usage
const gearList = [
    { name: "Sniper Rifle", price: "$150" },
    { name: "Tactical Vest", price: "$50" },
    { name: "Airsoft Helmet", price: "$30" },
];

console.log("Available Gear:");
gearList.forEach((gear) => {
    console.log(`${gear.name}: ${gear.price}`);
});
