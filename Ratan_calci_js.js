/*array = [1,"+",2];
if(array[1] === "+")
{
$(".check").text(array[0] + array[2]);
}
else
{
    $(".check").text("NA"); 
}*/
click1 = [];
$(".zero").on("click",function(){
    //click3.push("blue");
    //sound3.play();
    click1.push(0);
    $(".Input").text(click1.join(""));
    $(".zero").animate({
        opacity: 0.5
    },100).animate({
        opacity: 2
    },1000);
    });


$(".one").on("click",function(){
        //click3.push("blue");
        //sound3.play();
        click1.push(1);
        $(".Input").text(click1.join(""));
        $(".one").animate({
            opacity: 0.5
        },100).animate({
            opacity: 2
        },1000);
    });

$(".two").on("click",function(){
            //click3.push("blue");
            //sound3.play();
            click1.push(2);
            $(".Input").text(click1.join(""));
            $(".two").animate({
                opacity: 0.5
            },100).animate({
                opacity: 2
            },1000);
    });

$(".three").on("click",function(){
        //click3.push("blue");
        //sound3.play();
        click1.push(3);
        $(".Input").text(click1.join(""));
        $(".three").animate({
            opacity: 0.5
        },100).animate({
            opacity: 2
        },1000);
        });

$(".four").on("click",function(){
            //click3.push("blue");
            //sound3.play();
            click1.push(4);
            $(".Input").text(click1.join(""));
        $(".four").animate({
                opacity: 0.5
            },100).animate({
                opacity: 2
            },1000);
            });

$(".five").on("click",function(){
                //click3.push("blue");
                //sound3.play();
                click1.push(5);
                $(".Input").text(click1.join(""));
        $(".five").animate({
                    opacity: 0.5
                },100).animate({
                    opacity: 2
                },1000);
        });

$(".six").on("click",function(){
                //click3.push("blue");
                //sound3.play();
                click1.push(6);
        $(".Input").text(click1.join(""));
        $(".six").animate({
                    opacity: 0.5
                },100).animate({
                    opacity: 2
                },1000);
        });

$(".seven").on("click",function(){
            //click3.push("blue");
            //sound3.play();
            click1.push(7);
        $(".Input").text(click1.join(""));
    $(".seven").animate({
                opacity: 0.5
            },100).animate({
                opacity: 2
            },1000);
    });

$(".eight").on("click",function(){
        //click3.push("blue");
        //sound3.play();
        click1.push(8);
        $(".Input").text(click1.join(""));
$(".eight").animate({
            opacity: 0.5
        },100).animate({
            opacity: 2
        },1000);
});

$(".nine").on("click",function(){
    //click3.push("blue");
    //sound3.play();
    click1.push(9);
    $(".Input").text(click1.join(""));
$(".nine").animate({
        opacity: 0.5
    },100).animate({
        opacity: 2
    },1000);
});

$(".equals").on("click",function(){
    //click3.push("blue");
    //sound3.play();
    //click1.push("=");
    $(".Input").text(eval(click1.join("")));
$(".equals").animate({
        opacity: 0.5
    },100).animate({
        opacity: 2
    },1000);
});

$(".clear").on("click",function(){
    //click3.push("blue");
    //sound3.play();
    click1 = [];
    $(".Input").text(click1.join(""));
$(".clear").animate({
        opacity: 0.5
    },100).animate({
        opacity: 2
    },1000);
});

$(".add").on("click",function(){
    //click3.push("blue");
    //sound3.play();
    click1.push("+");
    $(".Input").text(click1.join(""));
$(".add").animate({
        opacity: 0.5
    },100).animate({
        opacity: 2
    },1000);
});

$(".minus").on("click",function(){
    //click3.push("blue");
    //sound3.play();
    click1.push("-");
    $(".Input").text(click1.join(""));
$(".minus").animate({
        opacity: 0.5
    },100).animate({
        opacity: 2
    },1000);
});

$(".multiply").on("click",function(){
    //click3.push("blue");
    //sound3.play();
    click1.push("*");
    $(".Input").text(click1.join(""));
$(".multiply").animate({
        opacity: 0.5
    },100).animate({
        opacity: 2
    },1000);
});

$(".division").on("click",function(){
    //click3.push("blue");
    //sound3.play();
    click1.push("/");
    $(".Input").text(click1.join(""));
$(".division").animate({
        opacity: 0.5
    },100).animate({
        opacity: 2
    },1000);
});