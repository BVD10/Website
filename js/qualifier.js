// Navigation function for qualifier page
function navigateToPath(pathType) {
    const content = document.querySelector('.content');

    // Add loading animation
    content.classList.add('loading');

    // Navigate after animation
    setTimeout(() => {
        if (pathType === 'sales-rep') {
            // Redirect to sales rep page
            window.location.href = 'sales-rep.html';
        } else if (pathType === 'business-owner') {
            // Redirect to business owner page
            window.location.href = 'business-owner.html';
        }
    }, 300);
}

// Add keyboard support
document.addEventListener('keydown', function(e) {
    if (e.key === '1') {
        navigateToPath('sales-rep');
    } else if (e.key === '2') {
        navigateToPath('business-owner');
    }
});

// Add particle effect on hover (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.choice-btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Add subtle scale effect
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Prevent accidental navigation away
window.addEventListener('beforeunload', function(e) {
    // Only if user hasn't made a choice yet
    if (!sessionStorage.getItem('pathChosen')) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Store choice when button is clicked
function navigateToPath(pathType) {
    sessionStorage.setItem('pathChosen', pathType);

    const content = document.querySelector('.content');
    content.classList.add('loading');

    setTimeout(() => {
        if (pathType === 'sales-rep') {
            window.location.href = 'sales-rep.html';
        } else if (pathType === 'business-owner') {
            window.location.href = 'business-owner.html';
        }
    }, 300);
}
