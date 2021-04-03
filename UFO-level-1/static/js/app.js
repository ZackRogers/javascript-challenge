show(data);

function show(data) {
    d3.select('tbody').html('');

    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>{
            row.append('td').text(val)
        })
    });
};

d3.select('button').on('click',handleClick);

function handleClick() {
    var val = d3.select('input').property('value');

    var filteredData = data.filter(obj=>obj.datetime == val);
    show(filteredData);
};

