// Array of fun facts - you can customize these!
const facts = [
    "The first computer programmer was a woman named Ada Lovelace.",
    "The first computer mouse was made of wood.",
    "The first computer virus was created in 1983.",
    "The first website is still online today.",
    "JavaScript was created in just 10 days.",
    "The first computer game was created in 1962.",
    "The QWERTY keyboard layout was designed to slow typing speed.",
    "The first computer password was created in 1961.",
    "The first email was sent in 1971.",
    "The first webcam was created to monitor a coffee pot."
];

// Get DOM elements
const factText = document.getElementById('fact-text');
const newFactBtn = document.getElementById('new-fact-btn');

// Function to get a random fact
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// Function to update the displayed fact
function updateFact() {
    // Add fade-out effect
    factText.style.opacity = 0;
    
    setTimeout(() => {
        factText.textContent = getRandomFact();
        // Add fade-in effect
        factText.style.opacity = 1;
    }, 300);
}

// Add click event listener to button
newFactBtn.addEventListener('click', updateFact);

// Add transition effect for smooth fade
factText.style.transition = 'opacity 0.3s ease';

// Display initial random fact
updateFact();
