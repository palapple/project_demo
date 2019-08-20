


window.onload= function(){
searchEffect();
timeBack();
bannerEffect();
}


// 搜索栏效果

function searchEffect(){
    var banner = document.querySelector(".jd_banner");
    var bannerHeight = banner.offsetHeight;
    var search = document.querySelector(".jd_search");
    window.onscroll = function(){
        offsetTop = document.body.scrollTop;
        var opactiy = 0;
        if(offsetTop < bannerHeight){
            opactiy = offsetTop / bannerHeight;
            search.getElementsByClassName.backgroundColor = "rgba(233, 35, 34, "+opactiy+")";
        }
    }
}

// 倒计时效果
function timeBack(){
    var spans = document.querySelector(".jd_sk_time").querySelectorAll("span");
    var totalTime = 3700;
    var timerId = setInterval(function(){
        totalTime--;
        if( totalTime < 0){
            clearInterval(timerId);
            return;
        }
        var hour = Math.floor(totalTime/3600);
        var minute = Math. floor(totalTime%3600/60);
        var second = Math.floor(totalTime%60);
        spans[0].innerHTML = Math.floor(hour/10);
        spans[1].innerHTML = Math.floor(hour%10);
        spans[3].innerHTML = Math.floor(minute/10);
        spans[4].innerHTML = Math.floor(minute%10);
        spans[6].innerHTML = Math.floor(second/10);
        spans[7].innerHTML = Math.floor(second%10);
    },1000)
}

// 轮播图
function bannerEffect(){
    var banner = document.querySelector(".jd_banner");
    var imgBox = banner.querySelector("ul:first-of-type");
    var first = imgBox.querySelector("li:first-of-type");
    var last = imgBox.querySelector("li:last-of-type");
    imgBox.append(first.cloneNode(true));
    imgBox.insertBefore(last.cloneNode(true), imgBox.firstChild);

    var lis = imgBox.querySelectorAll("li");
    var count = lis.length;
    var bannerWidth = banner.offsetWidth;
    imgBox.style.width = count*bannerWidth+"px";
    // console.log(imgBox.style.width)
    for(var i = 0; i < lis.length; i++){
        lis[i].style.width=bannerWidth+"px";
    }
    var index = 1;
    imgBox.style.left = -bannerWidth + "px";
    window.onresize = function(){
        bannerWidth = banner.offsetWidth;
        imgBox.style.width = count*bannerWidth + "px";
        for(var i= 0; i < lis.length; i++){
            lis[i].style.width = bannerWidth + "px";
        }
        imgBox.styel.left = -index * bannerWidth + "px";
    }

    // 自动轮播

    var timerId;
    var startTime = function(){
        timerId = setInterval(function(){
            index++;
            imgBox.style.transition = "left 0.5s ease-in-out";
            imgBox.style.left= (-index*bannerWidth) + "px"
            setTimeout(function(){
                if(index== count-1){
                    index=1;
                    imgBox.style.transition= "none";
                    imgBox.style.left = (-index*bannerWidth) + "px";
                }
            }, 500)
        }, 2000)
    }
    startTime();

    var startX, moveX, distanceX;
    imgBox.addEventListener("touchstart", function(e){
        clearInterval(timerId);
        startX = e.targetTouches[0].clientX;
    });

    imgBox.addEventListener("touchmove",function(e){
        moveX = e.targetTouches[0].clientX;
        distanceX = moveX - startX;
        imgBox.style.transition = 'none';
        imgBox.style.left = (-index* bannerWidth + distanceX) + "px";
    })

    imgBox.addEventListener("touchend", function(e){
        if(Math.abs(distanceX) > 80){
            if(distanceX > 0){
                index--;
            }else{
                index++;
            }
            imgBox.style.transition = "left 0.5s ease-in-out";
            imgBox.style.left = -index*bannerWidth +"px";
        }
        else if(Math.abs(distanceX > 0)){
            imgBox.style.transition = "left 0.5s ease-in-out";
            imgBox.style.left = -index*bannerWidth +"px";
        }
        startTime();
    })
    /*webkitTransitionEnd:可以监听当前元素的过渡效果执行完毕，当一个元素的过渡效果执行完毕的时候，会触发这个事件*/
    imgBox.addEventListener("webkitTransitionEnd",function(){
        /*如果到了最后一张(count-1)，回到索引1*/
        /*如果到了第一张(0)，回到索引count-2*/
        if(index==count-1){
            index=1;
            /*清除过渡*/
            imgBox.style.transition="none";
            /*设置偏移*/
            imgBox.style.left=-index*bannerWidth+"px";
        }
        else if(index==0){
            index=count-2;
            /*清除过渡 , 让它直接跳回开始*/
            imgBox.style.transition="none";
            /*设置偏移*/
            imgBox.style.left=-index*bannerWidth+"px";
        }
    });
}


