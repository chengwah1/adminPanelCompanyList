(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{263:function(e,a,t){"use strict";function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(a){var t=this.constructor.getDerivedStateFromProps(e,a);return null!==t&&void 0!==t?t:null}.bind(this))}function c(e,a){try{var t=this.props,s=this.state;this.props=e,this.state=a,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,s)}finally{this.props=t,this.state=s}}function r(e){var a=e.prototype;if(!a||!a.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate)return e;var t=null,r=null,m=null;if("function"===typeof a.componentWillMount?t="componentWillMount":"function"===typeof a.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof a.componentWillReceiveProps?r="componentWillReceiveProps":"function"===typeof a.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"===typeof a.componentWillUpdate?m="componentWillUpdate":"function"===typeof a.UNSAFE_componentWillUpdate&&(m="UNSAFE_componentWillUpdate"),null!==t||null!==r||null!==m){var n=e.displayName||e.name,i="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+n+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==r?"\n  "+r:"")+(null!==m?"\n  "+m:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(a.componentWillMount=s,a.componentWillReceiveProps=l),"function"===typeof a.getSnapshotBeforeUpdate){if("function"!==typeof a.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");a.componentWillUpdate=c;var o=a.componentDidUpdate;a.componentDidUpdate=function(e,a,t){var s=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;o.call(this,e,a,s)}}return e}t.r(a),t.d(a,"polyfill",function(){return r}),s.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,c.__suppressDeprecationWarning=!0},265:function(e,a){var t=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,m=/^0o[0-7]+$/i,n=parseInt,i=Object.prototype.toString;function o(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&i.call(e)==s}(e))return t;if(o(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=o(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var u=r.test(e);return u||m.test(e)?n(e.slice(2),u?2:8):c.test(e)?t:+e}},288:function(e,a,t){"use strict";var s=t(34),l=t(245),c=t(0),r=t.n(c),m=t(1),n=t.n(m),i=t(243),o=t.n(i),u=t(265),d=t.n(u),p=t(244),v={children:n.a.node,bar:n.a.bool,multi:n.a.bool,tag:p.q,value:n.a.oneOfType([n.a.string,n.a.number]),max:n.a.oneOfType([n.a.string,n.a.number]),animated:n.a.bool,striped:n.a.bool,color:n.a.string,className:n.a.string,barClassName:n.a.string,cssModule:n.a.object},g=function(e){var a=e.children,t=e.className,c=e.barClassName,m=e.cssModule,n=e.value,i=e.max,u=e.animated,v=e.striped,g=e.color,E=e.bar,N=e.multi,b=e.tag,f=Object(l.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),h=d()(n)/d()(i)*100,x=Object(p.m)(o()(t,"progress"),m),y=Object(p.m)(o()("progress-bar",E&&t||c,u?"progress-bar-animated":null,g?"bg-"+g:null,v||u?"progress-bar-striped":null),m),j=N?a:r.a.createElement("div",{className:y,style:{width:h+"%"},role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":i,children:a});return E?j:r.a.createElement(b,Object(s.a)({},f,{className:x,children:j}))};g.propTypes=v,g.defaultProps={tag:"div",value:0,max:100},a.a=g},306:function(e,a,t){"use strict";var s=t(34),l=t(246),c=t(0),r=t.n(c),m=t(263),n=t(1),i=t.n(n),o=t(243),u=t.n(o),d=t(244),p={tag:d.q,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},v={activeTabId:i.a.any},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null};var t=a.prototype;return t.getChildContext=function(){return{activeTabId:this.state.activeTab}},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,c=Object(d.n)(this.props,Object.keys(p)),m=Object(d.m)(u()("tab-content",a),t);return r.a.createElement(l,Object(s.a)({},c,{className:m}))},a}(c.Component);Object(m.polyfill)(g),a.a=g,g.propTypes=p,g.defaultProps={tag:"div"},g.childContextTypes=v},307:function(e,a,t){"use strict";t.d(a,"a",function(){return v});var s=t(34),l=t(245),c=t(0),r=t.n(c),m=t(1),n=t.n(m),i=t(243),o=t.n(i),u=t(244),d={tag:u.q,className:n.a.string,cssModule:n.a.object,tabId:n.a.any},p={activeTabId:n.a.any};function v(e,a){var t=e.className,c=e.cssModule,m=e.tabId,n=e.tag,i=Object(l.a)(e,["className","cssModule","tabId","tag"]),d=Object(u.m)(o()("tab-pane",t,{active:m===a.activeTabId}),c);return r.a.createElement(n,Object(s.a)({},i,{className:d}))}v.propTypes=d,v.defaultProps={tag:"div"},v.contextTypes=p},339:function(e,a,t){"use strict";var s=t(34),l=t(245),c=t(0),r=t.n(c),m=t(1),n=t.n(m),i=t(243),o=t.n(i),u=t(244),d={tag:u.q,flush:n.a.bool,className:n.a.string,cssModule:n.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,m=e.flush,n=Object(l.a)(e,["className","cssModule","tag","flush"]),i=Object(u.m)(o()(a,"list-group",!!m&&"list-group-flush"),t);return r.a.createElement(c,Object(s.a)({},n,{className:i}))};p.propTypes=d,p.defaultProps={tag:"ul"},a.a=p},340:function(e,a,t){"use strict";var s=t(34),l=t(245),c=t(0),r=t.n(c),m=t(1),n=t.n(m),i=t(243),o=t.n(i),u=t(244),d={tag:u.q,active:n.a.bool,disabled:n.a.bool,color:n.a.string,action:n.a.bool,className:n.a.any,cssModule:n.a.object},p=function(e){e.preventDefault()},v=function(e){var a=e.className,t=e.cssModule,c=e.tag,m=e.active,n=e.disabled,i=e.action,d=e.color,v=Object(l.a)(e,["className","cssModule","tag","active","disabled","action","color"]),g=Object(u.m)(o()(a,!!m&&"active",!!n&&"disabled",!!i&&"list-group-item-action",!!d&&"list-group-item-"+d,"list-group-item"),t);return n&&(v.onClick=p),r.a.createElement(c,Object(s.a)({},v,{className:g}))};v.propTypes=d,v.defaultProps={tag:"li"},a.a=v},462:function(e,a,t){"use strict";t.r(a);var s=t(94),l=t(43),c=t(44),r=t(90),m=t(89),n=t(91),i=t(92),o=t(0),u=t.n(o),d=t(457),p=t(453),v=t(454),g=t(306),E=t(307),N=t(339),b=t(340),f=t(288),h=t(243),x=t.n(h),y=t(276),j=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(m.a)(a).call(this,e))).toggle=t.toggle.bind(Object(i.a)(Object(i.a)(t))),t.state={activeTab:"1"},t}return Object(n.a)(a,e),Object(c.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,a=this.props;a.children,Object(s.a)(a,["children"]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{tabs:!0},u.a.createElement(p.a,null,u.a.createElement(v.a,{className:x()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},u.a.createElement("i",{className:"icon-list"}))),u.a.createElement(p.a,null,u.a.createElement(v.a,{className:x()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},u.a.createElement("i",{className:"icon-speech"}))),u.a.createElement(p.a,null,u.a.createElement(v.a,{className:x()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},u.a.createElement("i",{className:"icon-settings"})))),u.a.createElement(g.a,{activeTab:this.state.activeTab},u.a.createElement(E.a,{tabId:"1"},u.a.createElement(N.a,{className:"list-group-accent",tag:"div"},u.a.createElement(b.a,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Today"),u.a.createElement(b.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-warning list-group-item-divider"},u.a.createElement("div",{className:"avatar float-right"},u.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",null,"Meeting with ",u.a.createElement("strong",null,"Lucas")," "),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-location-pin"})," Palo Alto, CA")),u.a.createElement(b.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-info list-group-item-divider"},u.a.createElement("div",{className:"avatar float-right"},u.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",null,"Skype with ",u.a.createElement("strong",null,"Megan")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 5pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-social-skype"})," On-line")),u.a.createElement(b.a,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Tomorrow"),u.a.createElement(b.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-danger list-group-item-divider"},u.a.createElement("div",null,"New UI Project - ",u.a.createElement("strong",null,"deadline")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 10 - 11pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),u.a.createElement("div",{className:"avatars-stack mt-2"},u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))),u.a.createElement(b.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-success list-group-item-divider"},u.a.createElement("div",null,u.a.createElement("strong",null,"#10 Startups.Garden")," Meetup"),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-location-pin"}),"\xa0 Palo Alto, CA")),u.a.createElement(b.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-primary list-group-item-divider"},u.a.createElement("div",null,u.a.createElement("strong",null,"Team meeting")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 6pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),u.a.createElement("div",{className:"avatars-stack mt-2"},u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/8.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))))),u.a.createElement(E.a,{tabId:"2",className:"p-3"},u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),u.a.createElement(E.a,{tabId:"3",className:"p-3"},u.a.createElement("h6",null,"Settings"),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-4"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 1")),u.a.createElement(y.o,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"})),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 2")),u.a.createElement(y.o,{className:"float-right",variant:"pill",label:!0,color:"success",size:"sm"})),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 3")),u.a.createElement(y.o,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm",disabled:!0}),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Option disabled.")))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 4")),u.a.createElement(y.o,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"}))),u.a.createElement("hr",null),u.a.createElement("h6",null,"System Utilization"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-4"},u.a.createElement("small",null,u.a.createElement("b",null,"CPU Usage"))),u.a.createElement(f.a,{className:"progress-xs",color:"info",value:"25"}),u.a.createElement("small",{className:"text-muted"},"348 Processes. 1/4 Cores."),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"Memory Usage"))),u.a.createElement(f.a,{className:"progress-xs",color:"warning",value:"70"}),u.a.createElement("small",{className:"text-muted"},"11444GB/16384MB"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"SSD 1 Usage"))),u.a.createElement(f.a,{className:"progress-xs",color:"danger",value:"95"}),u.a.createElement("small",{className:"text-muted"},"243GB/256GB"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"SSD 2 Usage"))),u.a.createElement(f.a,{className:"progress-xs",color:"success",value:"10"}),u.a.createElement("small",{className:"text-muted"},"25GB/256GB"))))}}]),a}(o.Component);j.defaultProps={},a.default=j}}]);
//# sourceMappingURL=23.af37351b.chunk.js.map