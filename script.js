// Event Handling 🎈

// Button Click
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// Hover Effects
document.getElementById("myImage").addEventListener("mouseover", function() {
    this.style.opacity = "0.7";
});
document.getElementById("myImage").addEventListener("mouseout", function() {
    this.style.opacity = "1";
});

// Keypress Detection
document.addEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
});

// Bonus – Double Click or Long Press
document.getElementById("myButton").addEventListener("dblclick", function() {
    alert("Double click detected!");
});

// Interactive Elements 🎮

// Button Text/Color Change
document.getElementById("changeButton").addEventListener("click", function() {
    this.style.backgroundColor = "blue";
    this.innerText = "You clicked me!";
});

// Image Gallery/Slideshow
let currentImage = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
document.getElementById("nextButton").addEventListener("click", function() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentImage];
});

// Tabs/Accordion-style Content
document.getElementById("tab1").addEventListener("click", function() {
    document.getElementById("content1").style.display = "block";
    document.getElementById("content2").style.display = "none";
});

// Form Validation 📋✅

// Required Field Check
document.getElementById("submitForm").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Email is required!");
    }
});

// Email Format Validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
document.getElementById("submitForm").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
    }
});

// Password Rules
document.getElementById("submitForm").addEventListener("click", function() {
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
    }
});

// Bonus – Real-time Feedback
document.getElementById("email").addEventListener("input", function() {
    const email = this.value;
    if (!emailRegex.test(email)) {
        document.getElementById("emailFeedback").innerText = "Invalid email format!";
    } else {
        document.getElementById("emailFeedback").innerText = "Looks good!";
    }
});
