(()=>{"use strict";var t={772:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(537),o=r.n(n),a=r(645),c=r.n(a)()(o());c.push([t.id,"*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\nbody{\n    background-color: gray;\n}","",{version:3,sources:["webpack://./src/styles/styles.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;AACA;IACI,sBAAsB;AAC1B",sourcesContent:["*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\nbody{\n    background-color: gray;\n}"],sourceRoot:""}]);const s=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var u=0;u<t.length;u++){var p=[].concat(t[u]);n&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},537:t=>{t.exports=function(t){var e=t[1],r=t[3];if(!r)return e;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),a="/*# ".concat(o," */"),c=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(c).concat([a]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},c=[],s=0;s<t.length;s++){var i=t[s],u=n.base?i[0]+n.base:i[0],p=a[u]||0,d="".concat(u," ").concat(p);a[u]=p+1;var l=r(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var v=o(f,n);n.byIndex=s,e.splice(s,0,{identifier:d,updater:v,references:1})}c.push(d)}return c}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var s=r(a[c]);e[s].references--}for(var i=n(t,o),u=0;u<a.length;u++){var p=r(a[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=i}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{var t=r(379),e=r.n(t),n=r(795),o=r.n(n),a=r(569),c=r.n(a),s=r(565),i=r.n(s),u=r(216),p=r.n(u),d=r(589),l=r.n(d),f=r(772),v={};function h(t,e,r){this.taskArray=[],this.index=t,this.name=e,this.currentProject=r}function y(){this.projectArray=[]}v.styleTagTransform=l(),v.setAttributes=i(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=p(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,h.prototype.addTask=function(t){this.taskArray.push(t)},h.prototype.removeTask=function(t){this.taskArray.splice(t.index,1)},h.switchCurrentProject=function(t){this.currentProject=!1,t.currentProject=!0},h.prototype.updateTaskIndexes=function(){let t=0;this.taskArray.forEach((e=>{e.index=t,t++}))},y.prototype.addProject=function(t){this.projectArray.push(t)},y.prototype.getCurrentProject=function(){return this.projectArray.filter((t=>1==t.currentProject))},y.prototype.removeProject=function(t){this.projectArray.splice(t.index,1)},y.prototype.updateProjectIndexes=function(){let t=0;this.projectArray.forEach((e=>{e.index=t,t++}))};let m=new y,A=new h(m.projectArray.length,"default",!0);m.addProject(A),console.log(m)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoid0ZBR0lBLEUsTUFBMEIsR0FBNEIsS0FFMURBLEVBQXdCQyxLQUFLLENBQUNDLEVBQU9DLEdBQUksNkdBQThHLEdBQUcsQ0FBQyxRQUFVLEVBQUUsUUFBVSxDQUFDLHFDQUFxQyxNQUFRLEdBQUcsU0FBVyxvRUFBb0UsZUFBaUIsQ0FBQyw4R0FBOEcsV0FBYSxNQUU5YixTLFVDREFELEVBQU9FLFFBQVUsU0FBVUMsR0FDekIsSUFBSUMsRUFBTyxHQTZGWCxPQTNGQUEsRUFBS0MsU0FBVyxXQUNkLE9BQU9DLEtBQUtDLEtBQUksU0FBVUMsR0FDeEIsSUFBSUMsRUFBVSxHQUNWQyxPQUErQixJQUFaRixFQUFLLEdBNEI1QixPQTFCSUEsRUFBSyxLQUNQQyxHQUFXLGNBQWNFLE9BQU9ILEVBQUssR0FBSSxRQUd2Q0EsRUFBSyxLQUNQQyxHQUFXLFVBQVVFLE9BQU9ILEVBQUssR0FBSSxPQUduQ0UsSUFDRkQsR0FBVyxTQUFTRSxPQUFPSCxFQUFLLEdBQUdJLE9BQVMsRUFBSSxJQUFJRCxPQUFPSCxFQUFLLElBQU0sR0FBSSxPQUc1RUMsR0FBV04sRUFBdUJLLEdBRTlCRSxJQUNGRCxHQUFXLEtBR1RELEVBQUssS0FDUEMsR0FBVyxLQUdURCxFQUFLLEtBQ1BDLEdBQVcsS0FHTkEsQ0FDVCxJQUFHSSxLQUFLLEdBQ1YsRUFHQVQsRUFBS1UsRUFBSSxTQUFXQyxFQUFTQyxFQUFPQyxFQUFRQyxFQUFVQyxHQUM3QixpQkFBWkosSUFDVEEsRUFBVSxDQUFDLENBQUMsS0FBTUEsT0FBU0ssS0FHN0IsSUFBSUMsRUFBeUIsQ0FBQyxFQUU5QixHQUFJSixFQUNGLElBQUssSUFBSUssRUFBSSxFQUFHQSxFQUFJaEIsS0FBS00sT0FBUVUsSUFBSyxDQUNwQyxJQUFJckIsRUFBS0ssS0FBS2dCLEdBQUcsR0FFUCxNQUFOckIsSUFDRm9CLEVBQXVCcEIsSUFBTSxFQUVqQyxDQUdGLElBQUssSUFBSXNCLEVBQUssRUFBR0EsRUFBS1IsRUFBUUgsT0FBUVcsSUFBTSxDQUMxQyxJQUFJZixFQUFPLEdBQUdHLE9BQU9JLEVBQVFRLElBRXpCTixHQUFVSSxFQUF1QmIsRUFBSyxXQUlyQixJQUFWVyxTQUNjLElBQVpYLEVBQUssS0FHZEEsRUFBSyxHQUFLLFNBQVNHLE9BQU9ILEVBQUssR0FBR0ksT0FBUyxFQUFJLElBQUlELE9BQU9ILEVBQUssSUFBTSxHQUFJLE1BQU1HLE9BQU9ILEVBQUssR0FBSSxNQUYvRkEsRUFBSyxHQUFLVyxHQU9WSCxJQUNHUixFQUFLLElBR1JBLEVBQUssR0FBSyxVQUFVRyxPQUFPSCxFQUFLLEdBQUksTUFBTUcsT0FBT0gsRUFBSyxHQUFJLEtBQzFEQSxFQUFLLEdBQUtRLEdBSFZSLEVBQUssR0FBS1EsR0FPVkUsSUFDR1YsRUFBSyxJQUdSQSxFQUFLLEdBQUssY0FBY0csT0FBT0gsRUFBSyxHQUFJLE9BQU9HLE9BQU9ILEVBQUssR0FBSSxLQUMvREEsRUFBSyxHQUFLVSxHQUhWVixFQUFLLEdBQUssR0FBR0csT0FBT08sSUFPeEJkLEVBQUtMLEtBQUtTLEdBQ1osQ0FDRixFQUVPSixDQUNULEMsVUNuR0FKLEVBQU9FLFFBQVUsU0FBVU0sR0FDekIsSUFBSUMsRUFBVUQsRUFBSyxHQUNmZ0IsRUFBYWhCLEVBQUssR0FFdEIsSUFBS2dCLEVBQ0gsT0FBT2YsRUFHVCxHQUFvQixtQkFBVGdCLEtBQXFCLENBQzlCLElBQUlDLEVBQVNELEtBQUtFLFNBQVNDLG1CQUFtQkMsS0FBS0MsVUFBVU4sTUFDekRPLEVBQU8sK0RBQStEcEIsT0FBT2UsR0FDN0VNLEVBQWdCLE9BQU9yQixPQUFPb0IsRUFBTSxPQUNwQ0UsRUFBYVQsRUFBV1UsUUFBUTNCLEtBQUksU0FBVTRCLEdBQ2hELE1BQU8saUJBQWlCeEIsT0FBT2EsRUFBV1ksWUFBYyxJQUFJekIsT0FBT3dCLEVBQVEsTUFDN0UsSUFDQSxNQUFPLENBQUMxQixHQUFTRSxPQUFPc0IsR0FBWXRCLE9BQU8sQ0FBQ3FCLElBQWdCbkIsS0FBSyxLQUNuRSxDQUVBLE1BQU8sQ0FBQ0osR0FBU0ksS0FBSyxLQUN4QixDLFVDbkJBLElBQUl3QixFQUFjLEdBRWxCLFNBQVNDLEVBQXFCQyxHQUc1QixJQUZBLElBQUlDLEdBQVUsRUFFTDFCLEVBQUksRUFBR0EsRUFBSXVCLEVBQVl6QixPQUFRRSxJQUN0QyxHQUFJdUIsRUFBWXZCLEdBQUd5QixhQUFlQSxFQUFZLENBQzVDQyxFQUFTMUIsRUFDVCxLQUNGLENBR0YsT0FBTzBCLENBQ1QsQ0FFQSxTQUFTQyxFQUFhckMsRUFBTXNDLEdBSTFCLElBSEEsSUFBSUMsRUFBYSxDQUFDLEVBQ2RDLEVBQWMsR0FFVDlCLEVBQUksRUFBR0EsRUFBSVYsRUFBS1EsT0FBUUUsSUFBSyxDQUNwQyxJQUFJTixFQUFPSixFQUFLVSxHQUNaYixFQUFLeUMsRUFBUUcsS0FBT3JDLEVBQUssR0FBS2tDLEVBQVFHLEtBQU9yQyxFQUFLLEdBQ2xEc0MsRUFBUUgsRUFBVzFDLElBQU8sRUFDMUJzQyxFQUFhLEdBQUc1QixPQUFPVixFQUFJLEtBQUtVLE9BQU9tQyxHQUMzQ0gsRUFBVzFDLEdBQU02QyxFQUFRLEVBQ3pCLElBQUlDLEVBQW9CVCxFQUFxQkMsR0FDekNTLEVBQU0sQ0FDUkMsSUFBS3pDLEVBQUssR0FDVlEsTUFBT1IsRUFBSyxHQUNaMEMsVUFBVzFDLEVBQUssR0FDaEJVLFNBQVVWLEVBQUssR0FDZlcsTUFBT1gsRUFBSyxJQUdkLElBQTJCLElBQXZCdUMsRUFDRlYsRUFBWVUsR0FBbUJJLGFBQy9CZCxFQUFZVSxHQUFtQkssUUFBUUosT0FDbEMsQ0FDTCxJQUFJSSxFQUFVQyxFQUFnQkwsRUFBS04sR0FDbkNBLEVBQVFZLFFBQVV4QyxFQUNsQnVCLEVBQVlrQixPQUFPekMsRUFBRyxFQUFHLENBQ3ZCeUIsV0FBWUEsRUFDWmEsUUFBU0EsRUFDVEQsV0FBWSxHQUVoQixDQUVBUCxFQUFZN0MsS0FBS3dDLEVBQ25CLENBRUEsT0FBT0ssQ0FDVCxDQUVBLFNBQVNTLEVBQWdCTCxFQUFLTixHQUM1QixJQUFJYyxFQUFNZCxFQUFRZSxPQUFPZixHQWV6QixPQWRBYyxFQUFJRSxPQUFPVixHQUVHLFNBQWlCVyxHQUM3QixHQUFJQSxFQUFRLENBQ1YsR0FBSUEsRUFBT1YsTUFBUUQsRUFBSUMsS0FBT1UsRUFBTzNDLFFBQVVnQyxFQUFJaEMsT0FBUzJDLEVBQU9ULFlBQWNGLEVBQUlFLFdBQWFTLEVBQU96QyxXQUFhOEIsRUFBSTlCLFVBQVl5QyxFQUFPeEMsUUFBVTZCLEVBQUk3QixNQUN6SixPQUdGcUMsRUFBSUUsT0FBT1YsRUFBTVcsRUFDbkIsTUFDRUgsRUFBSUksUUFFUixDQUdGLENBRUE1RCxFQUFPRSxRQUFVLFNBQVVFLEVBQU1zQyxHQUcvQixJQUFJbUIsRUFBa0JwQixFQUR0QnJDLEVBQU9BLEdBQVEsR0FEZnNDLEVBQVVBLEdBQVcsQ0FBQyxHQUd0QixPQUFPLFNBQWdCb0IsR0FDckJBLEVBQVVBLEdBQVcsR0FFckIsSUFBSyxJQUFJaEQsRUFBSSxFQUFHQSxFQUFJK0MsRUFBZ0JqRCxPQUFRRSxJQUFLLENBQy9DLElBQ0lpRCxFQUFRekIsRUFES3VCLEVBQWdCL0MsSUFFakN1QixFQUFZMEIsR0FBT1osWUFDckIsQ0FJQSxJQUZBLElBQUlhLEVBQXFCdkIsRUFBYXFCLEVBQVNwQixHQUV0Q3VCLEVBQUssRUFBR0EsRUFBS0osRUFBZ0JqRCxPQUFRcUQsSUFBTSxDQUNsRCxJQUVJQyxFQUFTNUIsRUFGS3VCLEVBQWdCSSxJQUlLLElBQW5DNUIsRUFBWTZCLEdBQVFmLGFBQ3RCZCxFQUFZNkIsR0FBUWQsVUFFcEJmLEVBQVlrQixPQUFPVyxFQUFRLEdBRS9CLENBRUFMLEVBQWtCRyxDQUNwQixDQUNGLEMsVUNyR0EsSUFBSUcsRUFBTyxDQUFDLEVBb0NabkUsRUFBT0UsUUFWUCxTQUEwQmtFLEVBQVFDLEdBQ2hDLElBQUlDLEVBeEJOLFNBQW1CQSxHQUNqQixRQUE0QixJQUFqQkgsRUFBS0csR0FBeUIsQ0FDdkMsSUFBSUMsRUFBY0MsU0FBU0MsY0FBY0gsR0FFekMsR0FBSUksT0FBT0MsbUJBQXFCSixhQUF1QkcsT0FBT0Msa0JBQzVELElBR0VKLEVBQWNBLEVBQVlLLGdCQUFnQkMsSUFJNUMsQ0FIRSxNQUFPQyxHQUVQUCxFQUFjLElBQ2hCLENBR0ZKLEVBQUtHLEdBQVVDLENBQ2pCLENBRUEsT0FBT0osRUFBS0csRUFDZCxDQUtlUyxDQUFVWCxHQUV2QixJQUFLRSxFQUNILE1BQU0sSUFBSVUsTUFBTSwyR0FHbEJWLEVBQU9XLFlBQVlaLEVBQ3JCLEMsVUMxQkFyRSxFQUFPRSxRQVBQLFNBQTRCd0MsR0FDMUIsSUFBSXdDLEVBQVVWLFNBQVNXLGNBQWMsU0FHckMsT0FGQXpDLEVBQVEwQyxjQUFjRixFQUFTeEMsRUFBUTJDLFlBQ3ZDM0MsRUFBUTBCLE9BQU9jLEVBQVN4QyxFQUFRQSxTQUN6QndDLENBQ1QsQyxnQkNHQWxGLEVBQU9FLFFBUlAsU0FBd0NvRixHQUN0QyxJQUFJQyxFQUFtRCxLQUVuREEsR0FDRkQsRUFBYUUsYUFBYSxRQUFTRCxFQUV2QyxDLFVDNERBdkYsRUFBT0UsUUFaUCxTQUFnQndDLEdBQ2QsSUFBSTRDLEVBQWU1QyxFQUFRK0MsbUJBQW1CL0MsR0FDOUMsTUFBTyxDQUNMZ0IsT0FBUSxTQUFnQlYsSUF6RDVCLFNBQWVzQyxFQUFjNUMsRUFBU00sR0FDcEMsSUFBSUMsRUFBTSxHQUVORCxFQUFJOUIsV0FDTitCLEdBQU8sY0FBY3RDLE9BQU9xQyxFQUFJOUIsU0FBVSxRQUd4QzhCLEVBQUloQyxRQUNOaUMsR0FBTyxVQUFVdEMsT0FBT3FDLEVBQUloQyxNQUFPLE9BR3JDLElBQUlOLE9BQWlDLElBQWRzQyxFQUFJN0IsTUFFdkJULElBQ0Z1QyxHQUFPLFNBQVN0QyxPQUFPcUMsRUFBSTdCLE1BQU1QLE9BQVMsRUFBSSxJQUFJRCxPQUFPcUMsRUFBSTdCLE9BQVMsR0FBSSxPQUc1RThCLEdBQU9ELEVBQUlDLElBRVB2QyxJQUNGdUMsR0FBTyxLQUdMRCxFQUFJaEMsUUFDTmlDLEdBQU8sS0FHTEQsRUFBSTlCLFdBQ04rQixHQUFPLEtBR1QsSUFBSUMsRUFBWUYsRUFBSUUsVUFFaEJBLEdBQTZCLG9CQUFUekIsT0FDdEJ3QixHQUFPLHVEQUF1RHRDLE9BQU9jLEtBQUtFLFNBQVNDLG1CQUFtQkMsS0FBS0MsVUFBVW9CLE1BQWUsUUFNdElSLEVBQVFnRCxrQkFBa0J6QyxFQUFLcUMsRUFBYzVDLEVBQVFBLFFBQ3ZELENBaUJNaUQsQ0FBTUwsRUFBYzVDLEVBQVNNLEVBQy9CLEVBQ0FZLE9BQVEsWUFqQlosU0FBNEIwQixHQUUxQixHQUFnQyxPQUE1QkEsRUFBYU0sV0FDZixPQUFPLEVBR1ROLEVBQWFNLFdBQVdDLFlBQVlQLEVBQ3RDLENBV01RLENBQW1CUixFQUNyQixFQUVKLEMsVUNwREF0RixFQUFPRSxRQVpQLFNBQTJCK0MsRUFBS3FDLEdBQzlCLEdBQUlBLEVBQWFTLFdBQ2ZULEVBQWFTLFdBQVdDLFFBQVUvQyxNQUM3QixDQUNMLEtBQU9xQyxFQUFhVyxZQUNsQlgsRUFBYU8sWUFBWVAsRUFBYVcsWUFHeENYLEVBQWFMLFlBQVlULFNBQVMwQixlQUFlakQsR0FDbkQsQ0FDRixDLEdDWklrRCxFQUEyQixDQUFDLEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJqRixJQUFqQmtGLEVBQ0gsT0FBT0EsRUFBYXBHLFFBR3JCLElBQUlGLEVBQVNtRyxFQUF5QkUsR0FBWSxDQUNqRHBHLEdBQUlvRyxFQUVKbkcsUUFBUyxDQUFDLEdBT1gsT0FIQXFHLEVBQW9CRixHQUFVckcsRUFBUUEsRUFBT0UsUUFBU2tHLEdBRy9DcEcsRUFBT0UsT0FDZixDQ3JCQWtHLEVBQW9CSSxFQUFLeEcsSUFDeEIsSUFBSXlHLEVBQVN6RyxHQUFVQSxFQUFPMEcsV0FDN0IsSUFBTzFHLEVBQWlCLFFBQ3hCLElBQU0sRUFFUCxPQURBb0csRUFBb0JPLEVBQUVGLEVBQVEsQ0FBRUcsRUFBR0gsSUFDNUJBLENBQU0sRUNMZEwsRUFBb0JPLEVBQUksQ0FBQ3pHLEVBQVMyRyxLQUNqQyxJQUFJLElBQUlDLEtBQU9ELEVBQ1hULEVBQW9CVyxFQUFFRixFQUFZQyxLQUFTVixFQUFvQlcsRUFBRTdHLEVBQVM0RyxJQUM1RUUsT0FBT0MsZUFBZS9HLEVBQVM0RyxFQUFLLENBQUVJLFlBQVksRUFBTUMsSUFBS04sRUFBV0MsSUFFMUUsRUNORFYsRUFBb0JXLEVBQUksQ0FBQy9ELEVBQUtvRSxJQUFVSixPQUFPSyxVQUFVQyxlQUFlQyxLQUFLdkUsRUFBS29FLEdDQWxGaEIsRUFBb0JvQixRQUFLcEcsRSwrSENXckJzQixFQUFVLENBQUMsRUNYZixTQUFTK0UsRUFBUTFELEVBQU0yRCxFQUFLQyxHQUN4QnJILEtBQUtzSCxVQUFVLEdBQ2Z0SCxLQUFLeUQsTUFBTUEsRUFDWHpELEtBQUtvSCxLQUFLQSxFQUNWcEgsS0FBS3FILGVBQWVBLENBQ3hCLENBbUJBLFNBQVNFLElBQ0x2SCxLQUFLd0gsYUFBYSxFQUN0QixDRGJBcEYsRUFBUWdELGtCQUFvQixJQUM1QmhELEVBQVEwQyxjQUFnQixJQUVsQjFDLEVBQVEwQixPQUFTLFNBQWMsS0FBTSxRQUUzQzFCLEVBQVFlLE9BQVMsSUFDakJmLEVBQVErQyxtQkFBcUIsSUFFaEIsSUFBSSxJQUFTL0MsR0FLSixLQUFXLFlBQWlCLFdDcEJsRCtFLEVBQVFKLFVBQVVVLFFBQVUsU0FBVUMsR0FDbEMxSCxLQUFLc0gsVUFBVTdILEtBQUtpSSxFQUN4QixFQUNBUCxFQUFRSixVQUFVWSxXQUFhLFNBQVVELEdBQ3JDMUgsS0FBS3NILFVBQVVyRSxPQUFPeUUsRUFBS2pFLE1BQU8sRUFDdEMsRUFDQTBELEVBQVFTLHFCQUF1QixTQUFVQyxHQUNyQzdILEtBQUtxSCxnQkFBZSxFQUNwQlEsRUFBV1IsZ0JBQWUsQ0FDOUIsRUFDQUYsRUFBUUosVUFBVWUsa0JBQW9CLFdBQ2xDLElBQUl0SCxFQUFFLEVBQ05SLEtBQUtzSCxVQUFVUyxTQUFTTCxJQUNwQkEsRUFBS2pFLE1BQU1qRCxFQUNYQSxHQUFHLEdBRVgsRUFLQStHLEVBQVlSLFVBQVVpQixXQUFhLFNBQVVDLEdBQ3pDakksS0FBS3dILGFBQWEvSCxLQUFLd0ksRUFDM0IsRUFDQVYsRUFBWVIsVUFBVW1CLGtCQUFvQixXQUN0QyxPQUFPbEksS0FBS3dILGFBQWFXLFFBQVFGLEdBQ0UsR0FBeEJBLEVBQVFaLGdCQUV2QixFQUNBRSxFQUFZUixVQUFVcUIsY0FBZ0IsU0FBVUgsR0FDNUNqSSxLQUFLd0gsYUFBYXZFLE9BQU9nRixFQUFReEUsTUFBTyxFQUM1QyxFQUNBOEQsRUFBWVIsVUFBVXNCLHFCQUF1QixXQUN6QyxJQUFJN0gsRUFBRSxFQUNOUixLQUFLd0gsYUFBYU8sU0FBU0UsSUFDdkJBLEVBQVF4RSxNQUFNakQsRUFDZEEsR0FBRyxHQUVYLEVBR0EsSUFBSThILEVBQWMsSUFBSWYsRUFHbEJnQixFQUFpQixJQUFJcEIsRUFBUW1CLEVBQVlkLGFBQWFsSCxPQUFPLFdBQVUsR0FDM0VnSSxFQUFZTixXQUFXTyxHQUN2QkMsUUFBUUMsSUFBSUgsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImZ1bmN0aW9uIFByb2plY3QoaW5kZXgsbmFtZSxjdXJyZW50UHJvamVjdCl7XG4gICAgdGhpcy50YXNrQXJyYXk9W107XG4gICAgdGhpcy5pbmRleD1pbmRleDtcbiAgICB0aGlzLm5hbWU9bmFtZTtcbiAgICB0aGlzLmN1cnJlbnRQcm9qZWN0PWN1cnJlbnRQcm9qZWN0O1xufTtcblByb2plY3QucHJvdG90eXBlLmFkZFRhc2sgPSBmdW5jdGlvbiAodGFzayl7XG4gICAgdGhpcy50YXNrQXJyYXkucHVzaCh0YXNrKTtcbn07XG5Qcm9qZWN0LnByb3RvdHlwZS5yZW1vdmVUYXNrID0gZnVuY3Rpb24gKHRhc2spe1xuICAgIHRoaXMudGFza0FycmF5LnNwbGljZSh0YXNrLmluZGV4LCAxKTtcbn07XG5Qcm9qZWN0LnN3aXRjaEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKG5ld1Byb2plY3Qpe1xuICAgIHRoaXMuY3VycmVudFByb2plY3Q9ZmFsc2U7XG4gICAgbmV3UHJvamVjdC5jdXJyZW50UHJvamVjdD10cnVlO1xufTtcblByb2plY3QucHJvdG90eXBlLnVwZGF0ZVRhc2tJbmRleGVzID0gZnVuY3Rpb24gKCl7XG4gICAgbGV0IGk9MDtcbiAgICB0aGlzLnRhc2tBcnJheS5mb3JFYWNoKCh0YXNrKT0+e1xuICAgICAgICB0YXNrLmluZGV4PWk7XG4gICAgICAgIGkrKztcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIFByb2plY3RMaXN0ICgpe1xuICAgIHRoaXMucHJvamVjdEFycmF5PVtdO1xufTtcblByb2plY3RMaXN0LnByb3RvdHlwZS5hZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3Qpe1xuICAgIHRoaXMucHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG59O1xuUHJvamVjdExpc3QucHJvdG90eXBlLmdldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKCl7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdEFycmF5LmZpbHRlcigocHJvamVjdCk9PntcbiAgICAgICByZXR1cm4gKHByb2plY3QuY3VycmVudFByb2plY3Q9PXRydWUgPyB0cnVlIDogZmFsc2UpO1xuICAgIH0pO1xufTtcblByb2plY3RMaXN0LnByb3RvdHlwZS5yZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3Qpe1xuICAgIHRoaXMucHJvamVjdEFycmF5LnNwbGljZShwcm9qZWN0LmluZGV4LCAxKTtcbn07XG5Qcm9qZWN0TGlzdC5wcm90b3R5cGUudXBkYXRlUHJvamVjdEluZGV4ZXMgPSBmdW5jdGlvbiAoKXtcbiAgICBsZXQgaT0wO1xuICAgIHRoaXMucHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpPT57XG4gICAgICAgIHByb2plY3QuaW5kZXg9aTtcbiAgICAgICAgaSsrO1xuICAgIH0pO1xufTtcblxuLy9DcmVhdGVzIHRoZSBnbG9iYWwgZGVmYXVsdCBwcm9qZWN0IGxpc3RcbmxldCBERUZBVUxUTElTVCA9IG5ldyBQcm9qZWN0TGlzdCgpO1xuXG4vL0NyZWF0ZXMgdGhlIGRlZmF1bHQgcHJvamVjdCBhbmQgc2V0cyBpdCBhcyBjdXJyZW50IHByb2plY3RcbmxldCBERUZBVUxUUFJPSkVDVCA9IG5ldyBQcm9qZWN0KERFRkFVTFRMSVNULnByb2plY3RBcnJheS5sZW5ndGgsXCJkZWZhdWx0XCIsdHJ1ZSk7XG5ERUZBVUxUTElTVC5hZGRQcm9qZWN0KERFRkFVTFRQUk9KRUNUKTtcbmNvbnNvbGUubG9nKERFRkFVTFRMSVNUKTtcblxuZXhwb3J0IHtQcm9qZWN0LCBQcm9qZWN0TGlzdCxERUZBVUxUTElTVH07Il0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJ0aGlzIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsIl9rIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInN0eWxlc0luRE9NIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInN0eWxlRWxlbWVudCIsIm5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJhcHBseSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZVN0eWxlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuYyIsIlByb2plY3QiLCJuYW1lIiwiY3VycmVudFByb2plY3QiLCJ0YXNrQXJyYXkiLCJQcm9qZWN0TGlzdCIsInByb2plY3RBcnJheSIsImFkZFRhc2siLCJ0YXNrIiwicmVtb3ZlVGFzayIsInN3aXRjaEN1cnJlbnRQcm9qZWN0IiwibmV3UHJvamVjdCIsInVwZGF0ZVRhc2tJbmRleGVzIiwiZm9yRWFjaCIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwiZ2V0Q3VycmVudFByb2plY3QiLCJmaWx0ZXIiLCJyZW1vdmVQcm9qZWN0IiwidXBkYXRlUHJvamVjdEluZGV4ZXMiLCJERUZBVUxUTElTVCIsIkRFRkFVTFRQUk9KRUNUIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=