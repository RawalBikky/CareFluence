const ctx = document.getElementById('appointmentsChart').getContext('2d');
const appointmentsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Dr. Anjali', 'Dr. Rohit', 'Dr. Sita', 'Dr. Raj', 'Dr. Maya'],
    datasets: [{
      label: 'Appointments',
      data: [12, 19, 8, 15, 10],
      backgroundColor: 'rgba(108, 99, 255, 0.6)',
      borderColor: 'rgba(108, 99, 255, 1)',
      borderWidth: 1
    }]
  },
  options: { scales: { y: { beginAtZero: true } } }
});
