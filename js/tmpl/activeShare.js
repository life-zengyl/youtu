 $(function(){
	$('.js-dialog-btn').on('click', function(){
		var $dialogWrap = $('.dialog-wrap');
		
		$dialogWrap.addClass('active').on('click',function(){
			$(this).removeClass('active');
		});
	})
	$.ajax({
        url: ApiUrl + "/index.php?act=gas_station_active&op=getsearch&active_id="+getQueryString("active_id"),
        type: 'get',
        dataType: 'json',
        success: function(result) {
        	console.log(result)
        	$(".page-tt").text(result.datas.active_title); 
        	$(".fadeIn").attr("src",result.datas.active_img);
        	$(".act-box p").text(result.datas.active_content);
        }    
    });
})