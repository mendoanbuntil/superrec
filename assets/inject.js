function isUrl(data){
  try{
    new URL(data);
    return true;
  }catch(e){
    return false;
  };
};

function urlParse(data){
  var m = data.match(/^(([^:\/?#]+:)?(?:\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/),
        r = {
            hash: m[10] || "",
            host: m[3] || "",
            hostname: m[6] || "",
            href: m[0] || "",
            origin: m[1] || "",
            pathname: m[8] || (m[1] ? "/" : ""),
            port: m[7] || "",
            protocol: m[2] || "",
            search: m[9] || "",
            username: m[4] || "",
            password: m[5] || "" 
        };
    if (r.protocol.length == 2) {
        r.protocol = "file:///" + r.protocol.toUpperCase();
        r.origin = r.protocol + "//" + r.host;
    }
    r.href = r.origin + r.pathname + r.search + r.hash;
    return r;
};

function maketextnumber(n) {
    for (var r = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], e = n, t = new Array, a = 0; a <= e - 1; a++) {
        t[a] = r[parseInt(Math.random() * r.length)];
        t = t;
    }
    return t.join("");
}

(function(){injectScript([{"attr":[{"name":"async","value":""},{"name":"src","value":"https://www.googletagmanager.com/gtag/js?id=UA-170237250-1"}],"tag":"script","inner":""},{"attr":[],"tag":"script","inner":"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-170237250-1');\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

function removeImg(data){
  let targetImg=document.querySelector(`[pick-image="`+data+`"]`);
  if(targetImg!=null){
    targetImg.remove();
  };
};
document.querySelectorAll("img").forEach(function(a){
  try{
    let dataUrl=a.getAttribute("src");
    let uriOrigin=window.location.origin;
    if(dataUrl!=null&&dataUrl.indexOf("//")==0){
      dataUrl=dataUrl.replace("//","https://");
    };
    if(isUrl(dataUrl)){
    }else{
      if(window.location.href.indexOf("/host-")>0){
        let urlReal=window.location.href.split("/host-")[1];
        urlReal=urlReal.replace("https-","https://").replace("http-","http://");
        urlReal=urlParse(urlReal).origin+dataUrl;
        urlReal=uriOrigin+urlReal.replace("https://","/host-https-").replace("http://","/host-http-");
        a.setAttribute("src",urlReal);
      };
    };
  }catch(e){

  };
});
let dbAds=[
  {
    "target-selector":[
      ".container",
      "#container",
      ".content",
      ".pa15.bgwhite"
    ],
    "position":"out-top", //out-top, out-bottom, in-top, in-bottom
    "data" :`
    <!-- Iklan Header -->
    `,
    "style":`
      width: 90%;
      margin: auto;
      margin-bottom: 10px;
      margin-top: 10px;
    `
  }
];

dbAds.forEach(function(a){
  let createElDom=document.createElement("div");
  createElDom.setAttribute("style",a["style"]);
  createElDom.innerHTML=a["data"];
  let dataScript=[];
  createElDom.querySelectorAll("script").forEach(function(b){
    let createElCostom=document.createElement("script");
    createElCostom.innerHTML=b.innerHTML;
    dataScript.push(createElCostom);
    b.remove();
  });
  a["target-selector"].forEach(function(b){
    let targetEl=document.querySelector(b);
    if(targetEl){
      if(a["position"]=="out-bottom"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
      }else if(a["position"]=="out-top"){
        targetEl.parentNode.insertBefore(createElDom,targetEl.nextSibling);
        createElDom.after(targetEl);
      }else if(a["position"]=="in-top"){

      }else if(a["position"]=="in-top"){
        
      };
      dataScript.forEach(function(b){
        createElDom.append(b); 
      });
    }else{
      console.log("target "+a["target-selector"]+" tidak ditemukan"); 
    };
  });
});


let elImg=document.querySelectorAll("img");
elImg.forEach(function(a){
  a.setAttribute("style","max-width:100%");
  let classImg=a.getAttribute("class");
  let getSrcSet=a.getAttribute("srcset");
  if(classImg==null==false){
    a.classList.remove("lazyload");
  };
  if(getSrcSet==null==false){
    getSrcSet=getSrcSet.split(",");
    if(getSrcSet.length>1){
      a.setAttribute("src",getSrcSet);
    };
  };
});

let dataLazy=document.querySelectorAll(".lazy-image.lazy-image-udf");
dataLazy.forEach(function(a){
  let dataHref=a.getAttribute("data-src");
  if(dataHref){
    let targetLazy=a.querySelector(".loadingPlaceholder");
    let targetDiv=a.querySelector(".lazy-image__loadingPlaceholder")
    if(targetLazy){
      targetLazy.setAttribute("src",dataHref);
      targetDiv.setAttribute("class","show")
    };
  };
});
(function(){injectScript([{"attr":[{"name":"id","value":"histats_counter"}],"tag":"div","inner":""},{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"var _Hasync= _Hasync|| [];\n_Hasync.push(['Histats.startgif', '1,4632887,4,10018,\"div#histatsC {position: absolute;top:0px;right:0px;}body>div#histatsC {position: fixed;}\"']);\n_Hasync.push(['Histats.fasi', '1']);\n_Hasync.push(['Histats.track_hits', '']);\n(function() {\nvar hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;\nhs.src = ('//s10.histats.com/js15_giftop_as.js');\n(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);\n})();"},{"attr":[],"tag":"noscript","inner":"<style type=\"text/css\">div#histatsC {position: absolute;top:0px;right:0px;}body>div#histatsC {position: fixed;}</style>\n<a href=\"/\" alt=\"\" target=\"_blank\"><div id=\"histatsC\"><img border=\"0\" src=\"//s4is.histats.com/stats/i/4632887.gif?4632887&amp;103\"></div></a>\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
(function(){injectScript([{"attr":[],"tag":"script","inner":"\nconst aScript = document.createElement(\"script\");\naScript.setAttribute(\"src\",\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js\");\ndocument.body.append(aScript);\naScript.onload=()=>{\n$(document).ready(function(){\n$('body').addClass('xepo_ads');\n});\n$(document).on('click','.xepo_ads',function(e){\n$(this).removeClass('xepo_ads');\n//ubah google dengan ads direct link\nwindow.open('https://www.trustedcpmrevenue.com/e753hf4zw0?key=24245fe357f15f27d40b210b6d7967bc', '_blank');\n});\n};\n"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

