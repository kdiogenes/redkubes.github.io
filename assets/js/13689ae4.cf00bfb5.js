"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={slug:"backups",title:"Platform - Backups",sidebar_label:"Backups"},l=void 0,s={unversionedId:"for-ops/console/backups",id:"for-ops/console/backups",title:"Platform - Backups",description:"To enable this feature, first make sure Velero is activated.",source:"@site/docs/for-ops/console/backups.md",sourceDirName:"for-ops/console",slug:"/for-ops/console/backups",permalink:"/docs/for-ops/console/backups",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/console/backups.md",tags:[],version:"current",frontMatter:{slug:"backups",title:"Platform - Backups",sidebar_label:"Backups"},sidebar:"mainSidebar",previous:{title:"Services",permalink:"/docs/for-ops/console/services"},next:{title:"Cluster",permalink:"/docs/for-ops/console/settings/cluster"}},c={},p=[],i={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To enable this feature, first make sure ",(0,a.kt)("a",{parentName:"p",href:"/docs/apps/velero"},"Velero")," is activated.")),(0,a.kt)("p",null,"All known Builds on the platform are listed here. Builds can be sorted based on:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the backup")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Schedule"),(0,a.kt)("td",{parentName:"tr",align:null},"When the backup is scheduled to run")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Team"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the Team responsible for the backup")))),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/docs/for-devs/console/backups"},"here")," to create a backup."))}u.isMDXComponent=!0}}]);