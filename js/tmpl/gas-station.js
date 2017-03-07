$(function(){
	 $.ajax({
        url: ApiUrl + "/index.php?act=gas_station_active&op=index",
        type: 'get',
        dataType: 'json',
        success: function(result) {
        	console.log(result)
           	var _html = template.render('active', result);
           	$(".main").append(_html);
        }    
    });
})
