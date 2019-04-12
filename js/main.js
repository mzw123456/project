require.config({
	baseUrl:"moddlue",
	paths:{
		"jq":"../libs/jquery",
		"cook":"../libs/cookie",
		"floor":"floor",
		"data":"data",
//		"login":"login",
//		"register":"register",
//		"car":"car"
	}
})
require(["jq","cook","floor","data"],function(a,_,floor,data){
	//楼层
	 var ali=$(".floor").find("li");
	 new floor(ali);
	//数据传输
	var  a=document.querySelector(".header-right a");
	var  list=document.querySelector(".list");
	console.log(list)
	var  ul=document.querySelector(".mengziwei");
	console.log(ul)
	new data(a,list,ul);
	//登陆
//	new login();
	//注册
//	new register();
	//搜索
	//购物车
//	new car({
//			tbody:document.getElementById("tbody"),
//			url:"./data/goods.json"
//		})
})
