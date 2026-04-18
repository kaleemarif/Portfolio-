// Simple smooth scrollfor navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e) { 
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollintoView({
            behaviour:'smooth'
        });
    });
});

console.log("Portfolio Loaded Succesfully!");