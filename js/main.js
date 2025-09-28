// Elements
const modal = document.getElementById('bookingModal');
const openBtn = document.getElementById('openBooking');
const floatBtn = document.getElementById('floatBooking');
const closeBtn = document.getElementById('closeModal');
const thankYou = document.getElementById('thankYou');
const closeThanks = document.getElementById('closeThanks');
const diseaseField = document.getElementById('diseaseField');
const bookingForm = document.getElementById('bookingForm');

// --- Open modal ---
[openBtn, floatBtn].forEach(btn => {
  btn.addEventListener('click', () => modal.style.display = 'flex');
});

// --- Close modal ---
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => {
  if (e.target === modal) modal.style.display = 'none';
  if (e.target === thankYou) thankYou.style.display = 'none';
};

// --- Disease card click ---
document.querySelectorAll('.disease-card').forEach(card => {
  card.addEventListener('click', () => {
    const disease = card.textContent.trim();
    diseaseField.value = disease;
    addDoctorField();
    modal.style.display = 'flex';
  });
});

// --- Add Doctor dropdown dynamically ---
function addDoctorField() {
  if (!document.getElementById('doctorField')) {
    const select = document.createElement('select');
    select.id = 'doctorField';
    select.name = 'doctor';
    select.required = true;
    select.innerHTML = `
      <option value="">Select Doctor</option>
      <option value="Dr. A">Dr. A</option>
      <option value="Dr. B">Dr. B</option>
      <option value="Dr. C">Dr. C</option>
    `;
    // Insert the doctor dropdown before the date input
    const dateInput = bookingForm.querySelector('input[name="date"]');
    bookingForm.insertBefore(select, dateInput);
  }
}

// --- Form submission ---
bookingForm.addEventListener('submit', e => {
  e.preventDefault();
  modal.style.display = 'none';
  thankYou.style.display = 'flex';
  bookingForm.reset(); // clear form
});
closeThanks.onclick = () => thankYou.style.display = 'none';
