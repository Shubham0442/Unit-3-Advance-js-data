(()=>{"use strict";var e={989:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"\r\n#container{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: auto;\r\n    gap: 15px;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n#box{\r\n    width: 100%;\r\n    height: 350px;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    border-radius: 10px;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\r\n}\r\n\r\n#box>img{\r\n    width: 100%;\r\n    height: 270px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}",""]);const s=i},126:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"#search_bar{\r\n    width: 80%;\r\n    margin:10px auto;\r\n}\r\n\r\n#query{\r\n    width: 100%;\r\n    height: 35px;\r\n    border: 1px solid teal;\r\n    padding: 5px;\r\n    font-size: medium;\r\n    border-radius: 10px;\r\n}\r\n\r\n#categories{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n\r\n#categories>h3{\r\n    border: 1px solid rgb(240, 28, 28);\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    \r\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),l=n.n(s),c=n(216),d=n.n(c),u=n(589),p=n.n(u),h=n(126),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var v=n(989),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;let y=async e=>{try{let t=await fetch(`https://api.unsplash.com/search/photos/?query=${e}&per_page=20&client_id=pBXoFIavV9E7HkhesTus_ZmYO4IvXIOS91CNacPDqG8`);return await t.json()}catch(e){console.log(e)}},g=(e,t)=>{t.innerHTML=null,e.forEach((({alt_description:e,urls:{small:n}})=>{let r=document.createElement("div");r.setAttribute("id","box");let o=document.createElement("img");o.src=n,o.setAttribute("class","img");let a=document.createElement("h3");a.innerText=e,r.append(o,a),t.append(r)}))};document.getElementById("navbar").innerHTML='\n    <div id="search_bar">\n    <input type="text" id="query">\n</div>\n<div id="categories">\n    <h3 id="Nature" >Nature</h3 >\n    <h3 id="Cars">Cars</h3 >\n    <h3 id="Music">Music</h3 >\n    <h3 id="Cartoons">Cartoons</h3 >\n    <h3 id="Technologies">Technologies</h3 >\n    <h3 id="Marval">Marval</h3>\n    <h3>\n        <select id="sortBy">\n            <option value="latest">latest</option>\n            <option value="popular">popular</option>\n            <option value="oldest">oldest</option>\n        </select>\n    </h3>\n    <h3>\n        <select id="filterBy">\n            <option value="landscape">landscape</option>\n            <option value="portrait">portrait</option>\n            <option value="squarish">squarish</option>\n        </select>\n    </h3>\n</div>';let x=document.getElementById("query").value;document.getElementById("query").addEventListener("keydown",(e=>{"Enter"===e.key&&(x=document.getElementById("query").value,y(x).then((e=>{console.log(e);let t=document.getElementById("container");g(e.results,t)})))})),document.getElementById("query").setAttribute("placeholder","Search Images");let b=document.getElementById("categories").children;function E(){console.log(this.id),y(this.id).then((e=>{console.log(e);let t=document.getElementById("container");g(e.results,t)}))}for(let e of b)e.addEventListener("click",E);document.getElementById("sortBy").addEventListener("change",(()=>{let e=document.getElementById("sortBy").value;x=document.getElementById("query").value,console.log(e,x),(async(e,t)=>{console.log(e,t);try{let n=await fetch(`https://api.unsplash.com/search/photos/?query=${t}&per_page=20&order_by=${e}&client_id=pBXoFIavV9E7HkhesTus_ZmYO4IvXIOS91CNacPDqG8`);return await n.json()}catch(e){console.log(e)}})(e,x).then((e=>{let t=document.getElementById("container");t.innerHTML=null,g(e.results,t)}))})),document.getElementById("filterBy").addEventListener("change",(()=>{let e=document.getElementById("filterBy").value;x=document.getElementById("query").value,console.log(e,x),(async(e,t)=>{console.log(e,t);try{let n=await fetch(`https://api.unsplash.com/search/photos/?query=${t}&per_page=20&orientation=${e}&client_id=pBXoFIavV9E7HkhesTus_ZmYO4IvXIOS91CNacPDqG8`);return await n.json()}catch(e){console.log(e)}})(e,x).then((e=>{let t=document.getElementById("container");t.innerHTML=null,g(e.results,t)}))}))})()})();