const alertBanner = document.getElementById("alert")

alertBanner.innerHTML = 
`
<div class="alertBanner">
<p><strong>Alert:</strong> You have unread messages. </p>
<p id="alertBanner-close">x</p>
</div>
`
const alertBannerClose = document.getElementById("alertBanner-close");

alertBannerClose.addEventListener("click", function(){
    alertBanner.style.display="none";
})

console.log(alertBannerClose)


var line = document.getElementById('traffic-chart').getContext('2d');
var lineChart = new Chart(line, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '29-26', '27-3', '4-10', '11-7', '18-24', '25-31'],
        datasets: [{
            label: '# of Votes',
            data: [575, 1250, 1000,1500, 2000, 1500, 1750, 1500, 1750, 2250, 1750, 2250 ],
            backgroundColor: [
                'rgba(226, 227, 246)',
            ],
            borderColor: [
                'rgba(115, 119, 191)',
            ],
            borderWidth: 1,
            responsive:true,
        }]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true,
                }
            }]
        },
        legend:{
            display:false,
        }

    },
});


var bar = document.getElementById("daily-chart").getContext("2d")
var barChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
            ],
            borderColor: [
                'rgba(115, 119, 191)',                
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
                'rgba(115, 119, 191)',
            ],
            borderWidth: 1,
            responsive:true,
        }]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        },
        legend:{
            display:false,
        }

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
                'rgba(116, 177, 191)',
                'rgba(129, 201, 143)',
                'rgba(115, 119, 191)',
            ],
            responsive:true,
        }]
    },options: {
        legend:{
            position:'right',
        }
    },
});