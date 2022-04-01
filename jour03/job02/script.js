$(document).ready(function(){
    var img = $(".img")
    var hasard = $("#hasard")
    var allimg = ['./arc1.png', './arc2.png', './arc3.png', './arc4.png', './arc5.png', './arc6.png',]

    console.log(img);
    var clicked = [];
    

    $("#button").click(function (){
        
        $("#hasard").empty();
        $("#rangees").empty();
        var mel = allimg.sort(function() { return 0.5 - Math.random() });

        for(var i=0; i<allimg.length; i++)
        {  
        $("#hasard").append("<img src="+mel[i]+" class= 'img' id='img"+i+"'></img>");
        }

        $(".img").click(function (){

            imgid = $(this).attr("id"); 
            currentimg = $('#'+imgid)
            $('#'+imgid).css("pointer-events", "none");
            clicked.push(currentimg)
            console.log(currentimg)
            $(currentimg).appendTo("#rangees");
            
            if(clicked.length == 6)
            {
                $("#message").html('vous avez fini');
            }
        })

    })  

    


})
    