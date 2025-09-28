document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('appointmentForm');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you can add AJAX/fetch to send form to backend
    popup.style.display = 'flex';
    form.reset();
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if(e.target === popup) popup.style.display = 'none';
  });
});

