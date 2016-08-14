// JavaScript Document

		var obj;
        var page=0;
        var listNum=8;//ÿҳ��ʾ<ul>��
        var PagesLen;//��ҳ��
        var PageNum=4;//��ҳ���ӽ���(5��)
        window.onload=function(){
            obj=document.getElementById("EList").getElementsByTagName("tr");//EList
            //j=obj.length
            PagesLen=Math.ceil(ListSize/listNum);
            upPage(nowPage);
			
			var esearch_text = document.getElementById("search_text");
			var etext = document.getElementById("text");
			var eSearch = document.getElementById("Search");
			var eadd = document.getElementById("add");
            var esetTop = document.getElementById("setTop");
            var ecloseIcon = document.getElementById("closeIcon");
            var eChange_closeIcon = document.getElementById("Change_closeIcon");
			var eEList = document.getElementById("EList");
			var eEListTr = eEList.getElementsByTagName("tr");
			
			var fEdit = function () {
				document.getElementById('ChangeBox').style.opacity=1;
				document.getElementById('ChangeBox').style.zIndex=100;
			}

			var fchange_search=function (){
				document.getElementById("Search").src="/static/Information/images/EssayList_images/search_red.png";
				document.getElementById("search_text").style.zIndex=1;
				document.getElementById("search_line").style.display='block';
				ElementControl.rm(eSearch,'click',fchange_search);
				ElementControl.add(eSearch,'click',fchange_search3);
        	}
			
			var fchange_search3=function (){
				alert("123");
				document.getElementById("search_text").style.zIndex=-1;
				document.getElementById("Search").src="/static/Information/images/EssayList_images/Search.png"
				document.getElementById("search_line").style.display='none';
				ElementControl.rm(eSearch,'click',fchange_search3);
				ElementControl.add(eSearch,'click',fchange_search);
        	}
			var fchange_search2 = function (){
				ElementControl.rm(eSearch,'click',fchange_search3);
				document.getElementById("Search").src="/static/Information/images/EssayList_images/Search.png"
				document.getElementById("search_line").style.display='none';
				document.getElementById("search_text").style.zIndex=-1;
				ElementControl.add(eSearch,'click',fchange_search);
        	}
			
			eadd.onmouseover = function() {
				startMove(150);
			}
			eadd.onmouseout = function() {
				startMove(50);
			}
			
			var mywidth=50;
			var timer=null;
			function startMove(iTarget){
				clearInterval(timer);
				var e = document.getElementById("add");
				timer = setInterval(function(){
					var speed=0;
					if(mywidth > iTarget) {
						speed = -10;
					}
					else {
						speed = 10;
					}
					if(mywidth == iTarget) {
						clearInterval(timer);
					}
					else {
						mywidth = mywidth + speed ;
						e.style.width =mywidth+'px';
					}
				},30)
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

            var fadd = function () {
				eadd.style.background="url(/static/Information/images/EssayList_images/selected.png)";
                document.getElementById('popBox').style.opacity=1;
                document.getElementById('popBox').style.zIndex=200;
            }

            var fisSetTopChecked =  function () {
                if(this.checked==true){
                    document.getElementById("topNotSelected").style.opacity=0;
                    document.getElementById("topSelected").style.opacity=1;
                }
                else {
                    document.getElementById("topNotSelected").style.opacity=1;
                    document.getElementById("topSelected").style.opacity=0;
                }
            }

            var fReadyToCloseAdd =  function () {
                document.getElementById("closeNotSelected").style.opacity=0;
                document.getElementById("closeSelected").style.opacity=1;
            }

            var fNotReadyToCloseAdd = function () {
                document.getElementById("closeNotSelected").style.opacity=1;
                document.getElementById("closeSelected").style.opacity=0;
            }

            var fCloseAdd =  function () {
                document.getElementById('popBox').style.zIndex=-100;
                eadd.style.background="url(/static/Information/images/EssayList_images/not selected.png)";
            }

            var fChange_ReadyToCloseEdit =  function () {
                document.getElementById("Change_closeNotSelected").style.opacity=0;
                document.getElementById("Change_closeSelected").style.opacity=1;
            }

            var fChange_NotReadyToCloseEdit = function () {
                document.getElementById("Change_closeNotSelected").style.opacity=1;
                document.getElementById("Change_closeSelected").style.opacity=0;
            }

            var fChange_CloseEdit =  function () {
                document.getElementById("ChangeBox").style.opacity = 0;
                document.getElementById('ChangeBox').style.zIndex=-100;
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
	
			ElementControl.add(esearch_text,'blur',fchange_search2);
			ElementControl.add(eSearch,'click',fchange_search);
			ElementControl.add(esearch_text,'click',fdeaftSearch);
			ElementControl.add(esearch_text,'blur',fdeaftSearch2);
            ElementControl.add(eSearch,'click',fchange_search);
            ElementControl.add(eadd,'click',fadd);
            ElementControl.add(esetTop,'click',fisSetTopChecked);
            ElementControl.add(ecloseIcon,'mouseover', fReadyToCloseAdd);
            ElementControl.add(ecloseIcon, 'mouseout', fNotReadyToCloseAdd);
            ElementControl.add(ecloseIcon, 'click', fCloseAdd);
            ElementControl.add(eChange_closeIcon, 'mouseover', fChange_ReadyToCloseEdit);
            ElementControl.add(eChange_closeIcon, 'mouseout', fChange_NotReadyToCloseEdit);
            ElementControl.add(eChange_closeIcon, 'click', fChange_CloseEdit);
			
			for(var i = 0; i< eEListTr.length ; i++) {
				var eEListTrTd = eEListTr[i].getElementsByTagName("td");
				ElementControl.add(eEListTrTd[2], 'click', fEdit);
			}
        }


  	function upPage(p){
        nowPage= p
        //���ݱ任
        //��ҳ���ӱ任
        strleft = '';
        if(nowPage>0)
            strleft='<a href="../'+(p)+'" onclick="upPage('+(p)+')"> < </a>  ';
        strS='<a href="../1" onclick="upPage(1)"> The First Page &bull;&bull;&bull;</a>  ';
        var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2)
        var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1
        var strC="",startPage,endPage;
        if (PageNum>=PagesLen) {startPage=0;endPage=PagesLen-1}
        else if (nowPage<PageNum_2){startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1}//��ҳ
        else {startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t}
        for (var i=startPage;i<=endPage;i++){
            if (i==nowPage)strC+='<a href="../'+parseInt(i+1)+'" style="color:red;font-weight:700;" onclick="upPage('+parseInt(i)+')">'+(i+1)+'</a> '
            else strC+='<a href="../'+parseInt(i+1)+'" onclick="upPage('+parseInt(i)+')">'+(i+1)+'</a> '
        }
        strE=' <a href="../'+(PagesLen)+'" onclick="upPage('+(PagesLen)+')">&bull;&bull;&bull; the Last Page</a>  ';
        strright = '';
        if(nowPage<PagesLen-1)
            strright='<a href="../'+(nowPage+2)+'" onclick="upPage('+(nowPage+1)+')"> > </a>  ';
        var outp=strleft;
        if(startPage!=0) outp=outp+strS;
        outp=outp+strC;
        if(endPage!=PagesLen-1)outp=outp+strE;
        outp=outp+strright;
        document.getElementById("changpage").innerHTML=outp;
    }
