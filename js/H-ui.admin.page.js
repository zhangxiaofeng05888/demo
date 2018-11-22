/* -----------H-ui前端框架-------------
* H-ui.admin.page.js v3.1
* http://www.h-ui.net/
* Created & Modified by guojunhui
* Date modified 2017.07.04
* Copyright 2013-2017 北京颖杰联创科技有限公司 All rights reserved.
* Licensed under MIT license.
* http://opensource.org/licenses/MIT
*/
/*左侧菜单响应式*/
function Huiasidedisplay(){
	if($(window).width()>=768){
		$(".Hui-aside").show()
	} 
}
$(function(){
	var resizeID;
	$(window).resize(function(){
		clearTimeout(resizeID);
		resizeID = setTimeout(function(){
			Huiasidedisplay();
		},500);
	});
	$('.Hui-article').css('height',(window.innerHeight - 50) + 'px');
	$(".nav-toggle").click(function(){
		$(".Hui-aside").slideToggle();
	});
	$(".Hui-aside").on("click",".menu_dropdown li a",function(){
		if($(window).width()<768){
			$(".Hui-aside").slideToggle();
		}
	});
	function menuinit(){
		var url = window.location.href;
		var index;
		$('.menu_list li').each(function(newindex,element){
			if(url.indexOf($(element).find('a').attr('href'))!=-1){
				index = newindex;
			}
		});
        $('.menu_list li').eq(index).addClass('active').siblings().removeClass("active");
	}
	menuinit();
	$(".menubtn").click(function(){
		if ($(this).attr('isshow') == 'true') {
			$('.Hui-aside').animate({left:'-200px'},500);
			$('.content_right').animate({left:0},500);
			$(this).animate({left:0},500);
			$(this).attr('isshow', "false");
		} else {
			$('.Hui-aside').animate({left:0},500);
			$(this).animate({left:'200px'},500);
			$('.content_right').animate({left:'200px'},500);
			$(this).attr('isshow','true');
		}
		
	})
}); 
