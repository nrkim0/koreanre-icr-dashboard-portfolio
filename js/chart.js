/* ===============================
   1. 꺾은선 그래프
================================ */
const lineCtx = document.getElementById('chart1').getContext('2d');

const lineChart = new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [1.3, 2.3, 1.8, 2.8, 2.6, 3.1, 3.5],
        borderColor: '#14B8A6',
        backgroundColor: 'transparent',
        tension: 0.4,
        borderWidth: 4,
        pointRadius: 0
      },
      {
        data: [1.0, 1.9, 1.4, 2.4, 2.2, 2.7, 3.2],
        borderColor: '#FDC700',
        backgroundColor: 'transparent',
        tension: 0.4,
        borderWidth: 4,
        pointRadius: 0
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#14B8A6',
        titleColor: '#fff',
        bodyColor: '#fff',
        displayColors: false,
        padding: 10
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#9CA3AF' }
      },
      y: {
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
          color: '#9CA3AF'
        },
        grid: {
          borderDash: [4, 4],
          color: '#E5E7EB'
        }
      }
    }
  }
});


/* ===============================
   2. 막대 그래프
================================ */
const barCtx = document.getElementById('chart2').getContext('2d');

const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [3, 5, 4, 6, 5, 7, 8],
        backgroundColor: '#14B8A6',
        borderRadius: 6,
        barThickness: 18
      },
      {
        data: [2, 4, 3, 5, 4, 6, 7],
        backgroundColor: '#FDC700',
        borderRadius: 6,
        barThickness: 18
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 800,
      easing: 'easeOutQuart'
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#111827',
        titleColor: '#fff',
        bodyColor: '#fff',
        displayColors: false,
        padding: 10
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#9CA3AF' }
      },
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          color: '#9CA3AF'
        },
        grid: {
          borderDash: [4, 4],
          color: '#E5E7EB'
        }
      }
    }
  }
});