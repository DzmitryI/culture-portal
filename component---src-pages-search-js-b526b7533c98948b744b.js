(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return d});a(38);var n=a(0),r=a.n(n),o=a(225),l=a(200),c=a(216),i=a(204),u=a(210),s=a(212);var m=function(e){var t=e.authors.filter(function(e){return e.node.frontmatter.lng===c.a.language}).map(function(e){return r.a.createElement(i.a,{key:Object(o.uniqueId)(),to:e.node.frontmatter.path},e.node.frontmatter.name,r.a.createElement("br",null))});return r.a.createElement("ul",null,r.a.createElement("h1",null,"List"),t)};m.defaultProps={authors:[]};var d="3658327319",p=function(e){var t,a;function n(t){var a,n=(a=e.call(this,t)||this).props.data;return n.allJavascriptFrontmatter?a.state={authors:n.allJavascriptFrontmatter.edges}:a.state={authors:{}},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.t,t=this.state.authors;return r.a.createElement(u.a,null,r.a.createElement(s.a,{title:"Page two"}),r.a.createElement(i.a,{to:"/"},e("home")),r.a.createElement("h1",null,e("List of Authors")),r.a.createElement(m,{authors:t}))},n}(r.a.Component);t.default=Object(l.c)()(p),p.defaultProps={data:{}}},199:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(66),l=a.n(o);a.d(t,"a",function(){return l.a});a(203),a(9).default.enqueue;var c=r.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&o(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(i,{data:t,query:a,render:n||o,staticQueryData:e})})}},203:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},204:function(e,t,a){"use strict";a(29),a(30),a(13),a(50),a(23);var n=a(0),r=a.n(n),o=a(199),l=a(216);t.a=function(e){var t=e.to,a=e.children,n=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["to","children"]),c=l.a.language;return r.a.createElement(o.a,Object.assign({to:c?"/"+c+t:""+t},n),a)}},207:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(93);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Photographers of Belarus"}}}}},209:function(e,t,a){e.exports=a.p+"static/logo-d0d29f8a8bcfbff327902b08e3e073f5.png"},210:function(e,t,a){"use strict";var n=a(208),r=a(0),o=a.n(r),l=a(200),c=a(338),i=a(337),u=a(339),s=a(204),m=(a(40),a(217)),d=a.n(m),p=(a(199),function(){var e=Object(l.b)(),t=e.t,a=e.i18n,n=Object(r.useState)(a.language),c=n[0],i=n[1];return o.a.createElement(d.a,{className:"select-language"},o.a.createElement(d.a.Group,{className:"mb-0"},o.a.createElement(d.a.Control,{as:"select",value:c,onChange:function(e){!function(e){a.changeLanguage(e);var t=window.location.pathname.split("/").slice(2).join("/");console.log("go to: ","/"+e+"/"+t)}(""+e.target.value),i(""+e.target.value)}},o.a.createElement("option",{value:"ru"},t("russian")),o.a.createElement("option",{value:"by"},t("belorussian")),o.a.createElement("option",{value:"en"},t("english")))))}),f=(a(219),p),g=a(209),h=a.n(g),E=(a(220),function(){var e=Object(l.b)().t;return o.a.createElement("header",null,o.a.createElement(c.a,{expand:"md"},o.a.createElement(c.a.Brand,null,o.a.createElement(s.a,{to:"/"},o.a.createElement(i.a,{src:h.a}))),o.a.createElement(c.a.Toggle,{"aria-controls":"navbar"}),o.a.createElement(c.a.Collapse,{id:"navbar"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"wrapper"},o.a.createElement(u.a.Item,null,o.a.createElement(s.a,{to:"/",activeStyle:{color:"#A07092"},className:"menuLink"},e("menu.main"))),o.a.createElement(u.a.Item,null,o.a.createElement(s.a,{to:"/search",activeStyle:{color:"#A07092"},className:"menuLink"},e("menu.search")))),o.a.createElement(u.a.Item,null,o.a.createElement(f,null))))))}),v=(a(221),E);a(222),t.a=function(e){var t=e.children,a=n.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement(v,{siteTitle:a.site.siteMetadata.title}),o.a.createElement("main",null,t),o.a.createElement("footer",null,"© Портал белорусских фотографов 2019")))}},212:function(e,t,a){"use strict";var n=a(213),r=a(0),o=a.n(r),l=a(230),c=a.n(l);function i(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,i=n.data.site,u=t||i.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(r)})}i.defaultProps={lang:"en",meta:[],description:""},t.a=i},213:function(e){e.exports={data:{site:{siteMetadata:{title:"Photographers of Belarus",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-search-js-b526b7533c98948b744b.js.map