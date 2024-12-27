google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Impact', 'Percentage'],
        ['Increased Productivity', 25],
        ['Creation of New Industries', 15],
        ['Improved Infrastructure', 30],
        ['Increased Consumer Spending', 10],
    ]);

    var options = {
        pieHole: 0.4,
        pieSliceText: 'label',
        slices: {
            0: { color: 'red' },
            1: { color: 'yellow' },
            2: { color: 'blue' },
            3: { color: 'purple' },
            4: { color: 'lightgreen' }
        },
        legend: {
            position: 'right',
            textStyle: { fontSize: 14 }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}