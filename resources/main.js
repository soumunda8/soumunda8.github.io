$(function(){
    let headerHeight = Math.ceil($(".header").height());
    let screenHeight = $(window).height() - headerHeight;
    $("#about").css("height", screenHeight);
    $("#skill").css("height", screenHeight);
    $("#project").css("min-height", screenHeight);

    $("h1").click(function(){ 
        $("html, body").stop().animate({scrollTop:0}, 1000);
    });
    $("p").click(function(){
        let divHeight = $(this).data("area");
        $("html, body").stop().animate({scrollTop:$('#' + divHeight).offset().top - headerHeight}, 1000);
        $(".menu_area").removeClass("active");
    });
});

function showMenu() {
    let check = $(".menu_area").hasClass("active");
    if(check) {
        $(".menu_area").removeClass("active");
    } else {
        $(".menu_area").addClass("active");
    }
}

function hideMenu() {
    $(".menu_area").removeClass("active");
}