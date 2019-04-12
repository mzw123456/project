   class Login{
	constructor() {
	    this.url = "http://www.icodeilife.cn/ctrl/login.php";
		this.init();
	}
	init(){
		var that = this;
		$("#btn").click(function(){
			that.load();
		})
	}
	load(){
		var that = this;
		$.ajax({
			url:this.url,
			data:{
				user:$("#user").val(),
				pass:$("#pass").val()
			},
			success:function(res){
				switch(res){
					case "0":
						$(".shabi").html("用户名不符");break;
					case "1":
						$(".shabi").html("重新登陆");break;
					default:
						$(".shabi").html("登陆成功,3秒进入首页");
						that.res = JSON.parse(res);
						$.cookie("user",$("#user").val());
						setTimeout(()=>{
							location.href = "index.html"
						},3000)
				}
			}
		})
	}
}
    
new Login();
