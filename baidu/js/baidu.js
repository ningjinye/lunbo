$(function(){
    var num=0;
    var heights=$(window).height();
    var flag=true;
    $(".fullpage").mousedown(function(e){
        e.preventDefault();
    });
    $(".fullpage").mousemove(function(e){
        e.preventDefault();
    });
    touch.on("body","swipeup",".fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        $(".fullpage").css({marginTop:-num*heights,
            transition:"margin-top 2s ease"
        });
        flag=false;
    });
    touch.on("body","swipedown",".fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        $(".fullpage").css({marginTop:-num*heights,
            transition:"margin-top 2s ease"
        });
        flag=false;
    });

    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })


})