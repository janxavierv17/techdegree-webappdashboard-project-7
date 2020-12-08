var line = document.getElementById('traffic-chart').getContext('2d');
var lineChart = new Chart(line, {
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
var bar = document.getElementById("daily-chart").getContext("2d")
var barChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 255, 255,255)',
            ],
            borderWidth: 1
        }]
    },

});

var doughnut = document.getElementById("mobileUsers-chart").getContext("2d")
var barChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktops"],
        datasets: [{
            data: [10,15,75],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 255, 255,255)',
            ],
            borderWidth: 1, 
            borderAlign: 'inner'
        }]
    },
    options: {
        scales: {
        }
    }
});