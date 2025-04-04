// Fungsi untuk membuat confetti
function createConfetti() {
    const colors = ['#e91e63', '#9c27b0', '#3f51b5', '#03a9f4', '#009688', '#8bc34a', '#ffeb3b', '#ff9800'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random shapes
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else {
            confetti.style.borderRadius = '0';
        }
        
        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        confetti.style.animationDuration = duration + 's';
        
        // Random delay
        confetti.style.animationDelay = Math.random() * 5 + 's';
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation completes
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Jalankan confetti secara terus menerus
function startConfetti() {
    createConfetti();
    setTimeout(startConfetti, 500);
}

// Inisialisasi Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Mulai animasi confetti
    startConfetti();
    
    const closedBook = document.getElementById('closed-book');
    const openedBook = document.getElementById('opened-book');
    const closeBtn = document.getElementById('close-book');
    const blueBook = document.getElementById('blue-book');

    if (closedBook && openedBook && closeBtn) {
        closedBook.addEventListener('click', function() {
            openedBook.classList.add('show');
            closedBook.style.opacity = '0';
            blueBook.style.opacity = '0';
        });

        closeBtn.addEventListener('click', function() {
            openedBook.classList.remove('show');
            closedBook.style.opacity = '1';
            blueBook.style.opacity = '1';
        });
    }

    if (blueBook && openedBook && closeBtn) {
        blueBook.addEventListener('click', function() {
            openedBook.classList.add('show');
            closedBook.style.opacity = '0';
            blueBook.style.opacity = '0';
        });
    }
});