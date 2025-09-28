const ctx = document.getElementById('bookingChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Bookings',
      data: [12,19,3,5,2,3,7],
      backgroundColor: '#0d6efd'
    }]
  },
  options: { responsive:true, scales:{ y:{ beginAtZero:true } } }
});
