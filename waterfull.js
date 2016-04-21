$(window).on('load',function(){
   waterfull();
} )
  function waterfull(){
     var boxs=$('#main>div');//选中所有的盒子
     var w=boxs.eq(0).outerWidth();//获取第一个盒子的宽度；这里所有的盒子宽度是一样的
      console.log(w)
     var cols=Math.floor($(window).width()/w);//算出每一行能够容纳多少个盒子
     console.log(cols)
     $('#main').width(cols*w).css('margin','0 auto');
     var arr=[];
     boxs.each(function(index,value){
     	var h=boxs.eq(index).outerHeight();
        if(index<cols){
          arr[index]=h;
        }else{
        	var minh=Math.min.apply(null,arr);
        	var minindex=$.inArray(minh,arr);
        	console.log(minh)
        	$(value).css({
        		'position':'absolute',
        		'top':minh+'px',
        		'left':minindex*w+'px'
        	})
        	arr[minindex]=arr[minindex]+h;

        }
      })



  }