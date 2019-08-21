$(function(){
	// 获取页面的高度
	var k = $(window).height();
	var flag = false;
	// 对next这个类，当click之后的时间 click(function(event){ })
	// fullPage对这个方法有固定写法 $.fn.fullpage.方法
	// moveSectionDown()方法为，跳转到下一页面
	$(".next").click(function(event){
		$.fn.fullpage.moveSectionDown();
	})

    $('#fullpage').fullpage( {
		// 是否需要页面选择器，就是最右边的小点点
		navigation: true,
		// 定义滚动的速度
		scrollingSpeed: 1200,

// 下面是回调函数，意思是当某某函数执行结束的时候，执行回调函数，这其实fullpage包里面自带的函数，所以可以用index使用你
// 回调函数是这个项目的精髓，function()这里，作用很明确，当一个动作执行完，然后我们再执行另外一个动作，很多动作是有前后顺序的。这就很好的达到了效果


		afterLoad: function(anchorLink, index){
			// 这里的作用是当 index ==2（页面）达到第二页的时候，我们就开始执行一下的JS
			// 同时说一下jquery的选择器，在这里使用的很全面，$(".xxxx").show().animate({},1500,"easeInElastic",function(){})
			// 上面的用法非常经典，对某个类选择器animate实现淡入淡出的效果，1500为时间，而后面那个jquery-easing 动画，再
			// 加一个回调函数function(){}
			// 这里的jquery的类选择器，可以并列使用，也可以用在回调函数之后，
			if(index == 2  && flag == false){
				$(".search").show().animate({"right":370},1500,function(){
					$(".search-words").animate({"opacity":1},750,function(){
						$(".search").hide();
						$(".search-01").show().animate({"height":30, "right": 220, "bottom": 452},1500,function(){
							flag = true;
						});
						$(".goods-02").show().animate({"height": 218}, 1500)
						$(".words-02").animate({"opacity":1},500)
					});
				});
			}
		},

		//刚开始滚动的时候，就触发的挥动函数
		onLeave: function(index, nextIndex, derection){
			if( index == 2  && nextIndex == 3){
				// 这里的shirt-02实现位置动态变化，感觉页面高度变化而变化, -（k - 250)
				// 其实页面中的动画，从一个地方去到一个地方，从小变大，都是对这个组件的位置，大小的属性改变。再加入一下css特效
				$(".shirt-02").show().animate({"bottom": -(k-250), "left": 260, "width": 207}, 2000, function(){
					$(".img-01-a").animate({"opacity":1},500, function(){
						$(".btn-a").animate({"opacity":1}, 500);
					})
				});
				$(".cover").show();
			}

			// 第3屏到第4屏的过度动画
			// 很多动画其实都是按照你的大概剧本来走，为什么要并列写，为什么要写在回调函数上面，跟着你想法来，写得多就会了。
			if(index == 3 && nextIndex ==  4){
				$(".shirt-02").hide();
				$(".t1f").show().animate({"bottom": - (k -200), "left": 260},2000,function(){
					$(this).hide();
					$(".car-img").show()
					// 这里的easeInElastic的easing动画，一定要加到时间后面，回调函数前面才能实现
					$(".car").animate({"left": 1700},2500,"easeInElastic",function(){
						$(".note").show();
						$(".note-img, words-04-a").animate({"opacity": 1},1000)
					})
				})

			}

			if(index == 4 && nextIndex == 5){
				$(".hand-05").animate({"bottom": 0}, 1500,function(){
					$(".mouse-05-a").animate({"opacity": 1});

					$(".t1f-05").show().animate({"bottom": 90}, 1000, function(){
						$(".order-05").animate({"bottom": 390}, 300, function(){
							// addClass（）
							$(".words-05").addClass("words-05-a");
							// fadeIn()方法就是让 这个类出现的方法，跟show（）有点类似
							$(".next").fadeIn();
						})
					})
				})
			}


			if( index == 5 && nextIndex == 6){
				$(".t1f-05").animate({"bottom": -(k-500), "left": "40%", "width":65},1500, function(){
					$(".t1f-05").hide();
				});
				$(".box-06").animate({"left": "38%"}, 1500, function(){
					// this使用，如果后面的类选择器跟父选择的类名一样，可以用this进行指代
					$(this).animate({"bottom": 40}, 600, function(){
						$(this).hide();
						// 如何实现小车走，其实让背景走就可以，相对移动，这样看起来就是小车在移动，backgroundPositionX 水平移动
						$(".section6").animate({"backgroundPositionX": "100%"}, 2500,function(){
							$(".boy-06").animate({"height": 305, "bottom": 116}, 1000, function(){
								$(this).animate({"right": 500}, 500, function(){
									$(".door").animate({"opacity": 1}, 500, function(){
										$(".girl-06").show().animate({"right": 350, "height": 306}, 1000, function(){
											$(".pop-07").show();
										});
									});
								});
							});
						});

						$(".words-06-a").show(),animate({"left": "40%"}, 2800, "easeOutElastic")
						$(".pop-06").show();
					});
				});

			}

			if(index == 6 && nextIndex ==7){
				setTimeout(function(){
					$(".star").animate({"width": 120}, 1000, "easeInExpo", function(){
						$(".good-07").animate({"opacity": 1},750);
						$(".next").fadeIn();
					});

				}, 2000);
			}

			// 这是第8屏动画

				$(".beginShoping").hover(function(){
					// hover（）表示鼠标的接触和离去， 而toggle()表示一个元素的显示和隐藏
					$(".btn-08-a").toggle();    
				});
				// 这里实现了手跟着鼠标走的JS，把鼠标的mousemove的属性，获取，然后赋予给.hand-08这个类
				$(document).mousemove(function(event){
					var x = event.pageX - $(".hand-08").width()/2;
					var y = event.pageY + 15;
					// 这里做了一个小小的判断，使小手不会露馅，对屏幕有最高距离。
					var minY = k - 449;
					if(y < minY){
						y = minY;
					}
					// 赋予.hand-08这个X,Y坐标
				$(".hand-08").css({"left": x, "top": y});
				});
				// 这里实现回调到第一屏，让全部的页面重载，$(img, .move).attr("style", "")这个的作用是 img标签的 和含有 .move的类的
				// css.style的都重设为0，这样子做旧可以使页面重新加载，不至于动画错乱
				
				// 对这个类添加点击事件
				$(".again").click(function(event){
					// 1.回到第一屏
					// 2.把所有属性初始化
					$.fn.fullpage.moveTo(1);
					$("img, .move").attr("style", "");
				});











		} 



	});
});