// 'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
    
    var btn = document.getElementById("button")

    // let fname = document.getElementById('fname')
    // let name = document.getElementById('name')
    let email = document.getElementById('email')
    // let password = document.getElementById('password')
    // let confPassword = document.getElementById('confPassword')
    var form = document.getElementById('regForm')
    
    btn.addEventListener('click', function(event){
        
            event.preventDefault();
    
            fetch("./index.php",{
                method: "post",
                body: new FormData(form)
            }).then(function(response){
                return response.text()
            }).then(function(response){
                console.log(response)
            }).catch(function(error){
                console.error(error)
            })
    })
    
  

      
    var mess = document.getElementById('email_mess')
    email.addEventListener('focusout', function(event){
        var formData = new FormData(form);
        event.preventDefault();
    
            fetch("./index.php",{
                method: "post",
                body: new FormData(form)
            }).then(function(response){
                return response.text()
            }).then(function(response){
                console.log(response);
            }).catch(function(error){
                console.error(error)
            })

        

    });
    

})
    