$(function (){
    var key = getCookie('key');
	var html = '<a href="'+WapSiteUrl+'" id="nav-home" class="aui-bar-tab-item" tapmode>'
	+ '<i class="aui-iconfont ic-home"></i>'
	+ '<div class="aui-bar-tab-label">首页</div>'
	+ '</a>'
	+ '<a href="'+WapSiteUrl+'/tmpl/product_first_categroy.html" id="nav-category" class="aui-bar-tab-item" tapmode>'
	+ '<i class="aui-iconfont ic-category"></i>'
	+ '<div class="aui-bar-tab-label">分类</div>'
	+ '</a>'
	+ '<a href="#" id="nav-fuel" class="aui-bar-tab-item" tapmode>'
	+ '<i class="aui-iconfont ic-fuel"></i>'
	+ '</a>'
	+ '<a href="'+WapSiteUrl+'/tmpl/cart_list.html" id="nav-cart" class="aui-bar-tab-item" tapmode>'
	// + '<div class="aui-badge">99</div>'
	+ '<i class="aui-iconfont ic-cart"></i>'
	+ '<div class="aui-bar-tab-label">购物车</div>'
	+ '</a>'
	+ '<a href="'+WapSiteUrl+'/tmpl/member/member.html" id="nav-me" class="aui-bar-tab-item" tapmode>'
	+ '<div class="aui-dot"></div>'
	+ '<i class="aui-iconfont ic-me"></i>'
	+ '<div class="aui-bar-tab-label">我的</div>'
	+ '</a>';
    // var html = '<div class="nctouch-footer-wrap posr">'
    //     +'<div class="nav-text">';
    // if(key){
    //     html += '<a href="'+WapSiteUrl+'/tmpl/member/member.html">我的商城</a>'
    //         + '<a id="logoutbtn" href="javascript:void(0);">注销</a>'
    //         + '<a href="'+WapSiteUrl+'/tmpl/member/member_feedback.html">反馈</a>';
    //
    // } else {
    //     html += '<a href="'+WapSiteUrl+'/tmpl/member/login.html">登录</a>'
    //         + '<a href="'+WapSiteUrl+'/tmpl/member/register.html">注册</a>'
    //         + '<a href="'+WapSiteUrl+'/tmpl/member/login.html">反馈</a>';
    // }
    // html += '<a href="javascript:void(0);" class="gotop">返回顶部</a>'
    //     +'</div>'
    //     +'<div class="nav-pic">'
		// 	+'<a href="'+SiteUrl+'/index.php?act=mb_app" class="app"><span><i></i></span><p>客户端</p></a>'
		// 	+'<a href="javascript:void(0);" class="touch"><span><i></i></span><p>触屏版</p></a>'
    //         +'<a href="'+SiteUrl+'" class="pc"><span><i></i></span><p>电脑版</p></a>'
    //      +'</div>'
		//  +'<div class="copyright">'
		//  +'Copyright&nbsp;&copy;&nbsp;2007-2015 茶产地<a href="javascript:void(0);">福建中百客电子商务有限公司</a>版权所有'
    // 	 +'</div>';
	$("#footer").html(html);


	$(navSelect).addClass('aui-active').siblings().removeClass("aui-active");
    var key = getCookie('key');
	$('#logoutbtn').click(function(){
		var username = getCookie('username');
		var key = getCookie('key');
		var client = 'wap';
		$.ajax({
			type:'get',
			url:ApiUrl+'/index.php?act=logout',
			data:{username:username,key:key,client:client},
			success:function(result){
				if(result){
					delCookie('username');
					delCookie('key');
					location.href = WapSiteUrl;
				}
			}
		});
	});
});