/**
 * Created by shamrock on 2016/9/19.
 */
$(function(){

    var $index = 0;

    $("#carousel ul:eq(1) li:eq(0)").addClass("activeCarousel");

    var interval = setInterval(carousel,2000);

    $("nav li:lt(9)").click(function(){
        console.log("success");
        $(this).addClass("activeNav").siblings().removeClass("activeNav");
    });

    $("#carousel ul:eq(1) li").click(function(){
        clearInterval(interval);
        var $i = $(this).index();
        $(this).addClass("activeCarousel").siblings().removeClass("activeCarousel");
        $("#carousel ul:eq(0)").animate({marginLeft:-($i)*491},function(){
            $index = $i;
            interval = setInterval(carousel,2000);
        });
    });

    $("#list .childNav li").click(function(){
        $(this).addClass("navText").find("i").addClass("navImg");
        $(this).siblings().removeClass("navText").find("i").removeClass("navImg");
    });
    $(".listStyle a").click(function(){
        $(".list").load("./childPageDetail.html");
    });

    function carousel(){
        if($index >= 5){
            $index = 0;
        }
        $("#carousel ul:eq(0)").animate({marginLeft:-($index)*491},function(){
            $("#carousel ul:eq(1) li:eq("+$index+")").addClass("activeCarousel").siblings().removeClass("activeCarousel");
            $index += 1;
        });
    }
});