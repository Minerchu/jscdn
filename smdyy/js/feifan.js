jQuery(document).ready(function ($){
    $("img").lazyload();
    var ddd=parseInt($(".case").attr('id'));
    if(ddd==1){
        $(".cjqjs li:gt(18),.jqjs li:gt(19),.typejs li:lt(5),.typejs li:gt(20)").remove();
        $(".menujs li:eq(0)").children().addClass("on");
        $(".menu a:eq(1)").addClass("on");
        $(".menu a:eq(0)").removeClass("on");
    } else if(ddd==2){
        $(".cjqjs li:lt(19),.cjqjs li:gt(33),.jqjs li:lt(20):gt(0),.jqjs li:gt(34)").remove();
        $(".menujs li:eq(1)").children().addClass("on");
        $(".menu a:eq(2)").addClass("on");
        $(".menu a:eq(0)").removeClass("on");
    } else if(ddd==3){
        $(".cjqjs li:lt(34),.cjqjs li:gt(48),.jqjs li:lt(35):gt(0),.jqjs li:gt(49)").remove();
        $(".menujs li:eq(2)").children().addClass("on");
        $(".menu a:eq(3)").addClass("on");
        $(".menu a:eq(0)").removeClass("on");
    } else if(ddd==4){
        $(".cjqjs li:lt(49),.jqjs li:lt(50):gt(0)").remove();
        $(".menujs li:eq(3)").children().addClass("on");
        $(".menu a:eq(4)").addClass("on");
        $(".menu a:eq(0)").removeClass("on");
    };
    $(".aaa:empty,.bbb:contains(至0集),.ccc:contains(共集)").remove();
    $(".ae2txt:empty").parent().remove();
    $(".ctxt p i:empty,.ilistr .actor i:empty,.ilistr .des:empty,.desd:empty,.txt em:empty").html("不详");
    $(".navck").click(function(){
        $(".menu").toggle();
        $(".search").hide();
        });
    $(".searchck").click(function(){
        $(".search").toggle();
        $(".menu").hide();
        });
    $(".shr").click(function(){
        $(".search").toggle();
        $(".menu").hide();
        });
    if($(".playname li").length < 1){
            $(".playname").html("<p>暂无在线资源</p>");
        }else if($('.playname li').length > 1){
            $(".playdiv1").addClass("playdiv2");
    };
    if($(".downlist > div").length < 1){
            $(".downlist").html("<p>暂无下载资源</p>");
    };
    if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
        $(".playdiv2").click(function(){
        $(this).children(".playname").toggleClass("hover");
        });
    } else {
        $(".playdiv2").hover(function(){
        $(this).children(".playname").toggleClass("hover");
        });
    };
    var eee = $(".download ul a").attr("href");
    $(".downlist a").append(eee);
    $(window).scroll(function() {   
        if($(window).scrollTop() >= 300){
            $('.gotop').fadeIn(400); 
        }else{    
            $('.gotop').fadeOut(400);    
        }  
    });
    $('.gotop').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);
    }); 
});
function setTab(name,name2,cursel,n){
    for(i=1;i<=n;i++){
    var menu=document.getElementById(name+i);
    var con=document.getElementById(name2+i);
    menu.className=i==cursel?"on":"";
    con.style.display=i==cursel?"block":"none";
}}; 