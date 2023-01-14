"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,g=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={slug:"co-monitoring",title:"Platform settings",sidebar_label:"Co-monitoring"},s=void 0,a={unversionedId:"for-ops/console/settings/co-monitoring",id:"for-ops/console/settings/co-monitoring",title:"Platform settings",description:"Co-Monitoring",source:"@site/docs/for-ops/console/settings/co-monitoring.md",sourceDirName:"for-ops/console/settings",slug:"/for-ops/console/settings/co-monitoring",permalink:"/docs/for-ops/console/settings/co-monitoring",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/console/settings/co-monitoring.md",tags:[],version:"current",frontMatter:{slug:"co-monitoring",title:"Platform settings",sidebar_label:"Co-monitoring"},sidebar:"mainSidebar",previous:{title:"Alerts",permalink:"/docs/for-ops/console/settings/alerts"},next:{title:"Azure",permalink:"/docs/for-ops/console/settings/azure"}},c={},l=[{value:"Co-Monitoring",id:"co-monitoring",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"co-monitoring"},"Co-Monitoring"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Co-Monitoring settings will only be active when Alertmanager is active.")),(0,r.kt)("p",null,"This section is similar to the ",(0,r.kt)("a",{parentName:"p",href:"alerts"},"Alerts"),' section, but with a different intent: the configuration here is meant to target 3rd party alerting endpoints. Those will become active when the Remote monitoring option (in Settings/Otomi) is turned on. When used, the "Alerts" section should only contain endpoints for the 3rd party. Of course teams can still configure their own alert endpoints.'))}u.isMDXComponent=!0}}]);