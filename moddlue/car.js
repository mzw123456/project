//   class Car{
//			constructor(options){
////				1.解析参数
//				this.tbody = options.tbody;
//				this.url = options.url;
//				
////				2.请求数据
//				this.load();
////				5.绑定事件
//				this.addEvent();
//			}
//			load(){
////				console.log(1)
//				var that = this;
//				ajax({
//					url:this.url,
//					success:function(res){
//						that.res = JSON.parse(res);
////						3.获取cookie
//						that.getCookie();
//					}
//				})
//			}
//			getCookie(){
////				console.log(1)
////				获取cookie
//				this.goods = JSON.parse(getCookie("goodInfo"));
//				console.log(this.goods)
////				4.渲染页面
//				this.display()
//			}
//			display(){
//				console.log(1)
//				var str = "";
////				比对cookie和总数据
//				for(var i=0;i<this.res.length;i++){
//					for(var j=0;j<this.goods.length;j++){
//						if(this.res[i].goodsId == this.goods[j].id){
//						str += `<tr>
//										<td><input type="checkbox" name="" id="" value="" /></td>
//										<td><img src="${this.res[i].src}"/></td>
//										<td>${this.res[i].name}</td>
//										<td>${this.res[i].price}</td>
//										<td><input type="number" value="${this.goods[j].num}"></td>
//										<td><em data-index="${this.res[i].goodsId}">删除</em></td>
//						       </tr>`		
//						}
//					}
//				}
//				this.tbody.innerHTML = str;
//			}
//			addEvent(){
//				var that = this;
//				this.tbody.addEventListener("click",function(eve){
//					if(eve.target.nodeName == "EM"){
////						找到点击商品的货号
//						that.id = eve.target.getAttribute("data-index");
////						删除DOM元素
//						eve.target.parentNode.parentNode.remove();
////						6.遍历cookie,找到符合条件的数据,做删除
//						that.changeCookie(function(index){
////							8.删除并再次设置回去
//							that.goods.splice(index,1);
//						})
//					}
//				})
//				this.tbody.addEventListener("input",function(eve){
//					if(eve.target.type == "number"){
////						10.先获取修改之后的数量,再获取当前商品的id
//						that.value = eve.target.value;
//						that.id = eve.target.parentNode.nextElementSibling.children[0].getAttribute("data-index");
////						11.遍历cookie,找到符合条件的数据,做修改
//						that.changeCookie(function(index){
//							that.goods[index].num = that.value;
//						});
//					}
//				})
//			}
//			changeCookie(callback){
////				7.找到cookie中符合条件的数据
//				for(var i=0;i<this.goods.length;i++){
//					if(this.goods[i].id == this.id){
//						break;
//					}
//				}
//				callback(i);
//				
////				9.再设置回去
////				12.再设置回去
//				setCookie("goodInfo",JSON.stringify(this.goods))
//			}
//		}
//		new Car({
//			tbody:document.getElementById("tbody"),
//			url:"./data/goods.json"
//		})
//--------------------------------------------------------
class Car{
			constructor(options){
//				1.解析参数
				this.tbody = options.tbody;
				this.zongjia=options.zongjia;
				this.url = options.url;
				this.sum=options.sum;
//				2.请求数据
				this.load();
				
//				5.绑定事件
				this.addEvent();
			}
			load(){
				var that = this;
				ajax({
					
					url:this.url,
					success:function(res){
						that.res = JSON.parse(res);
//						3.获取cookie
						that.getCookie();
					}
				})
			}
			getCookie(){
//				console.log(1)
//				获取cookie
				this.goods = JSON.parse($.cookie("goodsInfo"));
//				console.log(this.goods)
//				4.渲染页面
//				console.log(this.goods);
				this.display()
			}
			display(){
				var str = "";
//				比对cookie和总数据
				for(var i=0;i<this.res.length;i++){
					for(var j=0;j<this.goods.length;j++){
						if(this.res[i].goodsId == this.goods[j].id){
						str += `<tr>
										<td class="check"><label><input type="checkbox"/></label></td>
										<td><img src="${this.res[i].src}"/></td>
										<td>${this.res[i].name}</td>
										<td>${this.res[i].price}</td>
										<td><input type="number" value="${this.goods[j].num}"></td>
										<td><em data-index="${this.res[i].goodsId}">删除</em></td>
						       </tr>`		
						}
					}
				}
				this.tbody.innerHTML = str;
				this.getsum();
//				this.anniu();
                this.fuxuan();
//              this.danxuan();
			}
//			addEvent(){
//				var that = this;
//				this.cont.addEventListener("click",function(eve){
//					if(eve.target.nodeName == "EM"){
//						that.id = eve.target.parentNode.parentNode.parentNode.parentNode.getAttribute("index");
//						console.log(eve.target.parentNode.parentNode.parentNode.parentNode.getAttribute("index"))
//						that.setCookie()
//					}
//				})
//			}
//			anniu(){
//				var that=this;
//				this.tbody.addEventListener("click",function(eve){
//					if(eve.target.id=="select"){	
//						
//					}
//				})
//	
//			}
			
			getsum(){
				var sum=0;
				var zongjia=0
					for(var j=0;j<this.goods.length;j++){
						sum+=parseInt(this.goods[j].num)
						zongjia+=parseFloat((this.goods[j].num)*(this.res[j].price))
						}
					this.sum.innerHTML=sum;	
					this.zongjia.innerHTML=zongjia;
					
					return sum;
					return zongjia;
				}

			addEvent(){
				var that = this;
				this.tbody.addEventListener("click",function(eve){
					if(eve.target.nodeName == "EM"){
//						找到点击商品的货号
						that.id = eve.target.getAttribute("data-index");
//						删除DOM元素
						eve.target.parentNode.parentNode.remove();
//						6.遍历cookie,找到符合条件的数据,做删除
						that.changeCookie(function(index){
//							8.删除并再次设置回去
							that.goods.splice(index,1);
						})
					}
				})
				this.tbody.addEventListener("input",function(eve){
					if(eve.target.type == "number"){
//						10.先获取修改之后的数量,再获取当前商品的id
						that.value = eve.target.value;
						that.id = eve.target.parentNode.nextElementSibling.children[0].getAttribute("data-index");
//						11.遍历cookie,找到符合条件的数据,做修改
						that.changeCookie(function(index){
							that.goods[index].num = that.value;
						});
					}
				})
			}
			changeCookie(callback){
//				7.找到cookie中符合条件的数据
				for(var i=0;i<this.goods.length;i++){
					if(this.goods[i].id == this.id){
						break;
					}
				}
				callback(i);
//				9.再设置回去
//				12.再设置回去
				$.cookie("goodsInfo",JSON.stringify(this.goods))
			}
	
		 
		fuxuan(){
			var that=this;
			$("#checkAll input").click(function(){
				var flag=$(this).prop("checked");
				if(flag){
					$(".check label input").prop("checked",true);	
					that.getsum();
				}else{
					$(".check label input" ).prop("checked",false);
				}
			})
		}
		}
		
//		danxuan(){
//			var that=this;
//			this.tbody.addEventListener("click",function(eve){
//				console.log(1)
//				var flag=$(this).prop("checked");//获取当前input的状态
//				console.log(flag)
//				var CL=$(".check input").length;//列表长度；
//				var CH=$("check input:checked").length;//类表中被选中的元素
//			    if(CL==CH){
//				$("checkAll input").prop("checked",true);
//			}else{
//				$("#checkAll input").prop("checked",false);
//			}
//			that.getsum();
//				})
//			}	
//		}
		new Car({
			zongjia:document.getElementById("zongjia"),
			sum:document.getElementById("sum"),
			tbody:document.getElementById("tbody"),
			url:"./data/goods.json"
		})