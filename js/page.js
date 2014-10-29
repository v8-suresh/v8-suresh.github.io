/**
 * Created by suren on 29/10/14.
 */

$(document).ready(function(){
    $("#carousel").carousel({
        interval: 6000 //changes the speed
    });
    $("#prev").click(function(){
        $("#carousel").carousel('prev');
    });
//    $("#pause").click(function(){
//        $("#carousel").carousel('pause');
//    });
//    $("#resume").click(function(){
//        $("#carousel").carousel('cycle');
//    });
    $("#next").click(function(){
        $("#carousel").carousel('next');
    });
});
