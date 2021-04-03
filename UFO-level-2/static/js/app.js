show(data);

function show(data) {
    d3.select('tbody').html('');
    
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>{
            row.append('td').text(val)
        })
    });

    d3.select('button').on('click',handleClick);
    d3.selectAll('input').on('change',handleChange);
};

var filteredData  = data;

function handleClick() {
    d3.selectAll('input').property('value','');
    filteredData = data;
    show(filteredData);
};

function handleChange() {
    var key = d3.select(this).property('id');
    var val = d3.select(this).property('value');

    filteredData = filteredData.filter(obj=>obj[key] == val);
    show(filteredData);
}

