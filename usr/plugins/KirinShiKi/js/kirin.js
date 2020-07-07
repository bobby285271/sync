$(document).ready(function(){(function(){var b=!0;function scrolling(){0<$("body.compensate-for-scrollbar").length&&b&&(b=!1,$("body.compensate-for-scrollbar #bg").attr("style","transition-duration:0s"),setTimeout('$("#bg").attr("style","");cfsFlag=true',2E3));var a=$("#sidebar").find("section");if(0<a.length){var c=$(a[a.length-1]);a=$(window).scrollTop();c=c.offset().top+Math.abs(c.height());a-=c;c=$("aside.col.w-md.no-border-xs");0<a?c.css("opacity","0"):c.css("opacity","1")}
300>$(document).scrollTop()?$("#kotori").addClass("hidekotori"):$("#kotori").removeClass("hidekotori")}
var timer=null;$(document).scroll(function(){clearTimeout(timer);timer=setTimeout(function(){scrolling();},30)});console.log("\n %c handsome modified %c by \u795e\u4ee3\u7eee\u51db moe.best \n","color:#444;background:#eee;padding:5px 0;","color:#fff;background:#876;padding:5px 0;");console.log("%c ","background:url(https://ws1.sinaimg.cn/large/71785a53ly1fxylsf6ke7j216z0o6q8j.jpg) no-repeat center;background-size:cover;padding-left:100%;padding-bottom:55%;overflow:hidden;border-radius:10px;margin:5px 0");window.setInterval(function(){if(document.getElementById("aboutPage")){var a=document.getElementById("aboutPage"),b=a.contentWindow.document.getElementById("mainc");try{a.style.height=b.scrollHeight+"px"}catch(e){}}},300);})();$('#header').before('<div id="bg"></div>');var toggleStr='<div class="nav navbar-nav hidden-xs">\n'+
'          <a id="aside-btn" href="#" class="btn no-shadow navbar-btn" ui-toggle-class="app-aside-folded" target=".app">\n'+
'            <i class="fontello fontello-dedent text icon-fw"></i>\n'+
'            <i class="fontello fontello-indent icon-fw text-active"></i>\n'+
'          </a>\n'+
'        </div>'
$('#header .navbar-collapse').prepend(toggleStr);})
$(window).load(function(){1<location.hash.length&&$('.tocify-item[data-unique="'+decodeURI(location.hash.substr(1))+'"]').click()});function updateLiveStatus(b){1==b.data.liveStatus&&$("#bilibili-live").removeClass("hide")};function getHref(){var hrefArr=[];$('.post-meta .index-post-title>a').each(function(){hrefArr.push($(this).attr('href'));$(this).find('span').addClass('sticky');});return hrefArr;}
function setHref(arr){$('.post-meta').each(function(index){$(this).append('<a href="'+arr[index]+'" class="ahover"></a>')});}
function colorfulTags(){var tags=document.querySelectorAll("#tag_cloud-2 a");var colorArr=["#428BCA","#AEDCAE","#ECA9A7","#DA99FF","#FFB380","#D9B999","#3bca6e","#f23232","#834e75","#23b7e5","#f60"];tags.forEach(tag=>{tagsColor=colorArr[Math.floor(Math.random()*colorArr.length)];tag.style.backgroundColor=tagsColor;});}
function moeTitle(){var OriginTitile=document.title;var d;document.addEventListener("visibilitychange",function(){document.hidden?(clearTimeout(d),d=setTimeout(function(){document.title="|\uff65\u03c9\uff65\uff40\u0029\u4f60\u770b\u4e0d\u89c1\u6211\u2026\u2026"},500)):(document.title="_(:3\u300d\u300d\u8fd8\u662f\u88ab\u53d1\u73b0\u4e86",d=setTimeout(function(){document.title=OriginTitile},2E3))})}
function copyTips(text){var timer=null;var dialog={msg:function(msg,time){var time=time||3000;var dialogElement=$('#my-dialog-layer');var dom='<div id="my-dialog-layer" style="z-index: 99999; max-width: 360px; min-width:100px; background-color: rgba(0,0,0,.6); color: #fff;position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); ">\n'+
'   <div class="layer-content" style="padding: 12px 25px; font-size:14px; text-align: center; line-height: 24px;overflow-x: hidden; overflow-y: auto;">'+msg+'</div>\n'+
'</div>'
if(dialogElement.length==0){$('body').append(dom);timer=setTimeout(function(){$('#my-dialog-layer').remove();},time)}
clearTimeout(timer);timer=setTimeout(function(){$('#my-dialog-layer').remove();},time)}}
document.addEventListener("copy",function(){dialog.msg(text||'复制成功，如需转载请注明出处！',3000);})}
function setCopyright(type){var badgeInfo='&nbsp;|&nbsp; \n'+
'<div class="github-badge">\n'+
'    <a href="https://moe.best/" target="_blank" title="handsome主题由JindaiKirin魔改">\n'+
'        <span class="badge-subject">Modified</span><span class="badge-value bg-red">JindaiKirin</span>\n'+
'    </a>\n'+
'</div>'+
'&nbsp;&nbsp; \n';var textInfo='&nbsp;|&nbsp; \n'+
'    <a href="https://moe.best/" target="_blank" title="handsome主题由JindaiKirin魔改">\n'+
'        Modified&nbsp;&nbsp;JindaiKirin\n'+
'    </a>\n';'&nbsp;&nbsp; \n';$('#footer span.pull-right').append(type?textInfo:badgeInfo);}