'use strict';
document.addEventListener('DOMContentLoaded', function loader(){
    
    var btn = document.getElementById('button');
    var expression = document.getElementById('expression');
    btn.addEventListener('click', function(){
        fetch('expression.txt').then(function(response){
            return response.text()                                                                                         
        })
        .then(function(response){
            expression.innerHTML = response;                                                                          
        })
        .catch(function(error){
            console.log(error.message)
        })
    })
    
    
})
    