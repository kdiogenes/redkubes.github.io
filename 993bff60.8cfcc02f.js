(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return r?o.a.createElement(d,c(c({ref:t},p),{},{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(114)),i={slug:"support",title:"Support",sidebar_label:"Support"},c={unversionedId:"community-support",id:"community-support",isDocsHomePage:!1,title:"Support",description:"We recently started publishing our code, and would love to get your feedback. Maybe you even want to contribute with a PR!",source:"@site/community/community-support.md",slug:"/support",permalink:"/community/support",editUrl:"https://github.com/redkubes/otomi/edit/master/community/community-support.md",version:"current",lastUpdatedBy:"Maurice Faber",lastUpdatedAt:1607006336,sidebar_label:"Support",sidebar:"community",next:{title:"Contributor Covenant Code of Conduct",permalink:"/community/code-of-conduct"}},u=[],p={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We recently started publishing our code, and would love to get your feedback. Maybe you even want to contribute with a PR!"),Object(a.b)("p",null,"Before you start we would like you to read our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"code-of-conduct"}),"Code of Conduct"),". We also have adopted the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.contributor-covenant.org"}),"Contributor Covenant")," and we expect that all community members adhere to the guidelines within."),Object(a.b)("p",null,"If you would like to reach out to the community, or have any questions, you can find us here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitter.im/redkubes/community"}),"Gitter"))),Object(a.b)("p",null,"If you would like to contribute please visit the repositories involved, and pay attention to their respective guidelines:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redkubes/otomi-core/"}),"otomi-core"),": The heart of Otomi, a monorepo containing all the apps and configuration."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redkubes/otomi-tasks/"}),"otomi-tasks"),": The tasks used by core to massage apps to adhere to the configuration."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redkubes/otomi-clients/"}),"otomi-clients"),": The openapi generator for the clients used by the tasks.")))}l.isMDXComponent=!0}}]);