
	window.onload=function(){
	
		var eC2login = document.getElementById("C2login");
		var eC2logout = document.getElementById("C2logout");
		var eC2logout2 = document.getElementById("C2logout2");
		var eC2logname = document.getElementById("C2logname");
		
		var esearch_text = document.getElementById("search_text");
		var etext = document.getElementById("text");
		var eSearch = document.getElementById("Search");
			
		var fchange_search=function (){
			document.getElementById("Search").src="/static/Home/images/Main_images/Search_focus.png";
			document.getElementById("search_text").style.zIndex=1;
			ElementControl.rm(eSearch,'click',fchange_search);
			ElementControl.add(eSearch,'click',fchange_search3);
        }
			
		var fchange_search3=function (){
			alert("123");
			document.getElementById("search_text").style.zIndex=-1;
			document.getElementById("Search").src="/static/Home/images/Main_images/Search.png"
			ElementControl.rm(eSearch,'click',fchange_search3);
			ElementControl.add(eSearch,'click',fchange_search);
        }
		var fchange_search2 = function (){
			ElementControl.rm(eSearch,'click',fchange_search3);
			document.getElementById("Search").src="/static/Home/images/Main_images/Search.png"
			document.getElementById("search_text").style.zIndex=-1;
			ElementControl.add(eSearch,'click',fchange_search);
        }
		var fdeaftSearch = function () {
			if(this.value=="Search for ID & Title"){
				this.value="";
			}
		}
			
		var fdeaftSearch2 = function () {
			if(this.value==""){
				this.value="Search for ID & Title";
			}
		}
		
			
		var flogin=function (){
			window.open("index.html");//此处做过改动, 之前为index_login.html
			window.opener='';
			window.close();
		}

		var flogout=function (){
			window.open("index.html");
			window.opener='';
			window.close();
		}

		var flogname=function (){
			window.open("personal.html");
			window.opener='';
			window.close();
		}

		var een=document.getElementById("en");
		var ecn=document.getElementById("cn");
		var fsel_change=function (){
			if(een==this){een.style.color = "#fc605d";ecn.style.color = "white";}
			else    {ecn.style.color = "#fc605d";een.style.color = "white";}
		}
		
		
		var ecl = document.getElementById("cl");
		var change_close1=function (){
			 this.src="/static/Home/images/Main_images/close_selected.png";
		}
		
		var change_close2=function (){
			 this.src="/static/Home/images/Main_images/close_not selected.png";
		}
		
		var ego = document.getElementById("go");
		var change_go1 = function (){
			 this.src="/static/Home/images/Main_images/go_selected.png";
		}
		
		var change_go2 = function (){
			 this.src="/static/Home/images/Main_images/go_notselected.png";
		}
		
		var close_system = function (){
			 var x = document.getElementById("system_br");
			 x.style.display = "none";
		}

		var change_textC1 = function (){
			 var node=this.childNodes;
			 for(var i=0;i<node.length;i++)
			 {
				 if(node[i].nodeType==1)
					 node[i].style.color="#24b6ba";
			 }
		}
		var change_textC2 = function (){
			 var node=this.childNodes;
			 for(var i=0;i<node.length;i++)
			 {
				 if(node[i].nodeType==1)
					 node[i].style.color="black";
			 }
		}
		
		
		var ElementControl = {
			add:function(e,type,f){
				if(e){
				if(e.addEventListener){
				e.addEventListener(type,f,false);
				}
				else if(e.attachEvent){
				e.attachEvent('on'+type,f);
				}
				else{
				e['on'+type]=f;
				}}
			} ,
			rm:function(e,type,f){
				if(e.removeEventListener){
					e.removeEventListener(type,f,false);
				}
				else if(e.detachEvent){
					e.detachEvent('on'+type,f);
				}
				else{
				e['on'+type]=null;
				}
			}
		};

		//ElementControl.add(eC2logout2,'click',flogout);

		ElementControl.add(een,'click',fsel_change);
		ElementControl.add(ecn,'click',fsel_change);
		ElementControl.add(ecl,'mouseover',change_close1);
		ElementControl.add(ecl,'mouseout',change_close2);
		ElementControl.add(ego,'mouseover',change_go1);
		ElementControl.add(ego,'mouseout',change_go2);
		ElementControl.add(ecl,'click',close_system);
		ElementControl.add(esearch_text,'blur',fchange_search2);
		ElementControl.add(eSearch,'click',fchange_search);
		ElementControl.add(esearch_text,'click',fdeaftSearch);
		ElementControl.add(esearch_text,'blur',fdeaftSearch2);
		
		var esC5word=document.getElementsByName("C5word");
		for(var i=0;i<esC5word.length;i++) {
			ElementControl.add(esC5word[i],'mouseover',change_textC1);
			ElementControl.add(esC5word[i],'mouseout',change_textC2);
		}
	}
function ale(){ var mychar="��δ�����û��������룡"; alert(mychar); }

/*��ʾ��������ƶ�*/
var offset_x;
var offset_y;
function Milan_StartMove(oEvent)
{
    var whichButton;
    if(document.all&&oEvent.button==1) whichButton=true;
    else { if(oEvent.button==0)whichButton=true;}
    if(whichButton)
    { 
         var oDiv=document.getElementById("oDiv");
         offset_x=parseInt(oEvent.clientX-oDiv.offsetLeft);
         offset_y=parseInt(oEvent.clientY-oDiv.offsetTop);
         document.documentElement.onmousemove=function(mEvent)
         {    
            var eEvent;
            if(document.all) eEvent=event;
            else{eEvent=mEvent;}
            var oDiv=document.getElementById("oDiv");
            var x=eEvent.clientX-offset_x;
            var y=eEvent.clientY-offset_y;
            oDiv.style.left=(x)+"px";
            oDiv.style.top=(y)+"px";
         }
    }
}
function Milan_StopMove(oEvent){document.documentElement.onmousemove=null; }
