const doctorCards = document.getElementById('doctorCards');
const addForm = document.getElementById('addDoctorForm');

// Initial doctor data (replace with real data or fetch from backend)
let doctors = [
  { name: "Dr. A. Sharma", specialty: "Cardiologist", license: "IN12345", img: "../images/doctors/doc1.jpg" },
  { name: "Dr. B. Mehta", specialty: "Dermatologist", license: "IN67890", img: "../images/doctors/doc2.jpg" },
  { name: "Dr. C. Reddy", specialty: "Neurologist", license: "IN22222", img: "../images/doctors/doc3.jpg" },
  { name: "Dr. D. Rao", specialty: "Orthopedist", license: "IN33333", img: "../images/doctors/doc4.jpg" },
  { name: "Dr. E. Singh", specialty: "ENT", license: "IN44444", img: "../images/doctors/doc5.jpg" },
  { name: "Dr. F. Khan", specialty: "General Physician", license: "IN55555", img: "../images/doctors/doc6.jpg" },
  { name: "Dr. G. Nair", specialty: "Pediatrician", license: "IN66666", img: "../images/doctors/doc7.jpg" },
  { name: "Dr. H. Roy", specialty: "Psychiatrist", license: "IN77777", img: "../images/doctors/doc8.jpg" },
  { name: "Dr. I. Patel", specialty: "Gastroenterologist", license: "IN88888", img: "../images/doctors/doc9.jpg" },
  { name: "Dr. J. Verma", specialty: "Diabetologist", license: "IN99999", img: "../images/doctors/doc10.jpg" }
];

// Render cards
function renderDoctors() {
  doctorCards.innerHTML = "";
  doctors.forEach((doc, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${doc.img}" alt="${doc.name}">
      <h4>${doc.name}</h4>
      <p>${doc.specialty}</p>
      <small>License: ${doc.license}</small>
      <button class="remove-btn" data-index="${idx}">Remove</button>
    `;
    doctorCards.appendChild(card);
  });

  // Remove doctor handlers
  document.querySelectorAll('.remove-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      const idx = e.target.dataset.index;
      doctors.splice(idx, 1);
      renderDoctors();
    })
  );
}

// Add doctor handler
addForm.addEventListener('submit', e => {
  e.preventDefault();
  doctors.push({
    name: document.getElementById('docName').value,
    specialty: document.getElementById('docSpecialty').value,
    license: document.getElementById('docLicense').value,
    img: document.getElementById('docImg').value
  });
  addForm.reset();
  renderDoctors();
});

renderDoctors();
