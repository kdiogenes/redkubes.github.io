(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return a})),o.d(t,"toc",(function(){return u})),o.d(t,"default",(function(){return l}));var r=o(3),n=o(7),s=(o(0),o(176)),i={slug:"sre/known-issues/",title:"Known Issues",sidebar_label:"Overview"},a={unversionedId:"ki-overview",id:"ki-overview",isDocsHomePage:!1,title:"Known Issues",description:'Sometimes we notice minor issues with desired state of pods after deployment. Those usually go away after some time, usually when disk related activity is finished. The time it takes to (un)mount disks differs quite a lot between cloud provider. Google is the fastest, and Azure the slowest (and most problematic, as AKS does not support auto-resizing). We will not go into k8s nor cloud specifics here, but we thought it important to make you aware about this as most "issues" become non-issues after some minutes.',source:"@site/docs/ki-overview.md",slug:"/sre/known-issues/",permalink:"/docs/sre/known-issues/",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ki-overview.md",version:"current",sidebar_label:"Overview",sidebar:"mainSidebar",previous:{title:"SRE Troubleshooting Checklist",permalink:"/docs/sre/troubleshooting"},next:{title:"Known Issues: Current Otomi CLI",permalink:"/docs/sre/known-issues/cli"}},u=[{value:"Suggested debug tools",id:"suggested-debug-tools",children:[]},{value:"Issues with otomi cli",id:"issues-with-otomi-cli",children:[]},{value:"Core apps issues",id:"core-apps-issues",children:[]}],c={toc:u};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Sometimes we notice minor issues with desired state of pods after deployment. Those usually go away after some time, usually when disk related activity is finished. The time it takes to (un)mount disks differs quite a lot between cloud provider. Google is the fastest, and Azure the slowest (and most problematic, as ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Azure/AKS/issues/1477"}),"AKS does not support auto-resizing"),'). We will not go into k8s nor cloud specifics here, but we thought it important to make you aware about this as most "issues" become non-issues after some minutes.'),Object(s.b)("h2",{id:"suggested-debug-tools"},"Suggested debug tools"),Object(s.b)("p",null,"We recommend using ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://k9scli.io"}),"k9s")," or ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://k8slens.dev"}),"Lens")," for debugging and navigating resources."),Object(s.b)("h2",{id:"issues-with-otomi-cli"},"Issues with otomi cli"),Object(s.b)("p",null,"Otomi uses a lot of tools under the hood, and we have a ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"cli"}),"dedicated section for the Otomi CLI")," to help you drill down into related issues."),Object(s.b)("h2",{id:"core-apps-issues"},"Core apps issues"),Object(s.b)("p",null,"Otomi configures its suite of applications to work together. It expects certain conditions and dependencies to be in place. Under certain circumstances you might see problems. So far we have documented known issues for the following apps:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"istio"}),"Istio")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"harbor"}),"Harbor")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"loki"}),"Loki"))))}l.isMDXComponent=!0},176:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),l=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(o),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||s;return o?n.a.createElement(m,a(a({ref:t},c),{},{components:o})):n.a.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=o[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);