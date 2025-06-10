const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})














// ...existing code...

document.addEventListener("DOMContentLoaded", function() {
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const asideLinks = aside.querySelectorAll('a'); // Select all links inside aside

    navToggler.addEventListener('click', function() {
        aside.classList.toggle('open');
    });

    // Hide aside when any link is clicked
    asideLinks.forEach(link => {
        link.addEventListener('click', function() {
            aside.classList.remove('open');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("footer-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ...existing code...

