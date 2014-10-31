/**
 * Created by suren on 29/10/14.
 */

$(document).ready(function(){
    $("#carousel").carousel({
        interval: 3000 //changes the speed
    });
    $("#prev").click(function(){
        $("#carousel").carousel('prev');
    });
    $("#pause").click(function(){
        $("#carousel").carousel('pause');
    });
    $("#cycle").click(function(){
        $("#carousel").carousel('cycle');
    });
    $("#next").click(function(){
        $("#carousel").carousel('next');
    });
});
