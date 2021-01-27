// from data.js
var tableData = data;

// YOUR CODE HERE!
showData(data);
d3.select('button').on('click', filter);

function showData(data) {
    d3.select('tbody').html('');

    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

function filter() {
    var date = d3.select('input').property('value');
    var filteredData = data.filter(obj => obj.datetime == date);

    showData(filteredData);
};