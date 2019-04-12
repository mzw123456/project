	var mySwiper = new Swiper ('.swiper-container', {
    autoplay: {
    delay: 3000,//1秒切换一次
    },
    // 如果需要分页器
//  pagination: {
//    el: '.swiper-pagination',
//  },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 如果需要滚动条
//  scrollbar: {
//    el: '.swiper-scrollbar',
//  },
  }) 
  
	$(function(){
	//商品分类
	$('.all-goods .item').hover(function(){

		$(this).addClass('active').find('s').hide();

		$(this).find('.product-wrap').show();

	},function(){

		$(this).removeClass('active').find('s').show();

		$(this).find('.product-wrap').hide();

	});
});
