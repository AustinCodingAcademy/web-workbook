(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={wa:!0},ea={};try{ea.__proto__=da;ca=ea.wa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.o=b.prototype}
for(var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ka=ia,la=["Reflect",
"construct"],ma=0;ma<la.length-1;ma++){var na=la[ma];na in ka||(ka[na]={});ka=ka[na]}var oa=la[la.length-1];ja!=ka[oa]&&null!=ja&&ha(ka,oa,{configurable:!0,writable:!0,value:ja});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function u(a,b){for(var c=a.split("."),d=b||p,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function pa(){}
function qa(a){a.ia=void 0;a.getInstance=function(){return a.ia?a.ia:a.ia=new a}}
function ra(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function sa(a){return"array"==ra(a)}
function ta(a){var b=ra(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ua(a){return"function"==ra(a)}
function wa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var xa="closure_uid_"+(1E9*Math.random()>>>0),ya=0;function za(a,b,c){return a.call.apply(a.bind,arguments)}
function Aa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=za:v=Aa;return v.apply(null,arguments)}
function x(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ib=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Ba=document,A=window;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(B,Error);B.prototype.name="CustomError";var Ca=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Da(a,b){return a<b?-1:a>b?1:0}
function Ea(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Fa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ga=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Ha(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ia(a,b){var c=Fa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ja(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ka(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ta(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var La;a:{var Na=p.navigator;if(Na){var Oa=Na.userAgent;if(Oa){La=Oa;break a}}La=""}function D(a){return-1!=La.indexOf(a)}
;function Pa(a,b){var c=ta(b),d=c?b:arguments;for(c=c?0:1;c<d.length&&(a=a[d[c]],q(a));c++);return a}
function Qa(a){var b=Ra,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Sa(a){for(var b in a)return!1;return!0}
function Ta(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ua(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Xa(a,b){var c=Ya;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Za=D("Opera"),$a=D("Trident")||D("MSIE"),ab=D("Edge"),bb=D("Gecko")&&!(-1!=La.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),cb=-1!=La.toLowerCase().indexOf("webkit")&&!D("Edge");function db(){var a=p.document;return a?a.documentMode:void 0}
var eb;a:{var fb="",gb=function(){var a=La;if(bb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ab)return/Edge\/([\d\.]+)/.exec(a);if($a)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(cb)return/WebKit\/(\S+)/.exec(a);if(Za)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
gb&&(fb=gb?gb[1]:"");if($a){var hb=db();if(null!=hb&&hb>parseFloat(fb)){eb=String(hb);break a}}eb=fb}var ib=eb,Ya={};
function jb(a){return Xa(a,function(){for(var b=0,c=Ca(String(ib)).split("."),d=Ca(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Da(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Da(0==g[2].length,0==h[2].length)||Da(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var kb;var lb=p.document;kb=lb&&$a?db()||("CSS1Compat"==lb.compatMode?parseInt(ib,10):5):void 0;!bb&&!$a||$a&&9<=Number(kb)||bb&&jb("1.9.1");$a&&jb("9");function mb(){this.b="";this.f=nb}
mb.prototype.ha=!0;mb.prototype.ga=function(){return this.b};
function ob(a){return a instanceof mb&&a.constructor===mb&&a.f===nb?a.b:"type_error:TrustedResourceUrl"}
var nb={};function E(){this.b="";this.f=pb}
E.prototype.ha=!0;E.prototype.ga=function(){return this.b};
function qb(a){return a instanceof E&&a.constructor===E&&a.f===pb?a.b:"type_error:SafeUrl"}
var rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function sb(a){if(a instanceof E)return a;a=a.ha?a.ga():String(a);rb.test(a)||(a="about:invalid#zClosurez");return tb(a)}
var pb={};function tb(a){var b=new E;b.b=a;return b}
tb("about:blank");function ub(){this.b=""}
ub.prototype.ha=!0;ub.prototype.ga=function(){return this.b};
function vb(a){var b=new ub;b.b=a;return b}
vb("<!DOCTYPE html>");vb("");vb("<br>");function wb(a,b){var c=b instanceof E?b:sb(b);a.href=qb(c)}
function xb(a,b){a.src=ob(b)}
;function yb(a,b){this.b=q(a)?a:0;this.f=q(b)?b:0}
yb.prototype.equals=function(a){return a instanceof yb&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
yb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
yb.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
yb.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};function zb(a,b){this.width=a;this.height=b}
k=zb.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ab(a){var b=document;return r(a)?b.getElementById(a):a}
function Bb(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Cb(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Db(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Eb(a){Fb();var b=new mb;b.b=a;return b}
var Fb=pa;function Gb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Hb=(new Date).getTime();function Ib(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Jb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var F=1518500249}else m=d^f^h,F=1859775393;else 60>c?(m=d&f|h&(d|f),F=2400959708):(m=d^f^h,F=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+F+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[m++]=a[d++],w++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,w;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Kb(a,b,c){var d=[],e=[];if(1==(sa(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Lb(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Lb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Lb(a){var b=Jb();b.update(a);return b.ya().toLowerCase()}
;function Mb(a){this.b=a||{cookie:""}}
k=Mb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ca(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ca(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Nb=new Mb("undefined"==typeof document?null:document);Nb.f=3950;function Ob(){var a=[],b=Ib(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Mb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Mb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Kb(Ib(d),b,a||null)].join(" "):null}return null}
;function Pb(a,b,c){this.h=c;this.g=a;this.i=b;this.f=0;this.b=null}
Pb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Qb(a,b){a.i(b);a.f<a.h&&(a.f++,b.next=a.b,a.b=b)}
;function Rb(a){p.setTimeout(function(){throw a;},0)}
var Sb;
function Tb(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.na;c.na=null;a()}};
return function(a){d.next={na:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function Ub(){this.f=this.b=null}
var Wb=new Pb(function(){return new Vb},function(a){a.reset()},100);
Ub.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Vb(){this.next=this.scope=this.b=null}
Vb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Vb.prototype.reset=function(){this.next=this.scope=this.b=null};function Xb(a,b){Yb||Zb();$b||(Yb(),$b=!0);var c=ac,d=Wb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Yb;function Zb(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);Yb=function(){a.then(bc)}}else Yb=function(){var a=bc;
!ua(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Sb||(Sb=Tb()),Sb(a)):p.setImmediate(a)}}
var $b=!1,ac=new Ub;function bc(){for(var a;a=ac.remove();){try{a.b.call(a.scope)}catch(b){Rb(b)}Qb(Wb,a)}$b=!1}
;var cc=D("Firefox"),dc=(D("Chrome")||D("CriOS"))&&!D("Edge");function G(){this.f=this.f;this.F=this.F}
G.prototype.f=!1;G.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function ec(a,b){a.f?q(void 0)?b.call(void 0):b():(a.F||(a.F=[]),a.F.push(q(void 0)?v(b,void 0):b))}
G.prototype.l=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function fc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function gc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ta(d)?gc.apply(null,d):fc(d)}}
;var hc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function ic(){}
ic.prototype.next=function(){throw hc;};
ic.prototype.X=function(){return this};
function jc(a){if(a instanceof ic)return a;if("function"==typeof a.X)return a.X(!1);if(ta(a)){var b=0,c=new ic;c.next=function(){for(;;){if(b>=a.length)throw hc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function kc(a,b){if(ta(a))try{C(a,b,void 0)}catch(c){if(c!==hc)throw c;}else{a=jc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==hc)throw c;}}}
function lc(a){if(ta(a))return Ja(a);a=jc(a);var b=[];kc(a,function(a){b.push(a)});
return b}
;function mc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function nc(a){a=String(a);if(mc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function oc(a){var b=[];pc(new qc,a,b);return b.join("")}
function qc(){}
function pc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(sa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),pc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),rc(d,c),c.push(":"),pc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":rc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var sc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},tc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function rc(a,b){b.push('"',a.replace(tc,function(a){var b=sc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),sc[a]=b);return b}),'"')}
;function uc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function vc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function H(a,b){this.b=0;this.m=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=pa)try{var c=this;a.call(b,function(a){wc(c,2,a)},function(a){wc(c,3,a)})}catch(d){wc(this,3,d)}}
function xc(){this.next=this.context=this.f=this.g=this.b=null;this.h=!1}
xc.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.h=!1};
var yc=new Pb(function(){return new xc},function(a){a.reset()},100);
function zc(a,b,c){var d=yc.get();d.g=a;d.f=b;d.context=c;return d}
function Ac(a){return new H(function(b,c){c(a)})}
H.prototype.then=function(a,b,c){return Bc(this,ua(a)?a:null,ua(b)?b:null,c)};
uc(H);function Cc(a,b){return Bc(a,null,b,void 0)}
H.prototype.cancel=function(a){0==this.b&&Xb(function(){var b=new Dc(a);Ec(this,b)},this)};
function Ec(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Ec(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Fc(c),Gc(c,e,3,b)))}a.g=null}else wc(a,3,b)}
function Hc(a,b){a.f||2!=a.b&&3!=a.b||Ic(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Bc(a,b,c,d){var e=zc(null,null,null);e.b=new H(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Dc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Hc(a,e);return e.b}
H.prototype.w=function(a){this.b=0;wc(this,2,a)};
H.prototype.A=function(a){this.b=0;wc(this,3,a)};
function wc(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof H){Hc(d,zc(e||pa,f||null,a));var g=!0}else if(vc(d))d.then(e,f,a),g=!0;else{if(wa(d))try{var h=d.then;if(ua(h)){Jc(d,h,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.m=c,a.b=b,a.g=null,Ic(a),3!=b||c instanceof Dc||Kc(a,c))}}
function Jc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ic(a){a.j||(a.j=!0,Xb(a.u,a))}
function Fc(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
H.prototype.u=function(){for(var a;a=Fc(this);)Gc(this,a,this.b,this.m);this.j=!1};
function Gc(a,b,c,d){if(3==c&&b.f&&!b.h)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Lc(b,c,d);else try{b.h?b.g.call(b.context):Lc(b,c,d)}catch(e){Mc.call(null,e)}Qb(yc,b)}
function Lc(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Kc(a,b){a.i=!0;Xb(function(){a.i&&Mc.call(null,b)})}
var Mc=Rb;function Dc(a){B.call(this,a)}
z(Dc,B);Dc.prototype.name="cancel";function I(a){G.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
z(I,G);k=I.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Nc(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Ha(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.D(b)}}
k.D=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=pa):(c&&Ia(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Oc(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;g=this.h.pop();)this.D(g)}}return 0!=e}return!1};
function Oc(a,b,c){Xb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.D,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.l=function(){I.o.l.call(this);this.clear();this.h.length=0};function Pc(a){this.b=a}
Pc.prototype.set=function(a,b){q(b)?this.b.set(a,oc(b)):this.b.remove(a)};
Pc.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return nc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Pc.prototype.remove=function(a){this.b.remove(a)};function Qc(a){this.b=a}
z(Qc,Pc);function Rc(a){this.data=a}
function Sc(a){return!q(a)||a instanceof Rc?a:new Rc(a)}
Qc.prototype.set=function(a,b){Qc.o.set.call(this,a,Sc(b))};
Qc.prototype.f=function(a){a=Qc.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Qc.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function J(a){this.b=a}
z(J,Qc);J.prototype.set=function(a,b,c){if(b=Sc(b)){if(c){if(c<y()){J.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}J.o.set.call(this,a,b)};
J.prototype.f=function(a,b){var c=J.o.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<y()||!!d&&d>y()}if(d)J.prototype.remove.call(this,a);else return c}};function Tc(a){this.b=a}
z(Tc,J);function Uc(){}
;function Vc(){}
z(Vc,Uc);Vc.prototype.clear=function(){var a=lc(this.X(!0)),b=this;C(a,function(a){b.remove(a)})};function Wc(a){this.b=a}
z(Wc,Vc);k=Wc.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.X=function(a){var b=0,c=this.b,d=new ic;d.next=function(){if(b>=c.length)throw hc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Xc(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(Xc,Wc);function Yc(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(Yc,Wc);var Zc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function K(a){return a.match(Zc)}
function $c(a){return a?decodeURI(a):a}
function ad(a,b,c){if(sa(b))for(var d=0;d<b.length;d++)ad(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function bd(a){var b=[],c;for(c in a)ad(c,a[c],b);return b.join("&")}
function cd(a,b){var c=bd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var dd=!1,ed="";function fd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(dd=!0,a.description)){ed=fd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){dd=!0;ed="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],dd=!(!a||!a.enabledPlugin))){ed=fd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");dd=!0;ed=fd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");dd=!0;ed="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),dd=!0,ed=fd(b.GetVariable("$version"))}catch(c){}})();
var gd=dd,hd=ed;var L=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},id="Microsoft Internet Explorer"==navigator.appName;
function jd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;var kd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",kd,void 0);function M(a){jd(kd,arguments)}
function N(a,b){return a in kd?kd[a]:b}
function O(a){return N(a,void 0)}
;function P(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=N("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),M("ERRORS",c))}
function ld(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){P(b)}}:a}
;function Q(a){return N("EXPERIMENT_FLAGS",{})[a]}
;var md={};function nd(a){return md[a]||(md[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function od(a,b){return a?a.dataset?a.dataset[nd(b)]:a.getAttribute("data-"+b):null}
function pd(a){a&&(a.dataset?a.dataset[nd("loaded")]="true":a.setAttribute("data-loaded","true"))}
;function R(a,b){ua(a)&&(a=ld(a));return window.setTimeout(a,b)}
;var sd=u("ytPubsubPubsubInstance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.D;I.prototype.publish=I.prototype.K;I.prototype.clear=I.prototype.clear;t("ytPubsubPubsubInstance",sd,void 0);var td=u("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",td,void 0);var ud=u("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",ud,void 0);var vd=u("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",vd,void 0);
function wd(a,b){var c=xd();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){td[d]&&b.apply(window,c)};
try{vd[a]?f():R(f,0)}catch(g){P(g)}},void 0);
td[d]=!0;ud[a]||(ud[a]=[]);ud[a].push(d);return d}return 0}
function xd(){return u("ytPubsubPubsubInstance")}
function yd(a){ud[a]&&(a=ud[a],C(a,function(a){td[a]&&delete td[a]}),a.length=0)}
function zd(a){var b=xd();if(b)if(b.clear(a),a)yd(a);else for(var c in ud)yd(c)}
function Ad(a,b){var c=xd();c&&c.publish.apply(c,arguments)}
function Bd(a){var b=xd();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete td[a]}))}
;var Cd=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Dd=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ed(a,b){var c=Fd(a),d=document.getElementById(c),e=d&&od(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=wd(c,b);var g=""+(b[xa]||(b[xa]=++ya));Gd[g]=e}f||(d=Hd(a,c,function(){od(d,"loaded")||(pd(d),Ad(c),R(x(zd,c),0))}))}}
function Hd(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
xb(d,Eb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Id(a){a=Fd(a);var b=document.getElementById(a);b&&(zd(a),b.parentNode.removeChild(b))}
function Jd(a,b){if(a&&b){var c=""+(b[xa]||(b[xa]=++ya));(c=Gd[c])&&Bd(c)}}
function Fd(a){var b=document.createElement("a");wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ea(a)}
var Gd={};function Kd(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Cd,""),c=c.replace(Dd,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ed(a,b)}
;var Ld=null;function Md(){var a=N("BG_I",null),b=N("BG_IU",null),c=N("BG_P",void 0);b?Kd(b,function(){window.botguard?Nd(c):(Id(b),P(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),Nd(c))}
function Nd(a){Ld=new window.botguard.bg(a);Q("botguard_periodic_refresh")?L():Q("botguard_always_refresh")}
function Od(){return null!=Ld}
function Pd(){return Ld?Ld.invoke():null}
;y();var Qd=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Rd(){if(!Qd)return null;var a=Qd();return"open"in a?a:null}
function Sd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Td(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?sa(b[f])?Ka(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Ud(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=Td(d[1]||"");for(var e in b)d[e]=b[e];return cd(a,d)+c}
;var Vd={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Wd=!1;
function Xd(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=K(a)[1]||null,e=$c(K(a)[3]||null);d&&e?(d=c,c=K(a),d=K(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?$c(K(c)[3]||null)==e&&(Number(K(c)[4]||null)||null)==(Number(K(a)[4]||null)||null):!0;for(var f in Vd){if((e=d=N(Vd[f]))&&!(e=c)){var g=a;e=f;var h=N("CORS_HEADER_WHITELIST")||{};e=(g=$c(K(g)[3]||null))?(h=h[g])?0<=Fa(h,e):!1:!0}e&&(b[f]=d)}return b}
function Yd(a,b){var c=N("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.kb&&(!$c(K(a)[3]||null)||b.withCredentials||$c(K(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.B&&b.B[c])}
function Zd(a,b){var c=b.format||"JSON";b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=N("XSRF_FIELD_NAME",void 0),e=N("XSRF_TOKEN",void 0),f=b.ab;f&&(f[d]&&delete f[d],a=Ud(a,f||{}));f=b.postBody||"";var g=b.B;Yd(a,b)&&(g||(g={}),g[d]=e);g&&r(f)&&(d=Td(f),Wa(d,g),f=b.ra&&"JSON"==b.ra?JSON.stringify(d):bd(d));d=f||g&&!Sa(g);!Wd&&d&&"POST"!=b.method&&(Wd=!0,P(Error("AJAX request with postData should use POST")));var h=
!1,l,m=$d(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d=Sd(a),e=null;if(d||400<=a.status&&500>a.status)e=ae(c,a,b.jb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||p;d?b.P&&b.P.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ia&&b.Ia.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.Z&&0<b.timeout&&(l=R(function(){h||(h=!0,m.abort(),window.clearTimeout(l),b.Z.call(b.context||p,m))},b.timeout))}
function ae(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?be(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=ce(a)})}c&&de(d);
return d}
function de(a){if(wa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=vb(a[b]);a[c]=d}else de(a[b])}}
function be(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ce(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function ee(a,b){b.method="POST";b.B||(b.B={});Zd(a,b)}
function $d(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ld(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Rd();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=Xd(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var fe={},ge=0;function he(a,b){a&&(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?$d(a,b):ie(a,b))}
function ie(a,b){var c=new Image,d=""+ge++;fe[d]=c;c.onload=c.onerror=function(){b&&fe[d]&&b();delete fe[d]};
c.src=a}
;var je={value:0};
function ke(a,b,c,d,e,f){b=void 0===b?"ERROR":b;e=void 0===e?!1:e;f=f||{};f.name=c||N("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=je.value)){e=a.stacktrace;c=a.columnNumber;d=u("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(F){h="Not available",
g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(F){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(le[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=a.fileName;h={ab:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,
1E3),line:h,level:b,"client.name":f.name},B:{url:N("PAGE_NAME",window.location.href),file:l},method:"POST"};f.version&&(h["client.version"]=f.version);e&&(h.B.stack=e);for(var m in f)h.B["client."+m]=f[m];if(m=N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var w in m)h.B[w]=m[w];Zd("/error_204",h);le[a.message]=!0;je.value++}}}
var le={};var me=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",me,void 0);function ne(a){jd(me,arguments)}
;function oe(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):R(a,c||0)}
function pe(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
;var qe=[],re=!1;function se(){function a(){re=!0;"google_ad_status"in window?M("DCLKSTAT",1):M("DCLKSTAT",2)}
Kd("//static.doubleclick.net/instream/ad_status.js",a);qe.push(oe(function(){re||"google_ad_status"in window||(Jd("//static.doubleclick.net/instream/ad_status.js",a),M("DCLKSTAT",3))},1))}
function te(){return parseInt(N("DCLKSTAT",0),10)}
;var ue=0,ve=u("ytDomDomGetNextId")||function(){return++ue};
t("ytDomDomGetNextId",ve,void 0);var we={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in we||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
xe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ra=u("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Ra,void 0);var ye=u("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",ye,void 0);function ze(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Qa(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Ae(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ze(a,b,c,d);if(e)return e;e=++ye.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new xe(d);if(!Db(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new xe(b);
b.currentTarget=a;return c.call(a,b)};
g=ld(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ra[e]=[a,b,c,g,d];return e}
function Be(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Ra){var b=Ra[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ra[a]}}))}
;function Ce(){if(null==u("_lact",window)){var a=parseInt(N("LACT"),10);a=isFinite(a)?y()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&S();Ae(document,"keydown",S);Ae(document,"keyup",S);Ae(document,"mousedown",S);Ae(document,"mouseup",S);wd("page-mouse",S);wd("page-scroll",S);wd("page-resize",S)}}
function S(){null==u("_lact",window)&&(Ce(),u("_lact",window));var a=y();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);(a=u("ytglobal.ytUtilActivityCallback_"))&&a()}
function De(){var a=u("_lact",window);return null==a?-1:Math.max(y()-a,0)}
var Ee=S;function Fe(a,b,c,d,e){this.g=a;this.i=b;this.h=c;this.f=d;this.b=e}
var Ge=1;function He(a){var b={};void 0!==a.g?b.trackingParams=a.g:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.f&&(b.elementIndex=a.f));void 0!==a.b&&(b.dataElement=He(a.b));return b}
;var Ie={log_event:"events",log_event2:"events",log_interaction:"interactions"},Je=Object.create(null);Je.log_event="GENERIC_EVENT_LOGGING";Je.log_event2="GENERIC_EVENT_LOGGING";Je.log_interaction="INTERACTION_LOGGING";var Ke={},Le={},Me=0,T=u("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",T,void 0);var Ne=u("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",Ne,void 0);var Oe=u("ytLoggingTransportDispatchedStats_")||{};
t("ytLoggingTransportDispatchedStats_",Oe,void 0);var Pe=u("ytLoggingTransportCapturedTime_")||{};t("ytytLoggingTransportCapturedTime_",Pe,void 0);function Qe(a,b){Le[a.endpoint]=b;if(a.Y){var c=a.Y;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Ne[a.Y.token]=d;c=Re(a.endpoint,a.Y.token)}else c=Re(a.endpoint);c.push(a.qa);d=Q("web_logging_max_batch");c.length>=(Number(d||0)||20)?Se():Te()}
function Se(){window.clearTimeout(Me);if(!Sa(T)){for(var a in T){var b=Ke[a];if(!b){var c=Le[a];if(!c)continue;b=new c;Ke[a]=b}c=void 0;var d=a,e=b,f=Ie[d],g=Oe[d]||{};Oe[d]=g;b=Math.round(L());for(c in T[d]){var h=e.b;h={client:{hl:h.Ga,gl:h.Fa,clientName:h.Ea,clientVersion:h.innertubeContextClientVersion}};N("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});h={context:h};h[f]=Re(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;
h.requestTimeMs=b;var l=Ne[c];if(l)a:{var m=h,w=c;if(l.videoId)var F="VIDEO";else if(l.playlistId)F="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:w,scope:F}]}delete Ne[c];Ue(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete T[a]}Sa(T)||
Te()}}
function Te(){window.clearTimeout(Me);Me=R(Se,N("LOGGING_BATCH_TIMEOUT",1E4))}
function Re(a,b){b||(b="");T[a]=T[a]||{};T[a][b]=T[a][b]||[];return T[a][b]}
;function Ve(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||L());f[a]=b;f.context={lastActivityMs:String(d?-1:De())};a=Q("web_system_health_gel2")&&"systemHealthCaptured"==a?"log_event2":"log_event";Qe({endpoint:a,qa:f,Y:e},c)}
;function We(a,b,c){Xe(Ye,{attachChild:{csn:a,parentVisualElement:He(b),visualElements:[He(c)]}},void 0)}
function Ze(a,b){var c=Ye;if(Q("interaction_logging_on_gel_web"))b.forEach(function(b){Ve("visualElementShown",{csn:a,ve:He(b),eventType:1},c)});
else{var d=Ga(b,function(a){return He(a)});
Xe(c,{visibilityUpdate:{csn:a,visualElements:d}})}}
function Xe(a,b,c){b.eventTimeMs=Math.round(L());b.lactMs=De();c&&(b.clientData=c);Qe({endpoint:"log_interaction",qa:b},a)}
;function $e(){if(!af&&!bf||!window.JSON)return null;try{var a=af.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=bf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var bf,cf=new Xc;bf=cf.isAvailable()?new Tc(cf):null;var af,df=new Yc;af=df.isAvailable()?new Tc(df):null;function ef(){var a=N("ROOT_VE_TYPE",void 0);return a?new Fe(void 0,a,void 0):null}
function ff(){var a=N("client-screen-nonce",void 0);a||(a=N("EVENT_ID",void 0));return a}
;function gf(a,b,c){Nb.set(""+a,b,c,"/","youtube.com",!1)}
;function hf(a){if(a){a=a.itct||a.ved;var b=u("yt.logging.screen.storeParentElement");a&&b&&b(new Fe(a))}}
;function jf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=N("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=N("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=$c(K(window.location.href)[3]||null);f&&e.push(f);f=$c(K(d)[3]||null);if(0<=Fa(e,f)||!f&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(e=document.createElement("a"),wb(e,d),d=e.href),d){f=K(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
ff();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Ea(d).toString(36),e=b?bd(b):"",gf(d,e,h||5),hf(b))}else h="ST-"+Ea(d).toString(36),d=b?bd(b):"",gf(h,d,5),hf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var w=void 0===w?window:w;c=w.location;a=cd(a,l)+m;a=a instanceof E?a:sb(a);c.href=qb(a)}return!0}
;var kf=u("yt.abuse.botguardInitialized")||Od;t("yt.abuse.botguardInitialized",kf,void 0);var lf=u("yt.abuse.invokeBotguard")||Pd;t("yt.abuse.invokeBotguard",lf,void 0);var mf=u("yt.abuse.dclkstatus.checkDclkStatus")||te;t("yt.abuse.dclkstatus.checkDclkStatus",mf,void 0);var nf=u("yt.player.exports.navigate")||jf;t("yt.player.exports.navigate",nf,void 0);var of=u("yt.util.activity.init")||Ce;t("yt.util.activity.init",of,void 0);var pf=u("yt.util.activity.getTimeSinceActive")||De;
t("yt.util.activity.getTimeSinceActive",pf,void 0);var qf=u("yt.util.activity.setTimestamp")||Ee;t("yt.util.activity.setTimestamp",qf,void 0);function rf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function Ye(a){this.b=a||{apiaryHost:O("APIARY_HOST"),hb:O("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!N("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:O("GAPI_HINT_PARAMS"),innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),Ea:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ga:O("INNERTUBE_CONTEXT_HL"),Fa:O("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:O("XHR_APIARY_HOST")||"",Ha:O("INNERTUBE_HOST_OVERRIDE")||""}}
function Ue(a,b,c){var d={};!N("VISITOR_DATA")&&.01>Math.random()&&P(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":N("VISITOR_DATA","")},B:c,ra:"JSON",Z:d.Z,P:function(a,b){d.P&&d.P(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=Ob();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=N("SESSION_INDEX",0));var g="",h=a.b.Ha;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);ee(""+g+rf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey,e)}
;function sf(a){a=a||{};this.url=a.url||"";this.args=a.args||Ua(tf);this.assets=a.assets||{};this.attrs=a.attrs||Ua(uf);this.params=a.params||Ua(vf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var tf={enablejsapi:1},uf={},vf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function wf(a){a instanceof sf||(a=new sf(a));return a}
function xf(a){var b=new sf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ra(d)?Ua(d):d}return b}
;function yf(a){G.call(this);this.b=[];this.g=a||this}
n(yf,G);function zf(a,b,c,d){d=ld(v(d,a.g));d={target:b,name:c,ma:d};b.addEventListener(c,d.ma,void 0);a.b.push(d)}
function Af(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ma)}}
yf.prototype.l=function(){Af(this);G.prototype.l.call(this)};function Bf(){this.b=this.minor=this.major=0;var a=u("window.navigator.plugins"),b=u("window.navigator.mimeTypes");a=a&&a["Shockwave Flash"];b=b&&b["application/x-shockwave-flash"];if(b=a&&b&&b.enabledPlugin&&a.description||""){a=b.indexOf("Shockwave Flash");0<=a&&(b=b.substr(a+15));a=b.split(" ");var c="";b="";for(var d=0,e=a.length;d<e;d++)if(c)if(b)break;else b=a[d];else c=a[d];c=c.split(".");a=parseInt(c[0],10)||0;c=parseInt(c[1],10)||0;d=0;if("r"==b.charAt(0)||"d"==b.charAt(0))d=parseInt(b.substr(1),
10)||0;b=[a,c,d]}else b=[0,0,0];this.major=b[0];this.minor=b[1];this.b=b[2];if(0>=this.major){if(id)try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(m){f=null}else{var g=document.body;var h=document.createElement("object");h.setAttribute("type","application/x-shockwave-flash");f=g.appendChild(h)}if(f&&"GetVariable"in f)try{var l=f.GetVariable("$version")}catch(m){l=""}g&&h&&g.removeChild(h);(f=l||"")?(f=f.split(" ")[1].split(","),f=[parseInt(f[0],10)||0,parseInt(f[1],10)||0,parseInt(f[2],
10)||0]):f=[0,0,0];this.major=f[0];this.minor=f[1];this.b=f[2]}}
qa(Bf);var Cf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Df(a){a=a||"";if(window.spf){var b=a.match(Cf);spf.style.load(a,b?b[1]:"",void 0)}else Ef(a)}
function Ef(a){var b=Ff(a),c=document.getElementById(b),d=c&&od(c,"loaded");d||c&&!d||(c=Gf(a,b,function(){od(c,"loaded")||(pd(c),Ad(b),R(x(zd,b),0))}))}
function Gf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Eb(a);d.rel="stylesheet";d.href=ob(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Ff(a){var b=document.createElement("A");a=tb(a);wb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ea(b)}
;var U={},Hf=(U["api.invalidparam"]=2,U.auth=150,U["drm.auth"]=150,U["heartbeat.net"]=150,U["heartbeat.servererror"]=150,U["heartbeat.stop"]=150,U["html5.unsupportedads"]=5,U["fmt.noneavailable"]=5,U["fmt.decode"]=5,U["fmt.unplayable"]=5,U["html5.missingapi"]=5,U["html5.unsupportedlive"]=5,U["drm.unavailable"]=5,U);var If={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Jf;var Kf=La;Kf=Kf.toLowerCase();if(-1!=Kf.indexOf("android")){var Lf=Kf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Lf)Jf=parseFloat(Lf[1]);else{var Mf=[],Nf=0,Of;for(Of in If)Mf[Nf++]=Of;var Pf=Kf.match("("+Mf.join("|")+")");Jf=Pf?If[Pf[0]]:0}}else Jf=void 0;var Qf=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Rf=['audio/mp4; codecs="mp4a.40.2"'];var Sf=u("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",Sf,void 0);var Tf=0;function Uf(a){Sf[a]=Sf[a]||{count:0};var b=Sf[a];b.count++;b.time=L();Tf||(Tf=oe(Vf,0));return 10<b.count?(11==b.count&&ke(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function Vf(){var a=L(),b;for(b in Sf)6E4<a-Sf[b].time&&delete Sf[b];Tf=0}
;function Wf(a,b){this.version=a;this.args=b}
;function Xf(a){this.topic=a}
Xf.prototype.toString=function(){return this.topic};var Yf=u("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.D;I.prototype.publish=I.prototype.K;I.prototype.clear=I.prototype.clear;t("ytPubsub2Pubsub2Instance",Yf,void 0);var Zf=u("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",Zf,void 0);var $f=u("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",$f,void 0);var ag=u("ytPubsub2Pubsub2IsAsync")||{};t("ytPubsub2Pubsub2IsAsync",ag,void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function bg(a,b){var c=u("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function cg(){var a=N("TIMING_TICK_EXPIRATION");a||(a={},M("TIMING_TICK_EXPIRATION",a));return a}
function dg(){var a=cg(),b;for(b in a)pe(a[b]);M("TIMING_TICK_EXPIRATION",{})}
;function eg(a,b){Wf.call(this,1,arguments)}
n(eg,Wf);function fg(a,b){Wf.call(this,1,arguments)}
n(fg,Wf);var gg=new Xf("aft-recorded"),hg=new Xf("timing-sent");var V=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var ig=y().toString();var jg={vc:!0},kg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},lg="ap c cver ei srt yt_fss yt_li ba vpil vpni yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),mg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),ng=!1;
function og(a){if("_"!=a[0]){var b=a;V.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),V.mark(b))}b=pg();var c=L();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=cg();if(c=b[a])pe(c),b[a]=0;qg()["tick_"+a]=void 0;L();Q("csi_on_gel")?(b=rg(),"_start"==a?Uf("baseline_"+b)||Ve("latencyActionBaselined",{clientActionNonce:b},Ye,void 0):Uf("tick_"+a+"_"+b)||Ve("latencyActionTicked",{tickName:a,clientActionNonce:b},Ye,void 0),a=!0):a=!1;if(a=!a)a=!u("yt.timing.pingSent_");if(a&&(b=O("TIMING_ACTION"),
a=pg(),u("ytglobal.timingready_")&&b&&a._start&&(b=sg()))){Q("tighter_critical_section")&&!ng&&(bg(gg,new eg(Math.round(b-a._start),void 0)),ng=!0);b=!0;c=N("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&tg()}}
function ug(){var a=vg().info.yt_lt="hot_bg";qg().info_yt_lt=a;if(Q("csi_on_gel"))if("yt_lt"in kg){var b={},c=kg.yt_lt;0<=Fa(mg,c)&&(a=!!a);c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=rg();c=Object.keys(b).join("");Uf("info_"+c+"_"+a)||(b.clientActionNonce=a,Ve("latencyActionInfo",b,Ye))}else 0<=Fa(lg,"yt_lt")||P(Error("Unknown label yt_lt logged with GEL CSI."))}
function sg(){var a=pg();if(a.aft)return a.aft;for(var b=N("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function tg(){dg();if(!Q("csi_on_gel")){var a=pg(),b=vg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&sa(a[d])){var e=d.slice(1);if(e in jg){var f=Ga(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=u("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))wg(f,e),xg(),yg(),zg(!1,void 0),N("TIMING_ACTION")&&M("PREVIOUS_ACTION",N("TIMING_ACTION")),M("TIMING_ACTION","")}else{var g=N("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:N("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+u("ytplayer.config.assets.js");(l=V.getEntriesByName?V.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=sg();Ag()&&"youtube"==g&&(ug(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=L();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=u("ytdebug.logTiming"))&&a(f,b);wg(f,e,void 0);bg(hg,new fg(b.aft+(h||0),void 0))}}}
var yg=v(V.clearResourceTimings||V.webkitClearResourceTimings||V.mozClearResourceTimings||V.msClearResourceTimings||V.oClearResourceTimings||pa,V);
function wg(a,b,c){if(Q("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||he(a,void 0)}catch(f){he(a,void 0)}else he(a);zg(!0,c)}
function rg(){var a=vg().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=y();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(ig)for(b=1,c=0;c<ig.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^ig.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");vg().nonce=a}return a}
function pg(){return vg().tick}
function qg(){var a=vg();"gel"in a||(a.gel={});return a.gel}
function vg(){return u("ytcsi.data_")||xg()}
function xg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function zg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Ag(){var a=pg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==vg().info.yt_pvis}
;function Bg(a,b){G.call(this);this.u=this.j=a;this.O=b;this.A=!1;this.g={};this.U=this.N=null;this.J=new I;ec(this,x(fc,this.J));this.i={};this.G=this.V=this.h=this.da=this.b=null;this.R=!1;this.H=this.w=this.m=this.M=null;this.W={};this.va=["onReady"];this.S=new yf(this);ec(this,x(fc,this.S));this.ba=null;this.ka=NaN;this.T={};Cg(this);this.C("onDetailedError",v(this.La,this));this.C("onTabOrderChange",v(this.xa,this));this.C("onTabAnnounce",v(this.la,this));this.C("WATCH_LATER_VIDEO_ADDED",v(this.Ma,
this));this.C("WATCH_LATER_VIDEO_REMOVED",v(this.Na,this));cc||(this.C("onMouseWheelCapture",v(this.Ja,this)),this.C("onMouseWheelRelease",v(this.Ka,this)));this.C("onAdAnnounce",v(this.la,this));this.I=new yf(this);ec(this,x(fc,this.I));this.ca=!1;this.aa=null}
z(Bg,G);var Dg=["fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=Bg.prototype;k.ja=function(a,b){this.f||(Eg(this,a),Fg(this,b),this.A&&Gg(this))};
function Eg(a,b){a.da=b;a.b=xf(b);a.h=a.b.attrs.id||a.h;"video-player"==a.h&&(a.h=a.O,a.b.attrs.id=a.O);a.u.id==a.h&&(a.h+="-player",a.b.attrs.id=a.h);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.O;a.V||(a.V=Hg(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.u.style.width=Gb(Number(c)||c));if(c=a.b.attrs.height)a.u.style.height=Gb(Number(c)||c)}
k.Aa=function(){return this.da};
function Gg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Ig(a){var b=a.b&&a.b.args;if(b&&b.fflags){var c=b.el;b=b.fflags;if((!c||"profilepage"==c)&&0<=b.indexOf("web_player_disable_flash_watch=true")||"embedded"==c&&0<=b.indexOf("web_player_disable_flash_embed=true"))return!1}if(!q(a.b.disable.flash)){c=a.b.disable;b=Bf.getInstance();var d=a.b.minVersion;d="string"==typeof d?d.split("."):[d,void 0,void 0];d[0]=parseInt(d[0],10)||0;d[1]=parseInt(d[1],10)||0;d[2]=parseInt(d[2],10)||0;c.flash=!(b.major>d[0]||b.major==d[0]&&b.minor>d[1]||b.major==
d[0]&&b.minor==d[1]&&b.b>=d[2])}return!a.b.disable.flash}
function Jg(a,b){var c=a.b,d=c&&c.args&&c.args.fflags;!d||0>d.indexOf("web_player_flash_fallback_killswitch=true")||b&&(5!=(Hf[b.errorCode]||5)||-1==Dg.indexOf(b.errorCode))||!Ig(a)||((d=W(a))&&d.stopVideo&&d.stopVideo(),d&&d.getUpdatedConfigurationData&&(c=d.getUpdatedConfigurationData(),c=wf(c)),c.args.autoplay=1,c.args.html5_unavailable="1",Eg(a,c),Fg(a,"flash"))}
function Fg(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Ig(a))){if(!q(a.b.disable.html5)){c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Jf)var d=!0;else{a:{var e=c;c=u("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),t("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?Qf:Rf;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Kg(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Ig(a)?"flash":"unsupported":"html5"}("flash"==b?a.bb:a.cb).call(a)}}
function Kg(a){var b=!0,c=W(a);c&&a.b&&(a=a.b,b=od(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
k.cb=function(){if(!this.R){var a=Kg(this);if(a&&"html5"==Lg(this))this.G="html5",this.A||this.L();else if(Mg(this),this.G="html5",a&&this.m)this.j.appendChild(this.m),this.L();else{this.b.loaded=!0;var b=!1;this.M=v(function(){b=!0;var a=this.j,d=xf(this.b);u("yt.player.Application.create")(a,d);this.L()},this);
this.R=!0;a?this.M():(Kd(this.b.assets.js,this.M),Df(this.b.assets.css),Ng(this)&&!b&&t("yt.player.Application.create",null,void 0))}}};
k.bb=function(){var a=xf(this.b);if(!this.w){var b=W(this);b&&(this.w=document.createElement("SPAN"),this.w.tabIndex=0,zf(this.S,this.w,"focus",this.oa),this.H=document.createElement("SPAN"),this.H.tabIndex=0,zf(this.S,this.H,"focus",this.oa),b.parentNode&&b.parentNode.insertBefore(this.w,b),b.parentNode&&b.parentNode.insertBefore(this.H,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Lg(this))this.G="flash",this.A||this.L();else{Mg(this);this.G=
"flash";this.b.loaded=!0;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;var c=a.url;if(c){b=r(b)?Ab(b):b;var d=Ua(a.attrs);d.tabindex=0;var e=Ua(a.params);e.flashvars=bd(a.args);if(id){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;a=document.createElement("object");for(var f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type=
"application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.L()}};
k.oa=function(){W(this).focus()};
function W(a){var b=Ab(a.h);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.h));return b}
k.L=function(){if(!this.f){var a=W(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.R=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Jg(this);else{Cg(this);this.A=!0;a=W(this);a.addEventListener&&(this.N=Og(this,a,"addEventListener"));a.removeEventListener&&(this.U=Og(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Og(this,a,d))}for(var e in this.i)this.N(e,
this.i[e]);Gg(this);this.V&&this.V(this.g);this.J.K("onReady",this.g)}else this.ka=R(v(this.L,this),50)}};
function Og(a,b,c){var d=b[c];return function(){try{return a.ba=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ba=e,P(e,"WARNING"))}}}
function Cg(a){a.A=!1;if(a.U)for(var b in a.i)a.U(b,a.i[b]);for(var c in a.T)window.clearTimeout(parseInt(c,10));a.T={};a.N=null;a.U=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.C,a);a.g.removeEventListener=v(a.Sa,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.Ba,a);a.g.getPlayerType=v(a.Ca,a);a.g.getCurrentVideoConfig=v(a.Aa,a);a.g.loadNewVideoConfig=v(a.ja,a);a.g.isReady=v(a.eb,a)}
k.eb=function(){return this.A};
k.C=function(a,b){if(!this.f){var c=Hg(this,b);if(c){if(!(0<=Fa(this.va,a)||this.i[a])){var d=Pg(this,a);this.N&&this.N(a,d)}this.J.subscribe(a,c);"onReady"==a&&this.A&&R(x(c,this.g),0)}}};
k.Sa=function(a,b){if(!this.f){var c=Hg(this,b);c&&Nc(this.J,a,c)}};
function Hg(a,b){var c=b;if("string"==typeof b){if(a.W[b])return a.W[b];c=function(){var a=u(b);a&&a.apply(p,arguments)};
a.W[b]=c}return c?c:null}
function Pg(a,b){var c="ytPlayer"+b+a.O,d=v(function(a){if("html5"==Lg(this)){var c=this.b&&this.b.args&&this.b.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.J.K(b,a);return}}var d=R(v(function(){if(!this.f){this.J.K(b,a);var c=this.T,e=String(d);e in c&&delete c[e]}},this),0);
Ta(this.T,String(d))},a);
a.i[b]=c;p[c]=d;return c}
k.xa=function(a){a=a?Cb:Bb;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.w||b==this.H||(b.focus(),b!=document.activeElement));)b=a(b)};
k.la=function(a){Ad("a11y-announce",a)};
k.La=function(a){Jg(this,a)};
k.Ma=function(a){Ad("WATCH_LATER_VIDEO_ADDED",a)};
k.Na=function(a){Ad("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ja=function(){if(!this.ca){if(dc){var a=document,b=a.scrollingElement?a.scrollingElement:cb||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement;a=a.parentWindow||a.defaultView;this.aa=$a&&jb("10")&&a.pageYOffset!=b.scrollTop?new yb(b.scrollLeft,b.scrollTop):new yb(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);zf(this.I,window,"scroll",this.Qa);zf(this.I,this.j,"touchmove",this.Pa)}else zf(this.I,this.j,"mousewheel",this.pa),zf(this.I,this.j,"wheel",this.pa);this.ca=
!0}};
k.Ka=function(){Af(this.I);this.ca=!1};
k.pa=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Qa=function(){window.scrollTo(this.aa.b,this.aa.f)};
k.Pa=function(a){a.preventDefault()};
k.Ca=function(){return this.G||Lg(this)};
k.Ba=function(){return this.ba};
function Lg(a){return(a=W(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Mg(a){og("dcp");a.cancel();Cg(a);a.G=null;a.b&&(a.b.loaded=!1);var b=W(a);"html5"==Lg(a)?Kg(a)||!Ng(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null):b&&b.destroy&&b.destroy();b=a.j;for(var c;c=b.firstChild;)b.removeChild(c);Af(a.S);a.w=null;a.H=null}
k.cancel=function(){this.M&&Jd(this.b.assets.js,this.M);window.clearTimeout(this.ka);this.R=!1};
k.l=function(){Mg(this);if(this.m&&this.b&&this.m.destroy)try{this.m.destroy()}catch(b){P(b)}this.W=null;for(var a in this.i)p[this.i[a]]=null;this.da=this.b=this.g=null;delete this.j;delete this.u;Bg.o.l.call(this)};
function Ng(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Qg={},Rg="player_uid_"+(1E9*Math.random()>>>0);function Sg(a){delete Qg[a.O]}
function Tg(a){var b="player";b=r(b)?Ab(b):b;a=wf(a);var c=Rg+"_"+(b[xa]||(b[xa]=++ya)),d=Qg[c];if(d)return d.ja(a),d.g;d=new Bg(b,c);Qg[c]=d;Ad("player-added",d.g);ec(d,x(Sg,d));R(function(){d.ja(a)},0);
return d.g}
;function Ug(a,b,c){if(wa(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Vg(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Ug(a)}
function Wg(a,b,c,d){if(wa(a)&&!sa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function X(a){var b=a.video_id||a.videoId;if(r(b)){var c=$e()||{},d=$e()||{};q(void 0)?d[b]=void 0:delete d[b];var e=y()+3E5,f=bf;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
function Xg(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
;function Yg(a){G.call(this);this.g=a;this.g.subscribe("command",this.sa,this);this.h={};this.i=!1}
z(Yg,G);k=Yg.prototype;k.start=function(){this.i||this.f||(this.i=!0,Zg(this.g,"RECEIVING"))};
k.sa=function(a,b){if(this.i&&!this.f){var c=b||{};switch(a){case "addEventListener":if(r(c.event)&&(c=c.event,!(c in this.h))){var d=v(this.Ua,this,c);this.h[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":r(c.event)&&$g(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=ah(a,b||{}),c=this.b[a].apply(this.b,c),(c=bh(a,c))&&this.i&&!this.f&&Zg(this.g,a,c))}}};
k.Ua=function(a,b){this.i&&!this.f&&Zg(this.g,a,this.ea(a,b))};
k.ea=function(a,b){if(null!=b)return{value:b}};
function $g(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
k.l=function(){var a=this.g;a.f||Nc(a.b,"command",this.sa,this);this.g=null;for(var b in this.h)$g(this,b);Yg.o.l.call(this)};function Y(a,b){Yg.call(this,b);this.b=a;this.start()}
z(Y,Yg);Y.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
Y.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function ah(a,b){switch(a){case "loadVideoById":return b=Ug(b),X(b),[b];case "cueVideoById":return b=Ug(b),X(b),[b];case "loadVideoByPlayerVars":return X(b),[b];case "cueVideoByPlayerVars":return X(b),[b];case "loadPlaylist":return b=Wg(b),X(b),[b];case "cuePlaylist":return b=Wg(b),X(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function bh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Y.prototype.ea=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Y.o.ea.call(this,a,b)};
Y.prototype.l=function(){Y.o.l.call(this);delete this.b};function ch(a,b,c,d){G.call(this);this.g=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.A=!!a;this.m=v(this.w,this);window.addEventListener("message",this.m)}
n(ch,G);
ch.prototype.w=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&r(a.data)){try{var b=nc(a.data)}catch(c){return}if(!(null==b||this.A&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.h=this.u=a.origin:P(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Fa(this.j,b.func))&&this.i(b.func,
b.args)}}};
ch.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=oc(a);c.postMessage(d,this.u)}catch(e){P(e,"WARNING")}}};
ch.prototype.l=function(){window.removeEventListener("message",this.m);G.prototype.l.call(this)};function dh(a,b,c){ch.call(this,a,b,c||N("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(dh,ch);function eh(){var a=!!N("WIDGET_ID_ENFORCE");a=this.f=new dh(a);var b=v(this.Ra,this);a.i=b;a.j=null;this.f.channel="widget";if(a=N("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=eh.prototype;k.Ra=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,fh(this,c)),this.i[c]=!0)}else this.ua(a,b)};
k.ua=function(){};
function fh(a,b){return v(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.fa());this.sendMessage("onReady");C(this.h,this.ta,this);this.h=[]};
k.fa=function(){return null};
function gh(a,b){a.sendMessage("infoDelivery",b)}
k.ta=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.ta({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function hh(a){eh.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Oa,this));this.addEventListener("onVideoProgress",v(this.Ya,this));this.addEventListener("onVolumeChange",v(this.Za,this));this.addEventListener("onApiChange",v(this.Ta,this));this.addEventListener("onPlaybackQualityChange",v(this.Va,this));this.addEventListener("onPlaybackRateChange",v(this.Wa,this));this.addEventListener("onStateChange",v(this.Xa,this))}
z(hh,eh);k=hh.prototype;k.ua=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Xg(a)){var c=b;if(wa(c[0])&&!sa(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Ug.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Vg.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Wg.apply(window,c)}c=d}X(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Xg(a)&&gh(this,this.fa())}};
k.Oa=function(){var a=v(this.za,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.fa=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ia(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
k.Xa=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());gh(this,a)};
k.Va=function(a){gh(this,{playbackQuality:a})};
k.Wa=function(a){gh(this,{playbackRate:a})};
k.Ta=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Za=function(){gh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Ya=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());gh(this,a)};
k.dispose=function(){hh.o.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function ih(){G.call(this);this.b=new I;ec(this,x(fc,this.b))}
z(ih,G);ih.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
ih.prototype.D=function(a){return this.f?!1:this.b.D(a)};
ih.prototype.j=function(a,b){this.f||this.b.K.apply(this.b,arguments)};function jh(a,b,c){ih.call(this);this.g=a;this.h=b;this.i=c}
z(jh,ih);function Zg(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(oc(a),d.h))}}
jh.prototype.l=function(){this.h=this.g=null;jh.o.l.call(this)};function kh(a,b,c){G.call(this);this.b=a;this.h=c;this.i=Ae(window,"message",v(this.j,this));this.g=new jh(this,a,b);ec(this,x(fc,this.g))}
z(kh,G);kh.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,r(a))){try{a=nc(a)}catch(d){return}a.command&&(b=this.g,b.f||b.j("command",a.command,a.data))}};
kh.prototype.l=function(){Be(this.i);this.b=null;kh.o.l.call(this)};function lh(){var a=Pa(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||N("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||Q("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=Ua(mh);return new H(function(c,d){b.P=function(a){Sd(a)?c(a):d(new nh("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new nh("Unknown request error","net.unknown"))};
b.Z=function(){d(new nh("Request timed out","net.timeout"))};
Zd(a,b)})}
var oh={fb:"net.badstatus",gb:"net.retryexhausted",TIMEOUT:"net.timeout",UNKNOWN:"net.unknown"};function nh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(nh,B);var ph=nh;function qh(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
qh.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),vc(a)?a:rh(a)):2===this.f&&b?(a=b.call(c,this.b),vc(a)?a:sh(a)):this};
qh.prototype.getValue=function(){return this.b};
uc(qh);function sh(a){var b=new qh;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function rh(a){var b=new qh;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function th(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof uh;this.isTimeout=a instanceof ph&&a.errorCode==oh.TIMEOUT;this.isCanceled=a instanceof Dc}
n(th,B);th.prototype.name="BiscottiError";function uh(){B.call(this,"Biscotti ID is missing from server")}
n(uh,B);uh.prototype.name="BiscottiMissingError";var mh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},vh=null;function wh(){if("1"===Pa(N("PLAYER_CONFIG",{}),"args","privembed"))return Ac(Error("Biscotti ID is not available in private embed mode"));vh||(vh=Cc(lh().then(xh),function(a){return yh(2,a)}));
return vh}
function xh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new uh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new uh;a=a.id;zh(a);vh=rh(a);Ah(18E5,2);return a}
function yh(a,b){var c=new th(b);zh("");vh=sh(c);0<a&&Ah(12E4,a-1);throw c;}
function Ah(a,b){R(function(){Cc(lh().then(xh,function(a){return yh(b,a)}),pa)},a)}
function zh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
;function Bh(){}
function Ch(a){if("1"!==Pa(N("PLAYER_CONFIG",{}),"args","privembed")){a&&!u("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",wh,void 0);try{try{var b=u("yt.ads.biscotti.getId_");var c=b?b():wh()}catch(d){c=Ac(d)}c.then(Dh,Bh);R(Ch,18E5)}catch(d){P(d)}}}
var Eh=0;
function Dh(a){a:{try{var b=window.top.location.href}catch(Ma){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Hb,flash:hd||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c=void 0===c?A:c;try{var d=c.history.length}catch(Ma){d=0}b.u_his=d;b.u_java=!!A.navigator&&"unknown"!==typeof A.navigator.javaEnabled&&!!A.navigator.javaEnabled&&A.navigator.javaEnabled();A.screen&&(b.u_h=A.screen.height,b.u_w=A.screen.width,b.u_ah=A.screen.availHeight,b.u_aw=A.screen.availWidth,b.u_cd=
A.screen.colorDepth);A.navigator&&A.navigator.plugins&&(b.u_nplug=A.navigator.plugins.length);A.navigator&&A.navigator.mimeTypes&&(b.u_nmime=A.navigator.mimeTypes.length);b.bid=a;b.ca_type=gd?"flash":"image";if(Q("enable_server_side_search_pyv")||Q("enable_server_side_mweb_search_pyv")){a=window;try{var e=a.screenX;var f=a.screenY}catch(Ma){}try{var g=a.outerWidth;var h=a.outerHeight}catch(Ma){}try{var l=a.innerWidth;var m=a.innerHeight}catch(Ma){}e=[a.screenLeft,a.screenTop,e,f,a.screen?a.screen.availWidth:
void 0,a.screen?a.screen.availTop:void 0,g,h,l,m];f=window.top||A;try{if(f.document&&!f.document.body)var w=new zb(-1,-1);else{var F=(f||window).document,qd="CSS1Compat"==F.compatMode?F.documentElement:F.body;w=(new zb(qd.clientWidth,qd.clientHeight)).round()}var va=w}catch(Ma){va=new zb(-12245933,-12245933)}w=0;window.SVGElement&&document.createElementNS&&(w|=1);va={bc:w,bih:va.height,biw:va.width,brdim:e.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[Ba.webkitVisibilityState||Ba.mozVisibilityState||
Ba.visibilityState||""]||0,wgl:!!A.WebGLRenderingContext};for(var rd in va)b[rd]=va[rd]}b.bsq=Eh++;ee("//www.youtube.com/ad_data_204",{Da:!1,B:b})}
;function Fh(){this.b=N("ALT_PREF_COOKIE_NAME","PREF");var a=Nb.get(""+this.b,void 0);if(a){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
qa(Fh);var Z=u("yt.prefs.UserPrefs.prefs_")||{};t("yt.prefs.UserPrefs.prefs_",Z,void 0);function Gh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Hh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ih(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fh.prototype.get=function(a,b){Hh(a);Gh(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
Fh.prototype.set=function(a,b){Hh(a);Gh(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
Fh.prototype.remove=function(a){Hh(a);Gh(a);delete Z[a]};
Fh.prototype.clear=function(){Z={}};var Jh=null,Kh=null,Lh=null,Mh={};function Nh(a){Ve(a.payload_name,a.payload,Ye,void 0,void 0)}
function Oh(a){var b=a.id;a=a.ve_type;var c=Ge++;a=new Fe(void 0,a,c,void 0,void 0);Mh[b]=a;b=ff();c=ef();b&&c&&We(b,c,a)}
function Ph(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(M("client-screen-nonce",b),M("ROOT_VE_TYPE",a),a=ef()))for(var c in Mh){var d=Mh[c];d&&We(b,a,d)}}
function Qh(a){Mh[a.id]=new Fe(a.tracking_params)}
function Rh(a){var b=ff();a=Mh[a.id];b&&a&&Xe(Ye,{click:{csn:b,visualElement:He(a)}},void 0)}
function Sh(a){a=a.ids;var b=ff();if(b){for(var c=[],d=0;d<a.length;d++){var e=Mh[a[d]];e&&c.push(e)}c.length&&Ze(b,c)}}
function Th(){var a=Jh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",M,void 0);t("yt.config.set",M,void 0);t("yt.setMsg",ne,void 0);t("yt.msgs.set",ne,void 0);t("yt.logging.errors.log",ke,void 0);
t("writeEmbed",function(){var a=N("PLAYER_CONFIG",void 0);Ch(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=N("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);N("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&X(a.args);Jh=a=Tg(a);a.addEventListener("onScreenChanged",Ph);a.addEventListener("onLogClientVeCreated",Oh);a.addEventListener("onLogServerVeCreated",Qh);a.addEventListener("onLogToGel",Nh);
a.addEventListener("onLogVeClicked",Rh);a.addEventListener("onLogVesShown",Sh);a.addEventListener("onReady",Th);b=N("POST_MESSAGE_ID","player");N("ENABLE_JS_API")?Lh=new hh(a):N("ENABLE_POST_API")&&r(b)&&r(c)&&(Kh=new kh(window.parent,b,c),Lh=new Y(a,Kh.g));N("BG_P")&&(N("BG_I")||N("BG_IU"))&&Md();se()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){he(a+"mac_204?action_fcts=1");return!0},void 0);
var Uh=ld(function(){og("ol");var a=Fh.getInstance(),b=1<window.devicePixelRatio;if(!!((Ih("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Ih(c)||0;d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();a=a.b;b=[];for(var e in Z)b.push(e+"="+escape(Z[e]));gf(a,b.join("&"),63072E3)}}),Vh=ld(function(){var a=Jh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();N("PL_ATT")&&(Ld=null);a=0;for(var b=qe.length;a<b;a++)pe(qe[a]);qe.length=0;Id("//static.doubleclick.net/instream/ad_status.js");re=!1;M("DCLKSTAT",0);gc(Lh,Kh);if(a=Jh)a.removeEventListener("onScreenChanged",Ph),a.removeEventListener("onLogClientVeCreated",Oh),a.removeEventListener("onLogServerVeCreated",Qh),a.removeEventListener("onLogToGel",Nh),a.removeEventListener("onLogVeClicked",Rh),a.removeEventListener("onLogVesShown",Sh),a.removeEventListener("onReady",
Th),a.destroy();Mh={}});
window.addEventListener?(window.addEventListener("load",Uh),window.addEventListener("unload",Vh)):window.attachEvent&&(window.attachEvent("onload",Uh),window.attachEvent("onunload",Vh));}).call(this);
