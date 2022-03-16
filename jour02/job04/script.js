'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
    document.addEventListener('keydown', addone );
    var textArea = document.getElementById('keylogger');
    function addone(event)
    {
        console.log(event.key);
        textArea.value += event.key;  
    }


})
    