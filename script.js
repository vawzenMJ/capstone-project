document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.checklist-nav a');
    
    // Smooth scrolling to checklist items
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            navLinks.forEach(link => link.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });

    // Verification logic
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.audit-card').style.borderLeftColor = "#2ed573";
        });
    });
});