//后退
$('.a-back').tap(function() {
    window.history.back();
});
//更多
$(".a-more").on('tap', function(){
    $(".j-nav").toggle();
});


//loading
function loading(){
	$('body').append('<div class="loading"><div class="loadimg"></div>请稍后...</div><div class="loadMask"></div>');
	$('.loadMask,.loading').css('display','block');
}
function closeLoad(){
	setTimeout($('.loading,.loadMask').remove(),2000);//2秒后隐藏
}

/*textarea 获取焦点时 另起一行*/
$('.form-view textarea').focus(function(){
	$(this).closest('.f-row').addClass('block-input');
});
$('.form-view textarea').blur(function(){
	$(this).closest('.f-row').removeClass('block-input');
});

$(".ui-imglazyload").imglazyload({
	extClass: "ware-img"
})
