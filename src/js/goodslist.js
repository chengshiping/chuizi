var user = getCookie('user')
var Code
$.ajax({
    url:'../json/goods.json',
    type:'get',
    dataType:'json',
    success:function(json){
        
       for(var i=0;i<json.length;i++){
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
               '<a href="./goodsxq.html">查看详情</a>'+
               '<span code="'+json[i].code +'">加入购物车</span>'+
           '</div>'+
       '</div>'
       $('.middle .lists').append(goods)
       }
    }
})
$('.middle .lists').on('click','.sp .jrgwc span',function(){
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


    }else{
        alert('请往登录再进行购买')
    }
})
$('.middle .lists').on('click','.sp .jrgwc a',function(){
    var Code = $(this).next().attr('code')
    console.log(Code)
    setCookie({
        key:'Code',
        val:Code,
        days:1
    })
})