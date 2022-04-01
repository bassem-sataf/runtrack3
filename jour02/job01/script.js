'use strict';
document.addEventListener('DOMContentLoaded', function loader(){
        var citation = document.getElementById('citation').innerHTML;
        var btn = document.querySelector('#button');

        btn.addEventListener('click', citatione)

    function citatione(event)
    {
        console.log(citation)
    }
    
})
    