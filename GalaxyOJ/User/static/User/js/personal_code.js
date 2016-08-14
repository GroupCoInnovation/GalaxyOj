window.onload=function(){
		
		var elogout=document.getElementById("logout");
		var elogout2=document.getElementById("logout2");
		var een=document.getElementById("en");
		var ecn=document.getElementById("cn");
		var eC4P1_problem = document.getElementById("C4P1_problem");
		var eC4Box=document.getElementById("C4Box");
		var eC4divs=eC4Box.getElementsByTagName("div");
		var eC4P1=document.getElementById("C4P1");
		var eC4P1divs=eC4P1.getElementsByTagName("div");
		var ecamera=document.getElementById("camera");
		var erank=document.getElementById("rank");
		var etext=document.getElementById("text");
		var eC3P2_photoSet=document.getElementById("C3P2_photoSet");
		var eC3P2_photoClick=document.getElementById("C3P2_photoClick");
		var ephoto_close=document.getElementById("photo_close");
		var ephoto_confirm=document.getElementById("photo_confirm");
		var eselectinput=document.getElementById("selectinput");
		var eC3P2_messClick=document.getElementById("C3P2_messClick");
		var emess_close=document.getElementById("mess_close");
		var emess_confirm=document.getElementById("mess_confirm");
		
		var fsel_change=function (){
			if(een==this){een.style.color = "#fc605d";ecn.style.color = "white";}
			else    {ecn.style.color = "#fc605d";een.style.color = "white";}
		}
		
        var flogout = function (){
            window.open("index.html");//此处做过改动, 之前为index_login.html
            window.opener='';
        }
		
		var fchange_camera = function (){
			var thisid=this.id;
            var m=document.getElementById("mask_"+thisid);
            var c=document.getElementById("pic_"+thisid);
            this.style.borderColor='#f15c58';m.style.opacity=0.5; c.style.opacity=1;
        }
		
		var fchange_camera2 = function (){
			var thisid=this.id;
            var m=document.getElementById("mask_"+thisid);
            var c=document.getElementById("pic_"+thisid);
            this.style.borderColor='#24bfc2';m.style.opacity=0;   c.style.opacity=0;
        }
		
		var select_C4 = function() {
			var thisid=this.id;
			var thisid3=thisid.replace(/C4P1/, "C4P3");
            var thisid2=thisid.replace(/C4P1/, "C4P2");
			var eC4As=eC4Box.getElementsByTagName("a");
            var messageTC=document.getElementById(thisid2);
    		var messageMore=document.getElementById(thisid3);
			
			for(var i=0;i<eC4divs.length;i++) {
				if(eC4divs[i].className=="C4P2") eC4divs[i].style.display="none";
			}
			for(var i=0;i<eC4As.length;i++) {
				if(eC4As[i].className=="C4P3_more") eC4As[i].style.display="none";    
			}
			messageTC.style.display="block";
			messageMore.style.display="block";
        }  
		
		var bgcg_C4 = function() {
			for(var i=0;i<eC4P1divs.length;i++) {
				var ele = eC4P1divs[i];
				var thisid=ele.id;
				var thisbgcg="url(/static/User/images/personal_images/"+thisid+"Blue.png)";
				ele.style.height="200px";
				ele.style.width="200px";
				ele.style.marginTop="10px";
				ele.style.marginRight="2px";
				ele.style.backgroundImage=thisbgcg;
			}
			var thisid=this.id;
			var thisbgcg="url(/static/User/images/personal_images/"+thisid+"Red.png)";
            this.style.height="215px";
			this.style.width="204px";
			this.style.marginTop="3.5px";
			this.style.marginRight="0px";
			this.style.backgroundImage=thisbgcg;				
        }	
		
		var fC3P2_photoClick = function (){
         	eC3P2_photoSet.style.display="none";
            eC3P2_photoClick.style.display="block";
        }
		
		var fC3P2_photoConfirm = function (){
         	eC3P2_photoSet.style.display="block";
            eC3P2_photoClick.style.display="none";
        }
		
		
		
		var fmess_to_confirm = function (){
			eC3P2_photoSet.style.display="block";
            eC3P2_messClick.style.display="none";
        }
		
		var fclose = function (){
			location.reload();
        }
		
		
		
		
		function getFileUrl(sourceId) {
			var url;
			if (navigator.userAgent.indexOf("MSIE") >= 1 && !(navigator.userAgent.indexOf("MSIE 10.0") > 0) ) { // IE10ȡ�����˾�
				//url = document.getElementById(sourceId).value;
				document.all.imgOne.select();
				$("#imgPre").focus();
				url = document.selection.createRange().text;
         
			} else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox 
				url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
			} else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome 
				url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
			}else if(navigator.userAgent.indexOf("MSIE 10.0") > 0){
				url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
			}else{
				url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
			}
			return url;
		}
	 
		/** 
		 * ������ͼƬ ��ʾ��������� 
		 */
		var fpreImg =function () {
			var sourceId=this.id;
			var targetId='imgPre';
			var url = getFileUrl(sourceId);
			var imgPre = document.getElementById(targetId);
			 if(window.navigator.userAgent.indexOf("MSIE") >= 1 && !(navigator.userAgent.indexOf("MSIE 10.0") > 0) ) {
				 var picpreview=document.getElementById("imgPre");
				 picpreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = url;
			 }else{
				 imgPre.src = url;
			 }	 
		}
		
		var fmess_to_click = function (){
				eC3P2_photoSet.style.display="none";
				eC3P2_messClick.style.display="block";
				var x = document.getElementById("message_input");
				document.getElementById("Email_index").innerHTML = x.email.value;
				document.getElementById("Organ_index").innerHTML = x.Organzation.value;
				if(x.Signature.value!= "(��಻����40����)")
					document.getElementById("Sign_index").innerHTML = x.Signature.value;
				else
					document.getElementById("Sign_index").innerHTML = "";
		}
		
		
		var ElementControl = {
			add:function(e,type,f){
				if(e.addEventListener){
				e.addEventListener(type,f,false);
				}
				else if(e.attachEvent){
				e.attachEvent('on'+type,f);
				}
				else{
				e['on'+type]=f;
				}
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
		
		//ElementControl.add(elogout,'click',flogout);
		//ElementControl.add(elogout2,'click',flogout);
		ElementControl.add(een,'click',fsel_change);
		ElementControl.add(ecn,'click',fsel_change);
		ElementControl.add(ecamera,'mouseover',fchange_camera);
		ElementControl.add(ecamera,'mouseout',fchange_camera2);
		ElementControl.add(erank,'mouseover',fchange_camera);
		ElementControl.add(erank,'mouseout',fchange_camera2);
		ElementControl.add(etext,'mouseover',fchange_camera);
		ElementControl.add(etext,'mouseout',fchange_camera2);
		ElementControl.add(etext,'click',fmess_to_click);
		ElementControl.add(ecamera,'click',fC3P2_photoClick);
		ElementControl.add(ephoto_close,'click',fclose);
		ElementControl.add(ephoto_confirm,'click',fC3P2_photoConfirm);
		ElementControl.add(emess_close,'click',fclose);
		ElementControl.add(emess_confirm,'click',fmess_to_confirm);
		ElementControl.add(eselectinput,'change',fpreImg);
		
		for(var i=0;i<eC4P1divs.length;i++) {
			ElementControl.add(eC4P1divs[i],'click',select_C4);
			ElementControl.add(eC4P1divs[i],'click',bgcg_C4);
		}
	}
