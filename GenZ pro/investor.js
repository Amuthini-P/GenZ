// Funding trend over years - FIXED with interactivity + purple theme
const ctx1 = document.getElementById('fundingChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Global Startup Funding ($B)',
      data: [120, 150, 200, 250, 310, 340],
      borderColor: '#7b2cbf', // Themed purple
      backgroundColor: 'rgba(123, 44, 191, 0.1)',
      borderWidth: 3,
      tension: 0.4,
      pointBackgroundColor: '#4cc9f0',
      pointRadius: 5,
      pointHoverRadius: 7,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
          font: { size: 14 }
        }
      },
      tooltip: {
        backgroundColor: '#240046',
        titleColor: '#ffffff',
        bodyColor: '#e0aaff',
        borderColor: '#a0c4ff',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: { color: '#dee2ff' },
        grid: { display: false }
      },
      y: {
        ticks: { color: '#dee2ff' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuint'
    }
  }
});

// Sector-based investor interest - with hover/animation + themed colors
const ctx2 = document.getElementById('sectorChart').getContext('2d');
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Tech', 'Green Energy', 'HealthTech', 'FinTech', 'EdTech'],
    datasets: [{
      label: 'Sector Interest (%)',
      data: [35, 20, 15, 18, 12],
      backgroundColor: [
        '#5f0f40',
        '#9a031e',
        '#4cc9f0',
        '#7b2cbf',
        '#3c096c'
      ],
      borderColor: '#ffffff',
      borderWidth: 2,
      hoverOffset: 10
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#ffffff', font: { size: 13 } }
      },
      tooltip: {
        backgroundColor: '#240046',
        titleColor: '#ffffff',
        bodyColor: '#e0aaff',
        borderColor: '#a0c4ff',
        borderWidth: 1
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1200,
      easing: 'easeOutBack'
    }
  }
});
