'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
    
    var btn = document.getElementById('update');
    var table = document.querySelector('tbody');

    fetch("users.php").then(function(response){
        return response.json()
    })
    .then(function(response){
        for(let i= 0; i<response.length; i++)
        {
            var newRow = table.insertRow(i-1);
            var newCell1 = newRow.insertCell(0);
            var newCell2 = newRow.insertCell(1);
            var newCell3 = newRow.insertCell(2);


            newCell1.innerHTML = response[i][1];
            newCell2.innerHTML = response[i][2];
            newCell3.innerHTML = response[i][3];
        } 
    })

    btn.addEventListener('click', function(){
        fetch("users.php").then(function(response){
            return response.json()
        })
        .then(function(response){
            table.innerHTML = "";   
            for(let i= 0; i<response.length; i++)
            {
                var newRow = table.insertRow(i-1);  
                var newCell1 = newRow.insertCell(0);
                var newCell2 = newRow.insertCell(1);
                var newCell3 = newRow.insertCell(2);
    
    
                newCell1.innerHTML = response[i][1];
                newCell2.innerHTML = response[i][2];
                newCell3.innerHTML = response[i][3];
            } 
        })
    })
})
    

// var opt = document.createElement('option');
//     opt.value = response[i].type;
//     opt.innerHTML = response[i].type;
//     select.appendChild(opt);