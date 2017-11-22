// $(".ui-show").hide();
$(init)

function init(){
    $(".ui-show").hide();
    $(".ui-box-image").click(function(){
        $(".ui-show-image")[0].src=$(this).attr("src");
        $(".ui-show").fadeIn(800);
    });
    $(".ui-show").click(function(){
        $(this).fadeOut(800,function(){
            $(".ui-show").hide();
        });
    });


    $(".ui-slide").find(".ui-slide-button").click(function(){
        $(this).css("background-color","#808080");
        $(".ui-slide").find(".ui-slide-button").not(this).css("background-color","#FFFFFF");
        $(".ui-slide-number").html($(this).val());
    }); 

    var num=3;
    $(".ui-delete-button").click(function(){
        num++;
        var tempTr = $("#delete").clone(true); 
        $(".ui-delete-item").eq(-1).after(tempTr); 

        for (var i=0;i<num;i++) {
            console.log(num);
            $(".ui-delete-item-list").eq(i).text(i+1);
        }
     });
    
    $(".ui-delete-item-operate").click(function(){ 
        num--;
        var n=$(".ui-delete-item-operate").index(this);
        $(".ui-delete-item").eq(n).remove();

        for (var i=0;i<num;i++) {
            console.log(num);
            $(".ui-delete-item-list").eq(i).text(i+1);
        }
    });
}


