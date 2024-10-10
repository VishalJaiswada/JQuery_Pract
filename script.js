 // This is a JavaScript code that will be executed when the HTML document is fully loaded.

$(document).ready(function(){
    console.log("First code is ready...");
    //jquery...
    //Jquery Effects
    $("#btn1").click(function(){
        //btn-click
         
        // $("#container").hide();
        $("#container").fadeOut(2000,function(){
            alert("Hidden!");
        });
    });

    $("#btn2").click(function(){
        //btn-click
         
        //$("#container").show();
        $("#container").fadeIn();
    });

    $("#btn3").click(function(){
        // btn-click
        $("#container").fadeToggle();
    });

    $("#btn4").click(function(){
        //btn-click
        $("#container").fadeTo(250,0.5,function(){
            alert("Faded!");
        });
    });

    //________________________________________________Sliding in Jquery
    
   // slideDown , slideUp , slideToggle
    $("#btn5").click(function(){
        //sliding btn
        $("#container").slideDown();
    });

    $("#btn6").click(function(){
        //sliding btn
        $("#container").slideUp(2000,function(){
            alert("Slid up!");
        });
    });
     
    $("#btn5").click(function(){
        //sliding btn
        $("#container").slideDown(100);
    });

    $("#btn7").click(function(){
        //sliding Toggle button
        $("#container").slideToggle();
    });
   

    //  ___________________________________________________
    //animate

    // animate({params},speed,callback)
    $("#btn8").click(function(){
        //animate btn
        $("#container").animate({
            opacity: 0.5,
            left: "250px",
            borderRadius:"20px",
            height: "150px",
            width: "200px"
        }, 2000, function(){
             $("#container").animate({left:"0",height:"100px",width:"100px",opacity:1,borderRadius:"0px"});
        });

    });

    // input --> DOM

    $("#btn9").click(function(){
        //val() can get values
        // let v = $("#f").val();
        // console.log("value is :" + v);

        // val() can fetch values
        // $("#f").val("This is done using val function");
        
        //text
        // var c =$("#content").text();
        // console.log(c);

        //Dynamically text
       // $("#content").text("<b>This is new content</b>");

       //html()

       //$("#content").html("<b> This is the html dynamic Content <b>");
       
       //image
    //   var c= $(".image").attr('src');
    //   console.log(c);

    $(".image").attr("src","https://im.indiatimes.in/content/2024/Oct/Ratan-tata_6706cff8c9d57.jpeg?w=1200&h=900&cc=1&webp=1&q=75");


    });
     
    //HW-->
    //append()
    //prepend()
    //remove()
    //addClass()
    //removeClass()
    //toggleClass()
    //CSS()
    
});