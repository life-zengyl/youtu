$(function() {
    var key = getCookie('key');
    if (!key) {
        window.location.href = WapSiteUrl + '/tmpl/member/login.html';
        return;
    }
    var order_id = getQueryString("order_id");
    $.ajax({
        type: 'post',
        url: ApiUrl + "/index.php?act=member_order&op=search_deliver",
        data:{key:key,order_id:order_id},
        dataType:'json',
        success:function(result) {
            //检测是否登录
            checkLogin(result.login);

            var data = result.datas;
            if (result.code == 400) {
                data = {};
                data.err = '暂无物流信息';
            }

            var html = template.render('order-delivery-tmpl', data);
            $("#order-delivery").html(html);
        }
    });

});
