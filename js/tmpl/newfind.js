 $(function(){
	$('.page-wrap').delegate('.js-dialog-btn','click', function(){
		
		var $dialogWrap = $('.dialog-wrap');
		
		$dialogWrap.addClass('active').on('click',function(){
			$(this).removeClass('active');
		});
	})
	$.ajax({
        url: ApiUrl + "/index.php?act=superior_discover&op=index",
        type: 'get',
        dataType: 'json',
        success: function(result) {
        	console.log(result)
           	var _html = template.render('find', result);
           	$("main").append(_html);
        }    
    });
})