 function Search() {
			this.txt = document.getElementById("txt");
			
			this.ul = document.getElementById("list");
			this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
			this.addEvent();
			this.index = -1;
		}
		Search.prototype.addEvent = function() {
			var that = this;
			this.txt.onkeyup = function() {
				that.val = this.value;
				that.load()
			}
	     this.txt.onblur = function(){
            that.ul.innerHTML = "";
            that.index = -1;
        }
	     this.txt.onfocus = function(){
////          that.ul.innerHTML = "";
//          that.txt.value=that.ul.children[this.index].innerHTML
//          that.index = -1;
        }
		}
		Search.prototype.load = function() {
			var that = this;
			jsonp(this.url, function(res) {
				//				5.将数据保存到将来的实例对象
			 that.data = res.s;
				//				6.请求成功之后,才能够去渲染页面
				that.display();
				
			}, {
				_name: "cb",
				cb: "asdasgtdsa",
				wd: this.val
			})
		}
			Search.prototype.display = function(){
			        // 6-3.渲染页面
			        var str = "";
			        for(var i=0;i<this.data.length;i++){
			            str += `<li abc="${i}">${this.data[i]}</li>`;
			        }
			        this.ul.innerHTML = str;
			
			        // 7.准备做li的事件委托
			        this.eveEvnt()
			   }
		Search.prototype.eveEvnt = function() {
			var that=this;
//			console.log(this.ul)
			//li的事件委托
			this.ul.onmouseover=function(eve){
				var e=eve||window.event;
				var target=e.target||e.srcElement;
				if(target.nodeName=="LI"){
					//修改index
					that.index=target.getAttribute("abc")
					//准备修改当前项
					that.active();
				}
			}
			console.log(this.index);
			//鼠标离开事件的委托
			this.ul.onmouseout=function(eve){
				var e=eve||window.event;
				var target=e.target||e.srcElement;
				if(target.nodeName=="LI"){
					//修改index
					target.style.background="";
					 
					//准备修改当前项
				}
			}
		}
		Search.prototype.active = function() {
			//修改当前项，设置当前项
			for(var i=0;i<this.ul.children.length;i++){
				this.ul.children[i].style.background="";
				
			}
			console.log(this.ul.children[this.index])
			this.ul.children[this.index].style.background="#007AFF";
			this.txt.value=this.ul.children[this.index].innerHTML;
			
		}
		
		new Search()
