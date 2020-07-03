var user = getCookie('user')
var Code = getCookie('Code')
$.ajax({
    url:'../json/goods.json',
    type:'get',
    dataType:'json',
    success:function(json){
       for(var i=0;i<json.length;i++){
           if(Code == json[i].code){
               var goods =  `
           <div class="l">
           <img src="${json[i].img}" alt="">
       </div>
       <div class="r">
           <h1>${json[i].title}</h1>
           <h3>${json[i].data}</h3>
           <p><span class="xj">￥${json[i].price}</span> <span class="yj">￥${json[i].price2}</span></p>
           <span class="jrc">加入购物车</span>
       </div>
           `
           $('.middle .xxbox').append(goods)
           }
           
       
       }
    }
})

$('.xxbox').on('click','.r .jrc',function(){
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