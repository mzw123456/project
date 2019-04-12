	define(function(){
		class Data{	
			constructor(a,list,ul){
                this.a=a;
                this.list=list;
                this.ul=ul;
                this.init();
                this.eveEvnt();
			}
		init(){
			this.a.onmouseover=function(){
				this.list.style.display="block";
//				console.log(this.list)
			}
			this.a.onmouseout=function(){
				this.list.style.display="none";
			}
			this.load();
		}
		eveEvnt() {
			var that=this;
//			console.log(this)
			this.ul.onclick=function(eve){
				var e=eve||window.event;
				var target=e.target||e.srcElement;
				if(target.parentNode.nodeName=="LI"){
				  that.index=target.parentNode.getAttribute("goodsId");
//				  console.log(that.index)
				  setCookie("goods",that.index);
				}
			}
		}
        load(){	
		ajaxGet("data/data.json",function(res){
			var json = JSON.parse(res);
            var str="";
            for(var i=0;i<json.length;i++){
            	str+=`<a href="details.html">
            			<li goodsId="${json[i].goodsid}">
			            	<img src="${json[i].src}"/>
			            	<p>${json[i].name}</p>
			            	<span>${json[i].price}</span>
	            		</li>
	            		</a>`
            }
            var zhunquRight=$(".mengziwei")
            zhunquRight.html(str);
		})
        }
		}
		return Data;
	})
