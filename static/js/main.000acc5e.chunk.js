(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,n){e.exports=n(237)},232:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);n(151),n(181),n(182),n(211),n(215),n(217);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=n(0),r=n.n(a),o=n(93),i=n.n(o),c=(n(232),n(43)),l=n(44),u=n(90),s=n(89),m=n(91),d=n(241),h=n(242),f=n(238),p=n(94),b=n(240),g=n(95),E=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return r.a.createElement(f.a,Object.assign({},n,{render:function(e){return g.a.isAuthenticated()?r.a.createElement(t,e):r.a.createElement(b.a,{to:{pathname:"/",state:{from:e.location}}})}}))},v=(n(236),r.a.lazy(function(){return Promise.all([n.e(7),n.e(50)]).then(n.bind(null,503))})),w=r.a.lazy(function(){return Promise.all([n.e(2),n.e(46)]).then(n.bind(null,458))}),y=r.a.lazy(function(){return Promise.all([n.e(2),n.e(48)]).then(n.bind(null,459))}),O=r.a.lazy(function(){return Promise.all([n.e(11),n.e(55)]).then(n.bind(null,460))}),P=r.a.lazy(function(){return Promise.all([n.e(10),n.e(56)]).then(n.bind(null,461))}),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},r.a.createElement(h.a,null,r.a.createElement(f.a,{exact:!0,path:"/adminPanelCompanyList",name:"Login Page",render:function(e){return r.a.createElement(w,e)}}),r.a.createElement(f.a,{exact:!0,path:"/register",name:"Register Page",render:function(e){return r.a.createElement(y,e)}}),r.a.createElement(f.a,{exact:!0,path:"/404",name:"Page 404",render:function(e){return r.a.createElement(O,e)}}),r.a.createElement(f.a,{exact:!0,path:"/500",name:"Page 500",render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(E,{path:"/dashboard",name:"Home",component:v}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,n){"use strict";var a=n(43),r=n(44),o=function(){function e(){Object(a.a)(this,e),this.authenticated=JSON.parse(localStorage.getItem("loginStatus"))}return Object(r.a)(e,[{key:"login",value:function(e){this.authenticated=!0,localStorage.setItem("loginStatus",JSON.stringify(this.authenticated)),e()}},{key:"logout",value:function(e){this.authenticated=!1,localStorage.setItem("loginStatus",JSON.stringify(this.authenticated)),e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}();t.a=new o}},[[150,5,6]]]);
//# sourceMappingURL=main.000acc5e.chunk.js.map