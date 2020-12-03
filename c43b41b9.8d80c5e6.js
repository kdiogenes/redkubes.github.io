(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{114:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(o),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return o?n.a.createElement(m,a(a({ref:t},u),{},{components:o})):n.a.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=o[u];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},98:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return a})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(2),n=o(6),i=(o(0),o(114)),s={slug:"troubleshooting",title:"Troubleshooting Overview",sidebar_label:"Overview"},a={unversionedId:"ts-overview",id:"ts-overview",isDocsHomePage:!1,title:"Troubleshooting Overview",description:"become non-issues after some minutes.",source:"@site/docs/ts-overview.md",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/redkubes/otomi/tree/master/docs/ts-overview.md",version:"current",sidebar_label:"Overview",sidebar:"mainSidebar",previous:{title:"Deploy changes",permalink:"/docs/deploy-changes"},next:{title:"Troubleshooting: Otomi CLI",permalink:"/docs/troubleshooting/cli"}},c=[{value:"Suggested debug tools",id:"suggested-debug-tools",children:[]},{value:"Issues with otomi cli",id:"issues-with-otomi-cli",children:[]},{value:"Core apps issues",id:"core-apps-issues",children:[]}],u={rightToc:c};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes we notice minor issues with desired state of pods after deployment. Those usually go away after some time, usually when disk related activity is finished. The time it takes to (un)mount disks differs quite a lot between cloud provider. Google is the fastest, and Azure the slowest (and most problematic, as ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Azure/AKS/issues/1477"}),"AKS does not support auto-resizing"),'). We will not go into k8s nor cloud specifics here, but we thought it important to make you aware about this as most "issues" become non-issues after some minutes.'),Object(i.b)("p",null,"Let's focus instead on the tooling and applications we have chosen for our platform. Make sure to load the aliases required to perform documented solutions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),". bin/aliases\n")),Object(i.b)("h2",{id:"suggested-debug-tools"},"Suggested debug tools"),Object(i.b)("p",null,"We recommend using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://k9scli.io"}),"k9s")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://k8slens.dev"}),"Lens")," for debugging and navigating resources."),Object(i.b)("h2",{id:"issues-with-otomi-cli"},"Issues with otomi cli"),Object(i.b)("p",null,"Otomi uses a lot of tools under the hood, and we have ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"troubleshooting/cli"}),"dedicated troubleshooting documentation for the Otomi CLI")," to help you drill down into related issues."),Object(i.b)("h2",{id:"core-apps-issues"},"Core apps issues"),Object(i.b)("p",null,"Otomi configures its suite of applications to work together. It expects certain conditions and dependencies to be in place. Under certain circumstances you might see problems. So far we have documented troubleshooting steps for the following apps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"troubleshooting/harbor"}),"Harbor"))))}l.isMDXComponent=!0}}]);