define(function(){
	class Floor{
		constructor(ali){
			this.ali=ali;
			this.init();
		}
		init(){
			$(document).on("scroll",function(){
				console.log(document.documentElement.scrollTop);
			})
			var that=this;
			$(".floor li").on("click",function(){
				var index = $(this).index();
				var h = $("#f2").height();
//				console.log(index);
//				console.log(h);
				var t=index*(h+78)+950;
				$("html").animate({
					scrollTop:t
				})
			})
		}
	}
	return Floor;
})		