/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{492:function(ya,ua,r){(function(pa){function na(b){this.Dg=b=b||{};if(Array.isArray(b.table)){var h=[];b.table.forEach(function(e,w){h[e.charCodeAt(0)]=w});b.vha=b.table;b.Dea=h}}var ma=pa.from||function(){switch(arguments.length){case 1:return new pa(arguments[0]);case 2:return new pa(arguments[0],arguments[1]);case 3:return new pa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ka=
pa.allocUnsafe||function(b){return new pa(b)},ja=function(){return"undefined"===typeof Uint8Array?function(b){return Array(b)}:function(b){return new Uint8Array(b)}}(),ha=String.fromCharCode(0),aa=ha+ha+ha+ha,z=ma("<~").uA(0),n=ma("~>").uA(0),f=function(){var b=Array(85),h;for(h=0;85>h;h++)b[h]=String.fromCharCode(33+h);return b}(),a=function(){var b=Array(256),h;for(h=0;85>h;h++)b[33+h]=h;return b}();ha=ya.exports=new na;na.prototype.encode=function(b,h){var e=ja(5),w=b,x=this.Dg,y,ca;"string"===
typeof w?w=ma(w,"binary"):w instanceof pa||(w=ma(w));h=h||{};if(Array.isArray(h)){b=h;var ba=x.eE||!1;var fa=x.rN||!1}else b=h.table||x.vha||f,ba=void 0===h.eE?x.eE||!1:!!h.eE,fa=void 0===h.rN?x.rN||!1:!!h.rN;x=0;var ea=Math.ceil(5*w.length/4)+4+(ba?4:0);h=ka(ea);ba&&(x+=h.write("<~",x));var oa=y=ca=0;for(ea=w.length;oa<ea;oa++){var ia=w.CP(oa);ca*=256;ca+=ia;y++;if(!(y%4)){if(fa&&538976288===ca)x+=h.write("y",x);else if(ca){for(y=4;0<=y;y--)ia=ca%85,e[y]=ia,ca=(ca-ia)/85;for(y=0;5>y;y++)x+=h.write(b[e[y]],
x)}else x+=h.write("z",x);y=ca=0}}if(y)if(ca){w=4-y;for(oa=4-y;0<oa;oa--)ca*=256;for(y=4;0<=y;y--)ia=ca%85,e[y]=ia,ca=(ca-ia)/85;for(y=0;5>y;y++)x+=h.write(b[e[y]],x);x-=w}else for(oa=0;oa<y+1;oa++)x+=h.write(b[0],x);ba&&(x+=h.write("~>",x));return h.slice(0,x)};na.prototype.decode=function(b,h){var e=this.Dg,w=!0,x=!0,y,ca,ba;h=h||e.Dea||a;if(!Array.isArray(h)&&(h=h.table||h,!Array.isArray(h))){var fa=[];Object.keys(h).forEach(function(la){fa[la.charCodeAt(0)]=h[la]});h=fa}w=!h[122];x=!h[121];b instanceof
pa||(b=ma(b));fa=0;if(w||x){var ea=0;for(ba=b.length;ea<ba;ea++){var oa=b.CP(ea);w&&122===oa&&fa++;x&&121===oa&&fa++}}var ia=0;ba=Math.ceil(4*b.length/5)+4*fa+5;e=ka(ba);if(4<=b.length&&b.uA(0)===z){for(ea=b.length-2;2<ea&&b.uA(ea)!==n;ea--);if(2>=ea)throw Error("Invalid ascii85 string delimiter pair.");b=b.slice(2,ea)}ea=y=ca=0;for(ba=b.length;ea<ba;ea++)oa=b.CP(ea),w&&122===oa?ia+=e.write(aa,ia):x&&121===oa?ia+=e.write("    ",ia):void 0!==h[oa]&&(ca*=85,ca+=h[oa],y++,y%5||(ia=e.$wa(ca,ia),y=ca=
0));if(y){b=5-y;for(ea=0;ea<b;ea++)ca*=85,ca+=84;ea=3;for(ba=b-1;ea>ba;ea--)ia=e.axa(ca>>>8*ea&255,ia)}return e.slice(0,ia)};ha.bya=new na({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});ha.yxa=new na({eE:!0});ha.X6=na}).call(this,r(418).Buffer)}}]);}).call(this || window)
