// Function to open the hamburger menu
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(0)'; // Show the dropdown menu
    dropdown.style.display = 'block'; // Make sure it's visible
}

// Function to close the hamburger menu
function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(-500px)'; // Hide the dropdown menu (slide it up)
    setTimeout(() => {
        dropdown.style.display = 'none'; // Hide dropdown after the animation
    }, 500); // 500ms matches the animation duration
}

// Close the dropdown when any section link is clicked
const links = document.querySelectorAll('.dropdown .links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        const dropdown = document.querySelector('.dropdown');
        dropdown.style.transform = 'translateY(-500px)';
        setTimeout(() => {
            dropdown.style.display = 'none';
        }, 500);
    });
});
// Typewriter Effect
const texts = ["AI/ML Engineer", "Data Scientist"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Function to open the modal
function openModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = "none";
}

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Add event listeners to each project card for the modal to open
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
    card.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        const projectId = card.dataset.projectId; // Get the project ID from data-project-id
        openModal(projectId); // Open the modal
    });
});

// Function to open the modal
function openModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = "block";
    initImageSlider(projectId); // Initialize image slider
}

// Function to close the modal
function closeModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = "none";
}

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Image slider functionality
function initImageSlider(projectId) {
    const modal = document.getElementById(projectId);
    const images = modal.querySelectorAll('.slider-image');
    let currentIndex = 0;

    // Display next and previous buttons
    const nextButton = modal.querySelector('.next-button');
    const prevButton = modal.querySelector('.prev-button');
    nextButton.style.display = "block";
    prevButton.style.display = "block";

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? 'block' : 'none'; // Show current image, hide others
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
        showImage(currentIndex);
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // Show the first image initially
    showImage(currentIndex);
}

window.onload = typeWriter;
