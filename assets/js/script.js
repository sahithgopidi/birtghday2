// assets/js/script.js

const confettiContainer = document.querySelector('.confetti');

// Generate 100 confetti pieces
for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    confetti.style.animationDelay = Math.random() * 5 + 's'; // Random animation delay
    confettiContainer.appendChild(confetti);
}
