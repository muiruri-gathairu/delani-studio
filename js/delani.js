$(function(){

    $("#col-md-4-1").click(function(){
        $(".hidden1").slideToggle(1600) 
        $(".img1").slideToggle(1600)       
    });

    $("#col-md-4-2").click(function(){
        $(".hidden2").slideToggle(1600)
        $(".img2").slideToggle(1600)
    });
    
    $("#col-md-4-3").click(function(){
        $(".hidden3").slideToggle(1600)
        $(".img3").slideToggle(1600)
    });

    $(".work4-image").hover(function(){
        $("#work4-overlay").toggle()
        $("#work4-img").toggle()
    });

    $(".work3-image").hover(function(){
        $("#work3-overlay").toggle()
        $("#work3-img").toggle()
    });

});