(()=>{var e={49:()=>{},390:(e,t,r)=>{var o=r(49);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,r(673).Z)("7ac12be1",o,!0,{})},673:(e,t,r)=>{"use strict";function o(e,t){for(var r=[],o={},n=0;n<t.length;n++){var a=t[n],s=a[0],i={id:e+":"+n,css:a[1],media:a[2],sourceMap:a[3]};o[s]?o[s].parts.push(i):r.push(o[s]={id:s,parts:[i]})}return r}r.d(t,{Z:()=>p});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},s=n&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,d=!1,c=function(){},u=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,r,n){d=r,u=n||{};var s=o(e,t);return b(s),function(t){for(var r=[],n=0;n<s.length;n++){var i=s[n];(l=a[i.id]).refs--,r.push(l)}for(t?b(s=o(e,t)):s=[],n=0;n<r.length;n++){var l;if(0===(l=r[n]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete a[l.id]}}}}function b(e){for(var t=0;t<e.length;t++){var r=e[t],o=a[r.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](r.parts[n]);for(;n<r.parts.length;n++)o.parts.push(m(r.parts[n]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{var s=[];for(n=0;n<r.parts.length;n++)s.push(m(r.parts[n]));a[r.id]={id:r.id,refs:1,parts:s}}}}function g(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,r,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(d)return c;o.parentNode.removeChild(o)}if(h){var n=l++;o=i||(i=g()),t=v.bind(null,o,n,!1),r=v.bind(null,o,n,!0)}else o=g(),t=x.bind(null,o),r=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else r()}}var C,y=(C=[],function(e,t){return C[e]=t,C.filter(Boolean).join("\n")});function v(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,n);else{var a=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function x(e,t){var r=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),u.ssrId&&e.setAttribute(f,t.id),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}r(390),"undefined"===e(Craft.Commerce)&&(Craft.Commerce={}),Craft.Commerce.ChartColors={blue:{bg:"rgba(66,153,225, 0.1)",border:"#4299E1"},cyan:{bg:"rgba(56, 190, 201, 0.1)",border:"rgba(56, 190, 201, 0.75)"},orange:{bg:"rgba(237, 137, 54, 0.1)",border:"#ED8936"},red:{bg:"rgba(245, 101, 101, 0.1)",border:"#F56565"},green:{bg:"rgba(72, 187, 120, 0.1)",border:"#48BB78"},purple:{bg:"rgba(128, 90, 213, 0.1)",border:"#805AD5"},grey:{bg:"rgb(160, 174, 192, 0.1)",border:"#A0AEC0"},gridLines:"rgba(155, 155, 155, 0.1)",text:"hsl(209, 18%, 30%)",bgColors:function(){return[this.blue.bg,this.red.bg,this.orange.bg,this.green.bg,this.purple.bg,this.cyan.bg]},borderColors:function(){return[this.blue.border,this.red.border,this.orange.border,this.green.border,this.purple.border,this.cyan.border]},doughnutColors:function(){return[this.blue.border,this.red.border,this.orange.border,this.green.border,this.purple.border,this.grey.border]}},Craft.Commerce.ChartCurrencyTicks=function(e,t,r){return new Intl.NumberFormat(window.commerceCurrentLocale,{style:"currency",currency:window.commerceCurrency}).format(e)},Craft.Commerce.Chart=Garnish.Base.extend({defaults:{general:{options:{legend:{labels:{boxWidth:8,usePointStyle:!0},onClick:function(e,t){return!1}},tooltips:{bodyFontColor:Craft.Commerce.ChartColors.text,backgroundColor:"#fff",borderColor:Craft.Commerce.ChartColors.gridLines,borderWidth:1,caretPadding:6,caretSize:0,mode:"index",titleFontColor:Craft.Commerce.ChartColors.text,enabled:!1,callbacks:{title:function(e,t){var r="";if(e[0].xLabel){r=e[0].xLabel;var o="MMM D",n=!0;t.labels.forEach((function(e){e.match(/^\d{4}\-\d{2}\-01$/g)||(n=!1)})),n&&(o="MMM YYYY"),r=moment(r).format(o)}return r},label:function(e,t){var r;return r=""==e.yLabel?t.datasets[e.datasetIndex].data[e.index]:e.yLabel,r=t.datasets[e.datasetIndex].yAxisID&&"revenue"==t.datasets[e.datasetIndex].yAxisID?Craft.Commerce.ChartCurrencyTicks(r,0,[]):Craft.formatNumber(r)}},custom:function(e){var t=document.getElementById("chartjs-tooltip");if(t||((t=document.createElement("div")).id="chartjs-tooltip",t.innerHTML='<div class="chartjs-tooltip-container"></div>',document.body.appendChild(t)),t.classList.add("commerce-widget-chart-tooltip"),0!==e.opacity){if(t.classList.remove("above","below","no-transform"),e.yAlign?t.classList.add(e.yAlign):t.classList.add("no-transform"),e.body){var r=e.title||[],o=e.body.map((function(e){return e.lines})),n=(e.dataPoints,"<div>");r.forEach((function(e){e&&"null"!=e&&(n+="<h3>"+e+"</h3>")})),o.forEach((function(t,r){var o=e.labelColors[r],a="background:"+o.backgroundColor;a+="; border-color:"+o.borderColor,n+='<div class="commerce-widget-chart-tooltip-items"><span class="legend-dot" style="'+a+'"></span><span>'+t+"</span></div>"})),n+="</div>",t.querySelector(".chartjs-tooltip-container").innerHTML=n}var a=this._chart.canvas.getBoundingClientRect();t.style.opacity=1,t.style.position="absolute",t.style.left=a.left+window.pageXOffset+e.caretX+"px",t.style.top=a.top+window.pageYOffset+e.caretY+"px",t.style.fontFamily=e._bodyFontFamily,t.style.fontSize=e.bodyFontSize+"px",t.style.fontStyle=e._bodyFontStyle,t.style.pointerEvents="none"}else t.style.opacity=0}}}},line:{options:{aspectRatio:2.5,legend:{labels:{boxWidth:6}},tooltips:{intersect:!1}}},doughnut:{options:{aspectRatio:1,cutoutPercentage:60,legend:{position:"bottom"}}}},datasetDefaults:{general:{},doughnut:{backgroundColor:Craft.Commerce.ChartColors.doughnutColors(),borderColor:Craft.Commerce.ChartColors.doughnutColors(),borderWidth:0},line:{borderWidth:3,pointRadius:2,pointHitRadius:4,lineTension:0}},globalDefaults:{defaultFontFamily:"system-ui, BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"},rtl:!1,rtlDefaults:{options:{legend:{rtl:!0},tooltips:{rtl:!0}}},chart:null,init:function(e,t){if(moment.locale(window.commerceCurrentLocale),this.$container=$("#"+e),this.rtl=$("body").hasClass("rtl"),this.$container.length&&t.chart){var r=this.getDefaultOptions(t.chart.type);r=deepmerge(r,t.chart),(r=this.mergeRtlOptions(r)).data&&r.data.datasets&&r.data.datasets.length&&(r.data.datasets=this.mergeDatasetsDefaults(r.data.datasets,r.type)),this.renderChart(r)}},getDefaultOptions:function(e){var t=this.defaults.general;return this.defaults[e]&&(t=deepmerge(t,this.defaults[e])),t},mergeDatasetsDefaults:function(e,t){if(null==this.datasetDefaults[t])return e;for(var r,o=[],n=0,a=0;a<e.length;a++)r=deepmerge(this.datasetDefaults[t],e[a]),"line"==t&&(r=deepmerge(r,{backgroundColor:Craft.Commerce.ChartColors.bgColors()[n],borderColor:Craft.Commerce.ChartColors.borderColors()[n],pointBackgroundColor:Craft.Commerce.ChartColors.borderColors()[n]})),o.push(r),++n==Craft.Commerce.ChartColors.bgColors().length&&(n=0);return o},mergeRtlOptions:function(e){return this.rtl?deepmerge(e,this.rtlDefaults):e},renderChart:function(e){Chart.defaults.global=deepmerge(Chart.defaults.global,this.globalDefaults),this.chart=new Chart(this.$container,e)}})})()})();
//# sourceMappingURL=CommerceChart.js.map