$(function(){
	$(window).on("scroll",function(){
		var scroll=-300/($(window).height()+1700)*($(".section3").offset().top-$(document).scrollTop())+"px";
			$(".section3-img").css("transform","translateY("+scroll+")");
		if($(document).scrollTop()>=$(".j-head").offset().top+50 ){
			$(".mainHead-hide").css("marginTop",0);
		}else{
			$(".mainHead-hide").css("marginTop",-52);
			}
	});
	/*moveUp($(".section2"));
	moveUp($(".section4"));
	moveUp($(".section5"));
	moveUp($(".section6"));
	moveUp($(".section7"));
	moveUp($(".section8"));
	moveUp($(".section9"));
	moveUp($(".section10"));
	moveUp($(".section11"));
	moveUp($(".section12"));
	moveUp($(".section13"));
	moveUp($(".section14"));
	moveUp($(".section15"));
	
	function moveUp(obj){
		$(window).on("scroll",function(){
			if($(document).scrollTop()>=obj.find(".isHide").offset().top-500){
				obj.addClass("isShow");
			}
		});
	}*/
	(function ($){
		var MoveUp=function(obj){
			var self=this;
					this.obj=obj;
					this.hide=obj.find("p.section_p");
					this.win=$(window);
			this.win.on("scroll",self.move());
		};
		MoveUp.prototype={
			move:function(){
				var _this=this;
				if($(document).scrollTop()>=_this.hide.height()-500){
					this.obj.addClass("isShow");
				}
			}
		};
		MoveUp.init = function(obj){
		var _this_ = this;
		obj.each(function(){
			new  _this_($(this));
		});
	};
	window["MoveUp"] = MoveUp;
	})(jQuery);

(function ($){
		var Slide=function(obj){
			var self=this;
					this.obj=obj;
					this.list=obj.find(".section17_ul");
			this.autoplay();
		};
		Slide.prototype={
			autoplay:function(){
				var _this=this,
						num=0;
				this.timer=window.setInterval(function(){
					num++;
					if(num===3){
						_this.list.animate({
						left:-num*1226
					},function(){
						_this.list.css("left",0);
						num=0;
					});
					}else{
						_this.list.animate({
						left:-num*1226
					});
					}
					
				},2000);
			}
		};
		Slide.init = function(obj){
		var _this_ = this;
		obj.each(function(){
			new  _this_($(this));
		});
	};
	window["Slide"] = Slide;
	})(jQuery);


	Slide.init($(".section17"));
	MoveUp.init($(".section"));





	btn();
	function btn(){
		$(".j-sectionBtn").attr("flag","false").click(function(){
			if($(this).attr("flag")==="false"){
				$(".section18").show();
				$(".section19").show();
				$(this).attr("flag","true");
			}else{
				$(".section18").hide();
				$(".section19").hide();
				$(this).attr("flag","false");
			}
		});
	}
});