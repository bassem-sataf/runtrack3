'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
    document.addEventListener('keydown', addone);
    var t = [];
    var cont = document.getElementById('container')

    function addone(event)
    {
        t += event.key;
        if (t == ("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"))
        {
            cont.style.display = "block";
            console.log('test')
        } 
    }


})

// document.addEventListener('DOMContentLoaded', function loader(){
    
    
//     document.addEventListener('keydown' , (event)=>{

//         console.log(event.key)
//         var text = '';
//         text += event.key
//         if (text == ("ArrowUpArrowUpArrowDownArrowDown"))
//         {
//            console.log('test')
//         } 
//     });

// })
    



// hapened