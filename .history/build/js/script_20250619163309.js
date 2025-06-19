
//theme change...
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


// ...nav toggle...

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

 //footer year update
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("footer-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ...contact form submission...

    document.getElementById("myForm").addEventListener("submit", submitForm);

    function submitForm(event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      var formObject = {};
      formData.forEach(function(value, key) {
        formObject[key] = value;
      });

      fetch(
        "https://script.google.com/macros/s/AKfycbzORS5Q7zgWjETNDUd6bhZ2d8VpP5u0HfO7Dw_1QSrdQQPk-0JwaJlVq3vQn6CPSh8/exec",
        {
          method: "POST",
          body: JSON.stringify(formObject),
        }
      )
      .then(res => {
        if (res.ok) {
          alert("Hello, you've successfully subscribed to our newsletter");
        } else {
          // Handle error if needed
        }
      })
      .catch(err => console.log(err));

      event.target.reset();
    }


