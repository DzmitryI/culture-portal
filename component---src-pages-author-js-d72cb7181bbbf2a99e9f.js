(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(199),i=n(259),l=n(210),c=n(212),s=n(231);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement(i.a,null,"Welcome to page 2"),r.a.createElement(o.a,{to:"/"},"Go back to the homepage"),r.a.createElement(s.a,null))}},199:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),o=n(66),i=n.n(o);n.d(t,"a",function(){return i.a});n(203),n(9).default.enqueue;var l=r.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:n,render:a||o,staticQueryData:e})})}},203:function(e,t,n){var a;e.exports=(a=n(207))&&a.default||a},204:function(e,t,n){"use strict";n(29),n(30),n(13),n(50),n(23);var a=n(0),r=n.n(a),o=n(199),i=n(216);t.a=function(e){var t=e.to,n=e.children,a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["to","children"]),l=i.a.language;return r.a.createElement(o.a,Object.assign({to:l?"/"+l+t:""+t},a),n)}},207:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Photographers of Belarus"}}}}},209:function(e,t,n){e.exports=n.p+"static/logo-d0d29f8a8bcfbff327902b08e3e073f5.png"},210:function(e,t,n){"use strict";var a=n(208),r=n(0),o=n.n(r),i=n(200),l=n(338),c=n(337),s=n(339),u=n(204),f=(n(40),n(217)),p=n.n(f),d=(n(199),function(){var e=Object(i.b)(),t=e.t,n=e.i18n,a=Object(r.useState)(n.language),l=a[0],c=a[1];return o.a.createElement(p.a,{className:"select-language"},o.a.createElement(p.a.Group,{className:"mb-0"},o.a.createElement(p.a.Control,{as:"select",value:l,onChange:function(e){!function(e){n.changeLanguage(e);var t=window.location.pathname.split("/").slice(2).join("/");console.log("go to: ","/"+e+"/"+t)}(""+e.target.value),c(""+e.target.value)}},o.a.createElement("option",{value:"ru"},t("russian")),o.a.createElement("option",{value:"by"},t("belorussian")),o.a.createElement("option",{value:"en"},t("english")))))}),m=(n(219),d),b=n(209),h=n.n(b),y=(n(220),function(){var e=Object(i.b)().t;return o.a.createElement("header",null,o.a.createElement(l.a,{expand:"md"},o.a.createElement(l.a.Brand,null,o.a.createElement(u.a,{to:"/"},o.a.createElement(c.a,{src:h.a}))),o.a.createElement(l.a.Toggle,{"aria-controls":"navbar"}),o.a.createElement(l.a.Collapse,{id:"navbar"},o.a.createElement(s.a,null,o.a.createElement("div",{className:"wrapper"},o.a.createElement(s.a.Item,null,o.a.createElement(u.a,{to:"/",activeStyle:{color:"#A07092"},className:"menuLink"},e("menu.main"))),o.a.createElement(s.a.Item,null,o.a.createElement(u.a,{to:"/search",activeStyle:{color:"#A07092"},className:"menuLink"},e("menu.search")))),o.a.createElement(s.a.Item,null,o.a.createElement(m,null))))))}),v=(n(221),y);n(222),t.a=function(e){var t=e.children,n=a.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement(v,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("main",null,t),o.a.createElement("footer",null,"© Портал белорусских фотографов 2019")))}},212:function(e,t,n){"use strict";var a=n(213),r=n(0),o=n.n(r),i=n(230),l=n.n(i);function c(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,c=a.data.site,s=t||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},213:function(e){e.exports={data:{site:{siteMetadata:{title:"Photographers of Belarus",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},226:function(e,t,n){"use strict";e.exports={Timeline:n(227).default,TimelineItem:n(228).default}},227:function(e,t,n){"use strict";n(91),Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(0)),r=i(n(51)),o=i(n(198));function i(e){return e&&e.__esModule?e:{default:e}}n(241);var l=function(e){var t=e.animate,n=e.children,r=e.className,i=e.lineColor;return a.default.createElement("div",{className:"timeline--wrapper"},a.default.createElement("div",{className:(0,o.default)(r,"timeline",{"timeline--animate":t}),style:{color:""+i}},n))};l.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired,className:r.default.string,lineColor:r.default.string,animate:r.default.bool},l.defaultProps={animate:!0,className:"",lineColor:"#000"},t.default=l},228:function(e,t,n){"use strict";n(67),n(136),n(92),n(23),n(91),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=u(o),l=u(n(51)),c=u(n(198)),s=u(n(229));function u(e){return e&&e.__esModule?e:{default:e}}n(242);var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onVisibilitySensorChange=n.onVisibilitySensorChange.bind(n),n.state={visible:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"onVisibilitySensorChange",value:function(e){e&&this.setState({visible:!0})}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.children,r=e.dateText,l=e.dateStyle,u=e.dateComponent,f=e.dateInnerStyle,p=e.bodyContainerStyle,d=e.style,m=e.className,b=e.visibilitySensorProps,h=this.state.visible;return i.default.createElement("div",{id:t,className:(0,c.default)(m,"entry",{"timeline-item--no-children":""===n}),style:d},i.default.createElement(s.default,a({},b,{onChange:this.onVisibilitySensorChange}),i.default.createElement(o.Fragment,null,i.default.createElement("div",{className:"title"},i.default.createElement("div",{className:h?"bounce-in":"is-hidden"},null!==u?u:i.default.createElement("span",{style:l,className:"timeline-item-date"},i.default.createElement("time",{style:f,className:"timeline-item-dateinner",title:r},r)))),i.default.createElement("div",{className:"body"},i.default.createElement("div",{className:"body-container "+(h?"bounce-in":"is-hidden"),style:p},n)))))}}]),t}();f.propTypes={id:l.default.string,children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]),className:l.default.string,dateStyle:l.default.shape({}),dateInnerStyle:l.default.shape({}),bodyContainerStyle:l.default.shape({}),style:l.default.shape({}),dateText:l.default.string,dateComponent:l.default.oneOfType([l.default.string,l.default.func,l.default.node]),visibilitySensorProps:l.default.shape({})},f.defaultProps={id:"",children:"",dateComponent:null,className:"",dateStyle:null,bodyContainerStyle:null,dateInnerStyle:null,style:null,dateText:"",visibilitySensorProps:{partialVisibility:!0,offset:{bottom:50}}},t.default=f},229:function(e,t,n){var a;n(38),n(136),n(67),n(92),n(53),n(41),n(91),a=function(e,t){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var a=e.direction,r=e.value;switch(a){case"top":return n.top+r<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+r<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-r>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-r>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var a=n(1),r=n.n(a),o=n(2),i=n.n(o),l=n(0),c=n.n(l),s=n(3),u=n.n(s);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=d(t).call(this,e),n=!r||"object"!==f(r)&&"function"!=typeof r?m(a):r,h(m(n),"getContainer",function(){return n.props.containment||window}),h(m(n),"addEventListener",function(e,t,a,r){var o;n.debounceCheck||(n.debounceCheck={});var i=function(){o=null,n.check()},l={target:e,fn:r>-1?function(){o||(o=setTimeout(i,r||0))}:function(){clearTimeout(o),o=setTimeout(i,a||0)},getLastTimeout:function(){return o}};e.addEventListener(t,l.fn),n.debounceCheck[t]=l}),h(m(n),"startWatching",function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())}),h(m(n),"stopWatching",function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))}),h(m(n),"check",function(){var e,t,a=n.node;if(!a)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(a.getBoundingClientRect())),n.props.containment){var r=n.props.containment.getBoundingClientRect();t={top:r.top,left:r.left,bottom:r.bottom,right:r.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var o=n.props.offset||{};"object"===f(o)&&(t.top+=o.top||0,t.left+=o.left||0,t.bottom-=o.bottom||0,t.right-=o.right||0);var i={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},l=e.height>0&&e.width>0,c=l&&i.top&&i.left&&i.bottom&&i.right;if(l&&n.props.partialVisibility){var s=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(s=i[n.props.partialVisibility]),c=n.props.minTopValue?s&&e.top<=t.bottom-n.props.minTopValue:s}"string"==typeof o.direction&&"number"==typeof o.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",o.direction,o.value),c=u()(o,e,t));var p=n.state;return n.state.isVisible!==c&&(p={isVisible:c,visibilityRect:i},n.setState(p),n.props.onChange&&n.props.onChange(c)),p}),n.state={isVisible:null,visibilityRect:{}},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.node=i.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=i.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):r.a.Children.only(this.props.children)}}])&&p(n.prototype,a),o&&p(n,o),t}();h(y,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:r.a.createElement("span",null)}),h(y,"propTypes",{onChange:c.a.func,active:c.a.bool,partialVisibility:c.a.oneOfType([c.a.bool,c.a.oneOf(["top","right","bottom","left"])]),delayedCall:c.a.bool,offset:c.a.oneOfType([c.a.shape({top:c.a.number,left:c.a.number,bottom:c.a.number,right:c.a.number}),c.a.shape({direction:c.a.oneOf(["top","right","bottom","left"]),value:c.a.number})]),scrollCheck:c.a.bool,scrollDelay:c.a.number,scrollThrottle:c.a.number,resizeCheck:c.a.bool,resizeDelay:c.a.number,resizeThrottle:c.a.number,intervalCheck:c.a.bool,intervalDelay:c.a.number,containment:"undefined"!=typeof window?c.a.instanceOf(window.Element):c.a.any,children:c.a.oneOfType([c.a.element,c.a.func]),minTopValue:c.a.number})},function(e,t,n){"use strict";var a=n(6);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=a(n(0),n(71))},231:function(e,t,n){"use strict";n(29),n(30),n(13),n(50),n(138);var a=n(0),r=n.n(a),o=n(225),i=n(226),l=n(200),c=function(){var e=Object(l.b)().t,t=e("authors.0.activity",{returnObjects:!0}),n=Object.keys(t).map(function(e){return[e,t[e]]}).sort();return r.a.createElement("div",{className:"timeline_wrapper"},r.a.createElement("h3",{className:"timeline_title"},e("timeline")),r.a.createElement(i.Timeline,{lineColor:"#38292F"},n.map(function(e){return r.a.createElement(i.TimelineItem,{key:Object(o.uniqueId)(),dateText:e[0],dateInnerStyle:{background:"#38292F",color:"#FFF"},bodyContainerStyle:{textAlign:"left",color:"#000"}},e[1])})))};n(243),t.a=c},259:function(e,t,n){"use strict";var a=n(202),r=n(201),o=n(198),i=n.n(o),l=n(0),c=n.n(l),s=n(206),u=n(234),f=c.a.forwardRef(function(e,t){var n=e.bsPrefix,o=e.variant,l=e.size,f=e.active,p=e.className,d=e.block,m=e.type,b=e.as,h=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(s.b)(n,"btn"),v=i()(p,y,f&&"active",y+"-"+o,d&&y+"-block",l&&y+"-"+l);if(h.href)return c.a.createElement(u.a,Object(a.a)({},h,{as:b,innerRef:t,className:i()(v,h.disabled&&"disabled")}));var g=b||"button";return t&&(h.ref=t),c.a.createElement(g,Object(a.a)({},h,{type:m,className:v}))});f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=f}}]);
//# sourceMappingURL=component---src-pages-author-js-d72cb7181bbbf2a99e9f.js.map