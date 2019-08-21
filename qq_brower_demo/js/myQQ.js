

$(function(){

	// 开始的时候加个时间
	setTimeout(function(){
		// 这里用了addclass，‘comein’属性在html中并没有使用，恰好可以在js中addclass使用
		$('.section1').addClass('comein');
	}, 300);


	$('#fullpage').fullpage({
		navigation: true,
		loopBottom: true,
		onLeave: function(index, nextIndex, direction){

			// 第一屏制作
			$(".section1").removeClass('comein');
			if(nextIndex == 1) {
    			$(".section1").addClass('comein');
			}
			
			if(nextIndex != 1){
				$('#bg').addClass('rotate');
			}else{
				$('#bg').removeClass('rotate');
			}
			// 第二屏制作
			if( nextIndex == 2){
				// jquery的animate不能支持translate的动画，可以搭配CSS来做，然后在css后面加入transition all 3s，加入过场动画时间
				$(".p2").css("transform", "translate(-50%, -50%)  translateZ(0px) scale(1)")
			}else{
				$(".p2").css("transform", "translate(-50%, -50%)  translateZ(2000px) scale(1)")
			}

			// 第三屏制作
			if (nextIndex == 3){
				$(".p3").css("transform", "translateZ(-50px) rotateX(30deg)")
				$(".title3").css("transform", "translateZ(0px) rotateX(0deg)")
			}
			if(nextIndex == 4) {
    			$(".p3").css("transform", "translateZ(-200px) rotateX(-45deg) translateX(3000px)")
				$(".title3").css("transform", "translateZ(1200px) rotateY(-60deg)")
			} 
			if(index == 4){
				$(".p4").css("transform", "translateZ(4000px) rotateX(-45deg) ")
    			$(".title4").css("transform", "translateZ(4000px) rotateY(-60deg)")
			}else{
				$(".p4").css("transform", "translateZ(0) rotateX(0) ")
    			$(".title4").css("transform", "translateZ(0) rotateY(0)")
			}



		}
	})
})