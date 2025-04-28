// Simple form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message Sent Successfully!');
});