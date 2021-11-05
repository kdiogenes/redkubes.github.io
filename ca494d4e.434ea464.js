(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(189)),i={slug:"tutorials/full-install-azure",title:"Installing Otomi with all options",sidebar_label:"Full Otomi install in Azure"},l={unversionedId:"tutorial-0-1",id:"tutorial-0-1",isDocsHomePage:!1,title:"Installing Otomi with all options",description:"In this tutorial, you are going to install Otomi with the following features:",source:"@site/docs/tutorial-0-1.md",slug:"/tutorials/full-install-azure",permalink:"/docs/tutorials/full-install-azure",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/tutorial-0-1.md",version:"current",sidebar_label:"Full Otomi install in Azure"},u=[{value:"Set up AKS",id:"set-up-aks",children:[]}],c={toc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this tutorial, you are going to install Otomi with the following features:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"KMS to encrypt sensitive information in the values repository"),Object(a.b)("li",{parentName:"ul"},"Use Azure Active Directory as IDP"),Object(a.b)("li",{parentName:"ul"},"Use a public DNS zone"),Object(a.b)("li",{parentName:"ul"},"Use LetsEncrypt as a CA for certificates")),Object(a.b)("p",null,"For this tutorial, we assume you have:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Access to an Azure subscription"),Object(a.b)("li",{parentName:"ul"},"A public DNS zone"),Object(a.b)("li",{parentName:"ul"},"Azure Active Directory for user management")),Object(a.b)("h2",{id:"set-up-aks"},"Set up AKS"))}s.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(m,l(l({ref:t},c),{},{components:r})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);