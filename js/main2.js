require.config({
	baseUrl:"moddlue",
	paths:{
		"jq":"../libs/jquery",
		"cook":"../libs/jquery.cookie",
		"login":"login",
		"register":"register"
	}
})
require(["jq","cook","login","register"],function(a,_,login,register){
	//登陆
	new login();
	//注册
	new register();
	//搜索
	//购物车
//	new car({
//			tbody:document.getElementById("tbody"),
//			url:"./data/goods.json"
//		})
})
