define(["esri/Map","esri/views/MapView"],function(e,t){return webpackJsonp([1],{243:function(e,t,n){e.exports=n(244)},244:function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var a=n(6),r=t(a),o=n(66),l=t(o),u=n(245),c=t(u);n(248);var i=e('<div class="container app "></div>').appendTo(document.body);!function(e){l.default.render(r.default.createElement(e,null),i[0])}(c.default)}).call(t,n(5))},245:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(6),i=a(c),f=n(93),s=n(246),p=a(s),d=n(247),m=a(d),b=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"componentDidMount",value:function(){this.map=new p.default({basemap:"streets"}),this.view=new m.default({container:this.dom,map:this.map})}},{key:"render",value:function(){var e=this;return i.default.createElement("div",{className:"jumbotron"},i.default.createElement("p",null,"这是一个地图示例"),i.default.createElement("div",{style:{width:"100%",height:"400px"},ref:function(t){e.dom=t}}))}}]),t}(i.default.Component),h=function(){return i.default.createElement("div",{className:"jumbotron"},i.default.createElement("h1",null,"欢迎使用"),i.default.createElement("p",null,"fantasy-skeleton-arcgis 是一个开发骨架， 集成了Arcgis JavaScript API、webpack、bootstrap和React，祝你好运~"),i.default.createElement("p",null,i.default.createElement("a",{className:"btn btn-primary btn-lg",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Liuyl89/fantasy-skeleton-arcgis",role:"button"},"前往Github")))},v=function(e){var t=e.label,n=e.to,a=e.activeOnlyWhenExact;return i.default.createElement(f.Route,{path:n,exact:a},function(e){var a=e.match;return i.default.createElement("li",{role:"presentation",className:a?"active":""},i.default.createElement(f.Link,{to:n},t))})},y=function(){return i.default.createElement(f.BrowserRouter,{basename:"/fantasy-skeleton-arcgis"},i.default.createElement("div",null,i.default.createElement("ul",{className:"nav nav-tabs"},i.default.createElement(v,{to:"/",label:"Home",activeOnlyWhenExact:!0}),i.default.createElement(v,{to:"/map",label:"Map",activeOnlyWhenExact:!0})),i.default.createElement(f.Route,{path:"/",exact:!0,component:h}),i.default.createElement(f.Route,{path:"/map",component:b})))};t.default=y},246:function(t,n){t.exports=e},247:function(e,n){e.exports=t},248:function(e,t,n){var a=n(249);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(29)(a,r);a.locals&&(e.exports=a.locals)},249:function(e,t,n){t=e.exports=n(28)(void 0),t.push([e.i,".app {\n  margin-top: 63px; }\n  .app .jumbotron {\n    margin-top: 10px; }\n",""])}},[243])});