//json数据
class Cookie{
	constructor(){
//		this.name = "ad";
		this.ajx();
	}
	ajx(){
		var that=this;
		$.ajax({
			url:"data/datas.json",
			success:function(res){
				that.res=res;
				that.getDate();
			}
		})
	}
	getDate(){
		this.IId=getCookie("goods");
//		console.log(this.IId);

		this.display();
		this.expand()
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
			if(this.IId==this.res[i].goodsId){
//				console.log(${this.res[i].src[0]});
				str+=`
                        <div class="details-left">	
									<div class="big"> 
									<img class="big_img" src="${this.res[i].src[0]}" >
									<img class="big_img" src="${this.res[i].src[1]}" >
									<img class="big_img" src="${this.res[i].src[2]}" >
									<img class="big_img" src="${this.res[i].src[3]}" >
								    </div>
								    <div class="middle">  
								    <img class="middle_img" src="${this.res[i].src[0]}" >
								    <img class="middle_img" src="${this.res[i].src[1]}" >
								    <img class="middle_img" src="${this.res[i].src[2]}" >
								    <img class="middle_img" src="${this.res[i].src[3]}" >
								    <p class="p1"></p>
								        <div class="ceng"></div>
								    </div>
								    <div class="small"> 
								        <img class="small_img" src="${this.res[i].src[0]}" >
								        <img class="small_img" src="${this.res[i].src[1]}" >
								        <img class="small_img" src="${this.res[i].src[2]}" > 
								        <img class="small_img" src="${this.res[i].src[3]}" >
							     </div>
						</div>
		<div class="details-right">
			<div class="details-right-s">
				<h3>${this.res[i].h3}</h3>
				<span>${this.res[i].span}</span>
			</div>
			<div class="details-right-c">
				<span>${this.res[i].span1}</span><em>鲜花编号12246</em></br>
				<span>${this.res[i].span2}</span><em>红玫瑰11支，满天星0.3扎，栀子花0.5扎</em></br>
				<span>${this.res[i].span3}</span><em>外层浅灰紫，里面白色人造单面纸，白绿粗螺纹带</em></br>
				<span>${this.res[i].span4}</span><em>很爱你把你捧在手心里，放在心里11支红玫瑰，代表一心一意，纵然途中万般风景，我的心中只有你</em></br>
				<span>${this.res[i].span5}</span><em>全国(市区可免费配送)</em>
			</div>
			<div class="details-right-b">
				<div class="box">
					<img src="img/butiful.png"/>
					<img src="img/bu.png"/>
				</div>
				<div class="price">
					<span>花礼价：</span><em>￥138</em>
				</div>
				<div class="cuxiao">
					<span>促销信息:</span><img src="img/app.png"/><em>￥123</em><img src="img/erweima.png"/><span>去App购买</span><img src="img/erweima.png"/><span>去微信购买</span>
				</div>
				<a href="#"><p>立即购买</p></a>
			</div>
		</div>
				`
			}
		}
	var details=document.querySelector(".details");
	details.innerHTML=str;
	}
	
	 expand(){
//			var p=$(".p");
          
            var p=$(".p1");
            console.log(p);
            var detailsLeft=$(".details-left")
			var box=$(".middle");
//			console.log(box)
			var span=$(".ceng");
			var small_img=$(".small_img");
			console.log(small_img)
			var middle_img=$(".middle_img");
			console.log(middle_img)
			var img=$(".big_img");
			var boximg=$(".big");
			this.init({
				p:p,
				detailsLeft:detailsLeft,
				box:box,
				span:span,
				img:img,
				boximg:boximg,
				small_img:small_img,
				middle_img:middle_img
			})
			
		}
	    
		init(options){
				this.box=options.box;
				this.detailsLeft=options.detailsLeft
				this.span=options.span;
				this.p=options.p;
				this.img=options.img;
				this.imgbox=options.boximg;
				this.small_img=options.small_img;
				this.middle_img=options.middle_img;
				
				this.box.on("mouseover",()=>{
					this.show();
					
				})
				this.box.on("mousemove",(e)=>{
					this.move(e);
				})
				this.box.on("mouseout",()=>{
					this.out();
				})
			}
			show(){
				
				this.span.css({
					display:"block"
				})
				this.imgbox.css({
					display:"block"
				})
			}
			
			move(e){
				
				this.l=e.offsetX-this.span.outerWidth()/2;
				this.t=e.offsetY-this.span.outerHeight()/2;
				if(this.l<0)this.l=0;
				if(this.t<0)this.t=0;
				if(this.l>this.box.innerWidth()-this.span.outerWidth())this.l=this.box.innerWidth()-this.span.outerWidth();
				if(this.t>this.box.innerHeight()-this.span.outerHeight())this.t=this.box.innerHeight()-this.span.outerHeight();
				this.span.css({
					left:this.l,
					top:this.t
				})
				this.lsize=this.l/this.box.innerWidth();
				this.tsize=this.t/this.box.innerHeight();
				this.img.css({
					left:-this.lsize*this.img.innerWidth(),
					top:-this.tsize*this.img.innerHeight()
				})
				var middleimg = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
	            var bigimg=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
				for(var i=0;i<this.small_img.length;i++){
             
			   this.small_img[i].index = i;

			    this.small_img[i].onclick =function(){
				console.log(1)
				this.middle_img.src = "img/"+this.middleimg[this.index];
				this.middle_img.index=this.index;
				this.middle_img.index = 0;
			}
		    }
				
			}
			out(){
				this.span.css({
					display:"none"
				})
				this.imgbox.css({
					display:"none"
				})
			}

		
			
	   		
	   	   
	
}
new Cookie();
