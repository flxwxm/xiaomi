$(function(){

	$(".reg-area").click(function(e){
		if($(".reg-select").css("display")=="none"){
			$(".reg-select").show();
		}else{
			$(".reg-select").hide();
		}
		e.stopPropagation();
	});
	$(document).click(function(){
		if($(".reg-select").css("display")=="block"){
			$(".reg-select").hide();
		}
	});
	$(".reg-item").each(function(i){
		var index=i;
		$(this).click(function(){
			$(".reg-country").html($(".reg-item-contry").eq(index).html()+"（"+$(".reg-item-num").eq(index).html()+"）");
		});
	});
	$("#j-regPh").on("blur",function(){
		var str=$.trim($(this).val()),
		    reg=/^1[358]\d{9}$/,
		    flag=reg.test(str);
		if($(this).val().length===0){
			$(".err-ph .err_detail").html("请输入电话号码");
			$(".err-ph").show();
			$(".reg-ph").addClass("reg_inputbg_act");
		}else if(flag===false){
			$(".err-ph .err_detail").html("请输入正确的电话号码");
			$(".err-ph").show();
			$(".reg-ph").addClass("reg_inputbg_act");
		}else{
			$(".err-ph").hide();
			$(".reg-ph").removeClass("reg_inputbg_act");
		}
	});
	$("#j-regPh").on("keyup",function(){
		$(".err-ph").hide();
		$(".reg-ph").removeClass("reg_inputbg_act");
	});
	$("#j-regVerify").on("blur",function(){
		if($(this).val().length===0){
			$(".err-ver .err_detail").html("请输入图片验证码");
			$(".err-ver").show();
			$(".reg-verify").addClass("reg_inputbg_act");
		}else if($(this).val()!="1234"){
			$(".err-ver .err_detail").html("请输入正确的图片验证码");
			$(".err-ver").show();
			$(".reg-verify").addClass("reg_inputbg_act");
		}else{
			$(".err-ver").hide();
			$(".reg-verify").removeClass("reg_inputbg_act");
		}
	});
	$("#j-regVerify").on("keyup",function(){
		$(".err-ver").hide();
		$(".reg-verify").removeClass("reg_inputbg_act");
	});
});