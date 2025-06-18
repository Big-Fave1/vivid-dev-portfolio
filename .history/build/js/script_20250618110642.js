

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




// ....backend code

require('dotenv').config(); 

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Received message:', { name, email, subject, message });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject ? subject : `New Contact Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
    res.status(200).json({ success: true, message: 'Message received and email sent!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };
  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  const result = await response.json();
    if (result.success) {
      document.getElementById('formResponse').textContent = "Message sent successfully!";
      document.getElementById('formResponse').style.color = "green";
      form.reset();
    } else {
      document.getElementById('formResponse').textContent = "Failed to send message.";
      document.getElementById('formResponse').style.color = "red";
    }
  } catch (error) {
    document.getElementById('formResponse').textContent = "Failed to send message.";
    document.getElementById('formResponse').style.color = "red";
  }
});