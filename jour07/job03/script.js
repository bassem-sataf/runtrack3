'use strict';

document.addEventListener('DOMContentLoaded', function loader(){

    var type = [];
    var select = document.getElementById('pokemon-select') 
    fetch("pokemon.json").then(function(response){
        return response.json()
    })
    .then(function(response){
        for(var i = 0; i<response.length ; i++)
        {
            for(var j = 0; j<type.length; j++)
            {   
                console.log(type[j])
            }   
        }
    }) 
})
    

// var opt = document.createElement('option');
                    // opt.value = response[i].type;
                    // opt.innerHTML = response[i].type;
                    // select.appendChild(opt);