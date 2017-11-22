$(document).ready(function(){
    $(".image-list-single").click(function(){
        var p_text=$(this).children("p").text();
        $("img").css("border","solid 1px #b1b1b1");
        $(this).children("img").css("border","solid 7px  #65d0a2");
        $(".character").children("h1").text($(this).children("img").attr('alt'));
        $(".character").children("p").text(p_text);
    });
    $(".page-login").hide();
    $("#choose-signup").click(function(){
        $(".choose-background").css("background-color","white");
        $(this).css("background-color","#d9fbea");
        $(".page-sign").show();
        $(".page-login").hide();
        $(".btn-facebook").children("p").text("Sign up with Facebook");
    });
     $("#choose-login").click(function(){
        $(".choose-background").css("background-color","white");
        $(this).css("background-color","#d9fbea");
        $(".page-login").show();
        $(".page-sign").hide();
        $(".btn-facebook").children("p").text("Log in with Facebook");
    });
});

var JSONimages=[
    {"img":"../image/Rose.png"},
    {"img":"../image/Anne.png"},
    {"img":"../image/Carol.png"},
    {"img":"../image/Josie.png"},
    {"img":"../image/Lara.png"},
    {"img":"../image/Sarah.png"},
    {"img":"../image/Molly.png"},
    {"img":"../image/Kylie.png"},
];
for(var i=0,j=8;i<8;++i,++j)
{
    document.getElementById("jimg["+i+"]").src=JSONimages[i].img;
    document.getElementById("jimg["+j+"]").src=JSONimages[i].img;
}
for(var i=0,k=16;i<4;++i,++k)
{
    document.getElementById("jimg["+k+"]").src=JSONimages[i+4].img;
}