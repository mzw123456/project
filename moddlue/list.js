class List{
			constructor(options){
				this.cont = options.cont;
				this.url = options.url;
				this.load();
				this.addEvent();
			}
			load(){

				var that = this;
				ajax({
					url:this.url,
					success:function(res){
						that.res = JSON.parse(res)
//						console.log(that.res)
						that.display()
					}
				})
			}
			display(){
				var str = "";
				for(var i=0;i<this.res.length;i++){
					str += `<li index="${this.res[i].goodsId}">
						   <div class="box-img" ">
								<img src="${this.res[i].src}"/>
						   </div>
						   <div class="info-cont">
							<div class="price">
								<span class="price-sign">
									￥
								</span>
								<span class="price-num">
									${this.res[i].price}
								</span>
							</div>
							<div class="title">
									<span class="podcuct-title">
										${this.res[i].name}
									</span>
									<span class="feature">
										${this.res[i].name1}
									</span>
							</div>
							<div class="optrate">
								<a href="#" class=" b1 attention">
									<span class="ico ico-heart-d">	
									</span>
									收藏
								</a>
							    <a href="#" class="add-cart" style="margin-left:-5px;">
							    	<em class="ico ico-cart-d">加入购物车</em>
					            </a>
							</div>
						    </div>
			   </li>
	            		`;
				}
				this.cont.innerHTML = str;
			}
			addEvent(){
				var that = this;
				this.cont.addEventListener("click",function(eve){
					if(eve.target.nodeName == "EM"){
						that.id = eve.target.parentNode.parentNode.parentNode.parentNode.getAttribute("index");
//						console.log(eve.target.parentNode.parentNode.parentNode.parentNode.getAttribute("index"))
						that.setCookie()
					}
				})
			}
			setCookie(){
				console.log($.cookie("user"));
				if($.cookie("user") == null){
					alert("您还没有登录，请登录");
					window.location.href="login.html";
				}else{
					if($.cookie("goodsInfo") == null){
						this.goods = [{
							id:this.id,
							num:1
	//						price:this.price
						}];
					}else{
	
						this.goods = JSON.parse($.cookie("goodsInfo"));
						var onoff = true;
						this.goods.forEach((v)=>{
							if(v.id == this.id){
								v.num++
								onoff = false;
							}
						})
						
						if(onoff){
							this.goods.push({
								id:this.id,
								num:1
							})
						}
					}
					$.cookie("goodsInfo",JSON.stringify(this.goods))
					window.location.href="car.html";
				}
			}
		}
		new List({
			cont:document.getElementById("cont"),
			url:"./data/goods.json"
		})