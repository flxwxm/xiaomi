$(function(){

	/*$("#j-topbarCartLink").hover(
		function(){
			$(this).addClass("topbar-link-act");
			$("#j-topbarCartList").slideDown(300);
		},function(){
			$("#j-topbarCartList").slideUp(300,function(){
				$("#j-topbarCartLink").removeClass("topbar-link-act");
			});
		}
	);
	
	var timer=null;
	$(".child-item:last-child").css("borderRight","none");
	$(".j-nav-link").on("mouseover",function(){
		$(".child-list-wrap").html($(this).next().html());
		if($(".child-list-wrap").css("display")==="none"){
			$(".child-list-wrap").slideDown(250,"linear");
		}else{
			$(".child-list-wrap").show();
		}
		});
	
	$(".head-nav").on("mouseenter",function(){
		clearTimeout(timer);
		if($(".child-list-wrap").css("display")==="none"){
			$(".child-list-wrap").slideDown(250,"linear");
		}else{
			$(".child-list-wrap").show();
		}
		});
	$(".head-nav").on("mouseleave",function(){
		timer=setTimeout(function(){
			$(".child-list-wrap").slideUp(250,"linear");
		}, 30);
	});
	$(".child-list-wrap").on("mouseleave",function(){
		timer=setTimeout(function(){
			$(".child-list-wrap").slideUp(250,"linear");
		}, 30);
		
	});
	$(".child-list-wrap").on("mouseenter",function(){
		clearTimeout(timer);
		$(".child-list-wrap").show();
	});
	$(".j-noShow").on("mouseover",function(e){
		e.stopPropagation();
		if($(".child-list-wrap").css("display")==="block"){
			$(".child-list-wrap").slideUp(250,"linear");
		}	
	});
	$(".j-showBannerNav").hover(function(){
		clearTimeout(timer);
		$(".banner-nav-wrap .banner-nav").show();
	},function(){
		$(".banner-nav-wrap .banner-nav").hide();
	});
	$(".banner-nav-wrap .banner-nav").hover(function(){
		$(this).show();
	},function(){
		timer=setTimeout(function(){
			$(".banner-nav-wrap .banner-nav").hide();
		},30);
	});
	$(".banner-nav-wrap .banner-nav-child").hover(function(){
		clearTimeout(timer);
		$(this).show();
	},function(){
		$(this).hide();
	});
	// 搜索框
	$(".head-search").hover(function(){
		$(".search-text").addClass("search-hover");
		$(".search-btn").addClass("search-hover");
	},function(){
		$(".search-text").removeClass("search-hover");
		$(".search-btn").removeClass("search-hover");
	});
	$(".search-text").click(function(e){
		$(".search-text").addClass("search-click");
		$(".search-btn").addClass("search-click");
		$(".search-keys").show();
		e.stopPropagation();
		$(document).click(function(){
			$(".search-keys").hide();
			$(".search-text").removeClass("search-click");
			$(".search-btn").removeClass("search-click");
			$(this).off("click");
		});
	});

	// 轮播
	function slide(){}
	var lastIndex=0,
		next=0,
		prev=0,
		now=0,
		flag=true;
	$(".banner-tab-item").eq(0).show();
	$(".banner-dot-item").each(function(i){
		var _this=this;
			$(this).click(function(){
				now=i;
				if(lastIndex===i)return;
				tab(now);
		});
	});
	$(".banner-tab-prev").click(function(){
		tabPrev();
	});
	$(".banner-tab-next").click(function(){
		tabNext();
	});
	$(".banner-tab").attr("timer",setInterval(tabNext, 3000));
	$(".banner-slide").hover(function(){
		clearInterval($(".banner-tab").attr("timer"));
	},function(){
		$(".banner-tab").attr("timer",setInterval(tabNext, 3000));
	});
	function tabNext(){
		if(flag===true){
			next=lastIndex===$(".banner-dot-item").length-1?0:lastIndex+1;
			tab(next);
			flag=false;
		}
	}
	function tabPrev(){
		if(flag===true){
			prev=lastIndex===0?$(".banner-dot-item").length-1:lastIndex-1;
			tab(prev);
			flag=false;
		}
	}
	function tab(index){
		$(".banner-dot-item").eq(lastIndex).removeClass("dot-act");
		$(".banner-dot-item").eq(index).addClass("dot-act");
		$(".banner-tab-item").eq(lastIndex).fadeOut("slow").removeClass("tab-act");
		$(".banner-tab-item").eq(index).fadeIn("slow",function(){flag=true;}).addClass("tab-act");
		lastIndex=index;
	}

	$(".banner-nav-link").hover(function(){
		var nextEle=$(this).next();
		nextEle.show();
		nextEle.width(nextEle.children().length*nextEle.children().first().width());
	},function(){
		$(this).next().hide();
	});
	$(".banner-nav-child").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});

	//明星产品
	function starPro(which){
		var starPage=0,
			list=which.find($(".star-list")),
			item=which.find($(".star-item")),
			prevBtn=which.find($(".star .more-prev")),
			nextBtn=which.find($(".star .more-next")),
			itemLen=item.length,
			timer=null;
		list.width(item.length*(item.width()+14));
		if(which===$(".star-pro")){
			which.find($(".star-item:nth-child(5n+1)")).css("borderTop","1px solid #ffac18");
			which.find($(".star-item:nth-child(5n+2)")).css("borderTop","1px solid #83c450");
			which.find($(".star-item:nth-child(5n+3)")).css("borderTop","1px solid #2496ef");
			which.find($(".star-item:nth-child(5n+4)")).css("borderTop","1px solid #e63837");
			which.find($(".star-item:nth-child(5n+5)")).css("borderTop","1px solid #00c1a6");
		}
		prevBtn.click(function(){
			if(starPage===0){
				return;
			}else{
				starPage=--starPage%(itemLen/5);
				if(starPage===0){
					$(this).addClass("more-act");
					nextBtn.removeClass("more-act");
				}else{
					$(this).removeClass("more-act");
					nextBtn.removeClass("more-act");
				}
				list.animate({
				"left":-1240*starPage+"px"
				});
			}
		});
		nextBtn.click(function(){
			if(starPage===(itemLen/5)-1){
				return;
			}else{
				starPage=++starPage%(itemLen/5);
				if(starPage===(itemLen/5)-1){
					$(this).addClass("more-act");
					prevBtn.removeClass("more-act");
				}else{
					$(this).removeClass("more-act");
					prevBtn.removeClass("more-act");
				}
				list.animate({
					"left":-1240*starPage+"px"
				});
			}
		});
		timer=setInterval(auto,20000);
		function auto(){
			starPage++;
			starPage=starPage%(itemLen/5);
			if(starPage===0){
				prevBtn.addClass("more-act");
				nextBtn.removeClass("more-act");
			}else if(starPage===(itemLen/5)-1){
				nextBtn.addClass("more-act");
				prevBtn.removeClass("more-act");
			}else{
				nextBtn.removeClass("more-act");
				prevBtn.removeClass("more-act");
			}
			list.animate({
				"left":-1240*starPage+"px"
			});
		}
	}
	starPro($(".star-pro"));
	starPro($(".recommend"));

	
		
	function modelList(which){
		$(".model-item").hover(function(){
			if($(this).find(".hot-eval")){
				$(this).find(".hot-eval").height(64);
			}else{
				return;
			}
		},function(){
			if($(this).find(".hot-eval")){
				$(this).find(".hot-eval").height(0);
			}else{
				return;
			}
		});
		which.find($(".j-modelList")).first().css("zIndex",9);
		which.find($(".more-link-list .more-link")).on("mouseover",function(){
			if($(this).hasClass("more-link-act")){
				return;
			}else{
				which.find($(".more-link-list .more-link")).removeClass("more-link-act");
				$(this).addClass("more-link-act");
				which.find($(".j-modelList")).css("zIndex",8);
				which.find($(".j-modelList")).eq($(this).index()).css("zIndex",9);
		}
	});
	}
	modelList($(".match"));
	modelList($(".parts"));
	modelList($(".around"));

	function content(which){
		var list=which.find(".content-item-list"),
			listItme=list.find(".content-item-s"),
			width=listItme.first().width(),
			len=listItme.length,
			dotList=which.find(".content-dot-list"),
			dotItem=dotList.find(".content-dot-item"),
			prevBtn=which.find(".content-prev"),
			nextBtn=which.find(".content-next"),
			index=0;
		$("#j-content .model-item-l").hover(function(){
			$(this).find(".j-contentBtn").fadeIn(200,"linear");
		},function(){
			$(this).find(".j-contentBtn").fadeOut(200,"linear");
		});
		prevBtn.click(function(){
			if(index===0){
				return;
			}else{
				index--;
				list.animate({
					"left":-width*index+"px"
				});
				dotItem.removeClass("content-dot-act");
				dotItem.eq(index).addClass("content-dot-act");
			}
		});
		nextBtn.click(function(){
			if(index===len-1){
				return;
			}else{
				index++;
				list.animate({
					"left":-width*index+"px"
				});
				dotItem.removeClass("content-dot-act");
				dotItem.eq(index).addClass("content-dot-act");
			}
		});
		list.width($(".content-item-s").width()*list.children().length);
		dotList.css("left",($(".content-item-s").width()-dotList.width())/2);
	}
	content($(".content-book"));
	content($(".content-MIUI"));
	content($(".content-app"));
	content($(".content-game"));*/
});