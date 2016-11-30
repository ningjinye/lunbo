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
        $(".btn").css({background:"none"}).eq(num).css({background:"#333"});
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
        $(".btn").css({background:"none"}).eq(num).css({background:"#333"});

        flag=false;
    });

    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        $(".ship").css({
            transform:"translate(0,0)"
        });
        $("section").each(function(index,obj){
            if(index==0){
                return;
            }
            if(index==num){
                $(".aa").eq(index).css({
                    opacity:1,
                    transform:"translate(0,0)"
                });
                $(".bb").eq(index).css({
                    opacity:1,
                    transform:"translate(0,0)"
                });
            }else{
                $(".aa").eq(index).css({
                    opacity:0,
                    transform:"translate(-50px,0)"
                });
                $(".bb").eq(index).css({
                    opacity:0,
                    transform:"translate(50px,0)"
                });
            }
        })
    });


// 菜单
    var flag2=true;
$(".min-right").click(function(){
    if(flag2){
        $(".top-line").css({transform:"translate(0,4px) rotate(135deg)"});
        $(".bottom-line").css({transform:"translate(0,-4px) rotate(-135deg)"});
        $(".cd a").each(function(index,obj){
            $(obj).css({opacity:0,
                animation:"cd 1.5s linear "+index*0.2+"s forwards"
            })
        });
        flag2=false;
        $(".cd").css({display:"block"});
    }else{
        $(".top-line").css({transform:"translate(0,0) rotate(0deg)"});
        $(".bottom-line").css({transform:"translate(0,0) rotate(0deg)"});
        $(".cd a").each(function(index,obj){
            $(obj).css({opacity:1,
                animation:"cd1 1.5s linear "+(1.2-index)*0.2+"s forwards"
            });
        });
        flag2=true;
        setTimeout(function(){
            $(".cd").css({display:"none"});
        },1700);
    }

});
    $(window).resize(function(){
        heights=$(window).height();
        widths=$(window).width();
        $(".fullpage").css({marginTop:-num*heights});
        if(widths>1000){
            $(".top-line,.bottom-line").css({
                transform:"translate(0,0) rotate(0deg)"
            });
            $(".cd a").css({
                animation:"none"
            });
            flag2=true;
        }
    })

});