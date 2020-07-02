var user = getCookie('user')
var spzj = parseInt(0)
var spzs = parseInt(0)
if(!user){
    removeCookie('goods')
}else{
    $('.kbym .dl').css('display','none')
    var goods = JSON.parse(getCookie('goods'))
    if(goods){
        $('.goodsbox').css('display','block')
        $('.kbym').css('display','none')
        $.ajax({
            url:'../json/goods.json',
            type:'get',
            dataType:'json',
            success:function(json){
                var goodsDom1 = ""
                goodsDom1 +=`
                <div class="goodsxx">
                        <span class="_l">商品信息</span>
                        <span class="_r">操作</span>
                        <span class="_r">小计</span>
                        <span class="_r">数量</span>
                        <span class="_r">单价</span> 
                    </div>
                    `
                    $('.goodsbox').before(goodsDom1)
                $.each(goods,function(index,item){
                    $.each(json,function(i,obj){
                        if(obj.code == item.code){
                            var goodsDom = ""
                            goodsDom +=`
                                    <div class="goods">
                                    <div class="check">
                                        <input type="checkbox">
                                    </div>
                                    <a href="./goodsxq.html" class="img">
                                        <img src="${obj.img}" alt="">
                                    </a>
                                    <div class="xq">
                                        <a href="#">${obj.title}</a>
                                        <p>${obj.data}</p>
                                    </div>
                                    <div class="cz">
                                        <span code="${obj.code}">×</span>
                                    </div>
                                    <div class="xj">
                                        <span>￥</span>${(obj.price*item.num).toFixed(2)}
                                    </div>
                                    <div class="sl">
                                        <span class="jian">-</span>
                                        <span class="show">${item.num}</span>
                                        <span class="jia">+</span>
                                    </div>
                                    <div class="dj">
                                        <span>￥</span>${obj.price}
                                    </div>
                                </div>
                            `
                            $('.goodsbox').append(goodsDom)
                        }
                        
                        
                    })
                })
                var goodsDom2 = ""
                goodsDom2 +=`
                <div class="plcz">
                <div class="l">
                    <div class="checkall">
                        <input type="checkbox">
                        <span>全选</span>
                    </div>
                    <button type="button">删除所有选中的商品</button>
                </div>
                <div class="r">
                    <div class="sl">
                        已选择<span>0</span>件商品
                    </div>
                    <div class="je">
                        应付总额：<span><em>￥</em>0</span>
                    </div>
                    <a href="./zf.html">现在结算</a>
                </div>
            </div>
                `
                $('.goodsbox').after(goodsDom2)
            }
        })
    }else{
        $('.kbym .dl').css('display','none')
    }
}
$.ajax({
    url:'../json/goods.json',
    type:'get',
    dataType:'json',
    success:function(json){
       for(var i=0;i<12;i++){
           var goods =  '<div class="sp">'+
           '<a class="img" href="#">'+
               '<img src="'+json[i].img+'" alt="">'+
           '</a>'+
           '<h4>'+json[i].title+'</h4>'+
           '<h6>'+json[i].data+'</h6>'+
           '<div class="jg">'+
               '<span class="xj"><i>￥</i>'+json[i].price+'</span>'+
               '<span class="yj"><i>￥</i>'+json[i].price2+'</span>'+
           '</div>'+
           '<div class="jrgwc">'+
               '<a href="#">查看详情</a>'+
               '<span code="'+json[i].code +'">加入购物车</span>'+
           '</div>'+
       '</div>'
       $('.goodslist .list').append(goods)
       }
    }
})

$('.goodslist .list').on('click','.sp .jrgwc span',function(){
    var hasgoods
    if(getCookie('goods')){
        hasgoods = true
    }else{
        hasgoods = false
    }
    if(user){
       var goods = getCookie('goods')
       if(goods){
           var goodsArr = JSON.parse(goods)
       }else{
           var goodsArr = []
       }
       var code = $(this).attr('code')
       var hasCode = false
       $.each(goodsArr,function(index,item){
           if(item.code === code){
               item.num++
               hasCode = true
           }
       })
       if(!hasCode){
           goodsArr.push({"code":code,"num":1})
       }
       var strArr = JSON.stringify(goodsArr)
       setCookie({
           key:'goods',
           val:strArr,
           day:1
       })
       var goods = JSON.parse(getCookie('goods'))
       if(!hasgoods){
        $('.goodsbox').css('display','block')
        $('.kbym').css('display','none')
        $.ajax({
            url:'../json/goods.json',
            type:'get',
            dataType:'json',
            success:function(json){
                var goodsDom1 = ""
                goodsDom1 +=`
                <div class="goodsxx">
                        <span class="_l">商品信息</span>
                        <span class="_r">操作</span>
                        <span class="_r">小计</span>
                        <span class="_r">数量</span>
                        <span class="_r">单价</span> 
                    </div>
                    `
                    $('.goodsbox').before(goodsDom1)
                $.each(goods,function(index,item){
                    $.each(json,function(i,obj){
                        if(obj.code == item.code){
                            var goodsDom = ""
                            goodsDom +=`
                                    <div class="goods">
                                    <div class="check">
                                        <input type="checkbox">
                                    </div>
                                    <a href="#" class="img">
                                        <img src="${obj.img}" alt="">
                                    </a>
                                    <div class="xq">
                                        <a href="#">${obj.title}</a>
                                        <p>${obj.data}</p>
                                    </div>
                                    <div class="cz">
                                    <span code="${obj.code}">×</span>
                                    </div>
                                    <div class="xj">
                                        <span>￥</span>${(obj.price*item.num).toFixed(2)}
                                    </div>
                                    <div class="sl">
                                        <span class="jian">-</span>
                                        <span class="show">${item.num}</span>
                                        <span class="jia">+</span>
                                    </div>
                                    <div class="dj">
                                        <span>￥</span>${obj.price}
                                    </div>
                                </div>
                            `
                            $('.goodsbox').append(goodsDom)
                        }
                        
                        
                    })
                })
                var goodsDom2 = ""
                goodsDom2 +=`
                <div class="plcz">
                <div class="l">
                    <div class="checkall">
                        <input type="checkbox">
                        <span>全选</span>
                    </div>
                    <button type="button">删除所有选中的商品</button>
                </div>
                <div class="r">
                    <div class="sl">
                        已选择<span>5</span>件商品
                    </div>
                    <div class="je">
                        应付总额：<span><em>￥</em>5</span>
                    </div>
                    <a href="./zf.html">现在结算</a>
                </div>
            </div>
                `
                $('.goodsbox').after(goodsDom2)
            }
        })
       }else{
        $.ajax({
            url:'../json/goods.json',
            type:'get',
            dataType:'json',
            success:function(json){
                $.each(goods,function(index,item){
                    $.each(json,function(i,obj){
                        if(obj.code == item.code){
                            var goodsDom = ""
                            goodsDom +=`
                                    <div class="goods">
                                    <div class="check">
                                        <input type="checkbox">
                                    </div>
                                    <a href="#" class="img">
                                        <img src="${obj.img}" alt="">
                                    </a>
                                    <div class="xq">
                                        <a href="#">${obj.title}</a>
                                        <p>${obj.data}</p>
                                    </div>
                                    <div class="cz">
                                    <span code="${obj.code}">×</span>
                                    </div>
                                    <div class="xj">
                                        <span>￥</span>${(obj.price*item.num).toFixed(2)}
                                    </div>
                                    <div class="sl">
                                        <span code="${obj.code}" class="jian">-</span>
                                        <span class="show">${item.num}</span>
                                        <span code="${obj.code}" class="jia">+</span>
                                    </div>
                                    <div class="dj">
                                        <span>￥</span>${obj.price}
                                    </div>
                                </div>
                            `
                            $('.goodsbox').append(goodsDom)
                        }
                        
                        
                    })
                })
            }
        })
       }
    }else{
        alert('请往登录再进行购买')
    }
    window.location.href = './shopcar.html'
})

$('.goodsbox').on('click','.goods .cz span',function(){
    let goods = getCookie('goods')
    var goodsArr
    goodsArr = JSON.parse(goods)
    $(this).parent().parent().remove()
    var code = $(this).attr('code')
    $.each(goodsArr,function(index,item){
        if(item.code == code){
            goodsArr.splice(index,1)
            return false
        }
    })
    if(goodsArr.length > 0){
        goodsArr = JSON.stringify(goodsArr)
        setCookie({
            key:'goods',
            val:goodsArr,
            days:1
        })
    }else{
        removeCookie('goods')
        $('.kbym').css('display','block')
        $('.goodsxx').css('display','none')
        $('.plcz').css('display','none')
    }

    var code = $(this).attr('code')
    var dj
    var num = $(this).parent().parent().find('.sl span').eq(1).text()
    num = parseInt(num)
    var Dom = $(this)
    $.ajax({
        url:'../json/goods.json',
        type:'get',
        dataType:'json',
        success:function success(json){
            $.each(json,function(index,item){
                if(item.code == code){
                    dj = item.price
                    var xj = dj * num
                    xj = xj.toFixed(2)
                    dj = parseInt(dj)
                        spzj = parseInt(spzj)
                        xj = parseInt(xj)
                        num = parseInt(num)
                            spzj -= xj
                            spzs -= num  
                        spzj = spzj.toFixed(2)
                    $('.plcz .r .je').html('应付总额：<span><em>￥</em>'+spzj+'</span>')
                    $('.plcz .r .sl').html('已选择<span>'+spzs+'</span>件商品')
                }
            })
        }
    })
    
})
$('.goodsbox').on('click','.goods .sl .jian',function(){
    let goods = getCookie('goods')
    var goodsArr
    goodsArr = JSON.parse(goods)
    var num = parseInt($(this).next().text())

    if(num < 1 || num == 1){
        num = 1
        return
    }else{
        num -=1
        var code  = $(this).parent().prev().prev().children().attr('code')
        $.each(goodsArr,function(index,item){
            if(item.code == code){
                item.num = num
            }
        })
        $(this).next().text(num)
        var goodsData = JSON.stringify(goodsArr)
        setCookie({
            key:'goods',
            val:goodsData,
            days:1
        })
        var dj = null
        var dom = $(this).parent().prev()
        var dom1 = $(this).parent().siblings().eq(0).children()
        $.ajax({
            url:'../json/goods.json',
            type:'get',
            dataType:'json',
            success:function success(json){
                $.each(json,function(index,item){
                    if(item.code == code){
                        dj = item.price
                        var xj = dj * num
                        xj = xj.toFixed(2)
                        dom.html('<span>￥</span>'+xj)
                        dj = parseInt(dj)
                        if(dom1.prop('checked')){
                            spzj = spzj - dj
                        spzs -= 1
                        spzj = spzj.toFixed(2)
                        $('.plcz .r .je').html('应付总额：<span><em>￥</em>'+spzj+'</span>')
                        $('.plcz .r .sl').html('已选择<span>'+spzs+'</span>件商品')
                        }
                    }
                })
            }
        })
    }

})
$('.goodsbox').on('click','.goods .sl .jia',function(){
    let goods = getCookie('goods')
    var goodsArr
    goodsArr = JSON.parse(goods)
    var num = parseInt($(this).prev().text())
        num++
        num = parseInt(num)
        var code  = $(this).parent().prev().prev().children().attr('code')
        $.each(goodsArr,function(index,item){
            if(item.code == code){
                item.num = num
            }
        })
        $(this).prev().text(num)
        var goodsData = JSON.stringify(goodsArr)
        setCookie({
            key:'goods',
            val:goodsData,
            days:1
        })
        var dom = $(this).parent().prev()
        var dj = null
        var dom1 = $(this).parent().siblings().eq(0).children()
        $.ajax({
            url:'../json/goods.json',
            type:'get',
            dataType:'json',
            success:function success(json){
                $.each(json,function(index,item){
                    if(item.code == code){
                        dj = item.price
                        var xj = dj * num
                        xj = xj.toFixed(2)
                        dom.html('<span>￥</span>'+xj)
                        dj = parseInt(dj)
                        if(dom1.prop('checked')){
                            spzj = parseInt(spzj)
                            xj = parseInt(xj)
                            spzj += dj
                            spzs += 1
                            spzj = spzj.toFixed(2)
                        $('.plcz .r .je').html('应付总额：<span><em>￥</em>'+spzj+'</span>')
                        $('.plcz .r .sl').html('已选择<span>'+spzs+'</span>件商品')
                        }
                    }
                })
            }
        })
    
        
})


$('.middle').on('click','.plcz .checkall input',function(){
      var check = $(this).parent().parent().parent().prev().find('.goods .check input')
      if($(this).prop('checked')){
        check.prop('checked',true)
    }else{
        check.prop('checked',false)
    }
    // var codeArr = $('.middle .goods .cz span').attr('code'))
    var codeArr = []
    $.each($('.middle .goods .cz span'),function(index,item){
        codeArr.push($(item).attr('code'))
    })
    var dj
    $.ajax({
        url:'../json/goods.json',
        type:'get',
        dataType:'json',
        success:function success(json){
            spzj = 0
            spzs = 0
            if(!$('.middle .goods .check input').prop('checked')){
                
            }else{
                for(var i=0;i<codeArr.length;i++){
                 $.each(json,function(index,item){
                   var num =  $('[code = "'+codeArr[i]+'"]').parent().next().next().children().eq(1).text()
                   num = parseInt(num)
                if(item.code == codeArr[i]){
                    dj = item.price
                    dj = parseInt(dj)
                    var xj = dj * num
                    xj = xj.toFixed(2)
                    xj = parseInt(xj)
                        spzj += xj
                        spzs += num
                }
            })
            }
            }
            spzj = spzj.toFixed(2)
            $('.plcz .r .je').html('应付总额：<span><em>￥</em>'+spzj+'</span>')
            $('.plcz .r .sl').html('已选择<span>'+spzs+'</span>件商品')
           
        }
    })


})
$('.middle').on('click','.goods .check input',function(){
    var selectArr = []
    $('.middle .goods .check input').each(function(index,item){
        if($(item).prop('checked')){
            selectArr.push('a')
        }else{
            selectArr.push('b')
        }
    })
    if(selectArr.indexOf('b') == -1){
        $('.middle .plcz .checkall input').prop('checked',true)
    }else{
        $('.middle .plcz .checkall input').prop('checked',false)
    }
    var code = $('.middle .goods .cz span').attr('code')
    var dj
    var num = $(this).parent().parent().find('.sl span').eq(1).text()
    num = parseInt(num)
    var Dom = $(this)
    $.ajax({
        url:'../json/goods.json',
        type:'get',
        dataType:'json',
        success:function success(json){
            $.each(json,function(index,item){
                if(item.code == code){
                    dj = item.price
                    var xj = dj * num
                    xj = xj.toFixed(2)
                    dj = parseInt(dj)
                        spzj = parseInt(spzj)
                        xj = parseInt(xj)
                        num = parseInt(num)
                        if(Dom.prop('checked')){
                            spzj += xj
                            spzs += num
                        }else{
                            spzj -= xj
                            spzs -= num
                        }
                        
                        spzj = spzj.toFixed(2)
                    $('.plcz .r .je').html('应付总额：<span><em>￥</em>'+spzj+'</span>')
                    $('.plcz .r .sl').html('已选择<span>'+spzs+'</span>件商品')
                }
            })
        }
    })
})


