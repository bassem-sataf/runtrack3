'use strict';

document.addEventListener('DOMContentLoaded', function loader(){
    
    var progress = document.getElementById('progress');
    document.addEventListener('scroll' , (event)=>{
        var footer = document.querySelector("footer");
        var scroll = document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var  scrolledScreen =  (scroll/height)* 100;
        progress.value = scrolledScreen;
        var l = window.scrollY/10;
        footer.style.background = "linear-gradient(90deg, rgba(174,238,"+l+",1) 0%, rgba(148,187,"+l+",1) 100%)";
        
    });
    


})
    