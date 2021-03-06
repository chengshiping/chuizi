let ord = 0
let myTimer = null
let $img = $("#img-box>img")
let $li = $("#img-box>ul>li")
let hrefs = []
function autoPlay(){
    myTimer = setInterval(function(){
        goImg(ord+1)
    },2000)
}
function goImg(transOrd){
    if(transOrd==ord){
        return
    }

    let outOrd = ord
    ord = transOrd

    if(ord>$img.length-1){
        ord = 0
    }else if(ord<0){
        ord = $img.length-1
    }

    $img.eq(outOrd).animate({"opacity":0},1000)
    $img.eq(ord).animate({"opacity":1},1000)
    $li.eq(outOrd).css({"background-color":"black","opacity":"0.2"})
    $li.eq(ord).css({"background":"white","opacity":"1"})
}

function stopPlay(){
    window.clearInterval(myTimer)
    myTimer = null
}

$(function(){
    autoPlay()
    $("#img-box>ul>li").click(function(){
        stopPlay()
        goImg($(this).index())
    })

    $("#img-box").mouseover(function(){
        stopPlay()
    })
    
    $("#img-box").mouseout(function(){
        autoPlay()
    })

    let $span = $("#img-box>span")
    $span.eq(0).click(function(){
        stopPlay()
        goImg(ord-1)
    })
    $span.eq(1).click(function(){
        stopPlay()
        goImg(ord+1)
    })

})
