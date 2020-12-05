var ctx = document.getElementById('traffic-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '29-26', '27-3', '4-10', '11-7', '18-24', '25-31'],
        datasets: [{
            label: '# of Votes',
            data: [575, 1250, 1000,1500, 2000, 1500, 1750, 1500, 1750, 2250, 1750, 2250 ],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 255, 255,255)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});