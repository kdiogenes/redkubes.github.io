"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=l(r),d=a,m=b["".concat(s,".").concat(d)]||b[d]||c[d]||o;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},675:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={slug:"apps/kubeapps",title:"Working with Kubeapps",sidebar_label:"Kubeapps"},p=void 0,i={unversionedId:"app-kubeapps",id:"app-kubeapps",title:"Working with Kubeapps",description:"Kubeapps is a web-based UI for deploying and managing applications in Kubernetes clusters. Kubeapps allows you to:",source:"@site/docs/app-kubeapps.md",sourceDirName:".",slug:"/apps/kubeapps",permalink:"/docs/apps/kubeapps",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/app-kubeapps.md",tags:[],version:"current",frontMatter:{slug:"apps/kubeapps",title:"Working with Kubeapps",sidebar_label:"Kubeapps"},sidebar:"mainSidebar",previous:{title:"Knative",permalink:"/docs/apps/knative"},next:{title:"Loki",permalink:"/docs/apps/loki"}},s={},l=[],u={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kubeapps is a web-based UI for deploying and managing applications in Kubernetes clusters. Kubeapps allows you to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browse and deploy Helm charts from chart repositories"),(0,a.kt)("li",{parentName:"ul"},"Inspect, upgrade and delete Helm-based applications installed in the cluster"),(0,a.kt)("li",{parentName:"ul"},"Add custom and private chart repositories"),(0,a.kt)("li",{parentName:"ul"},"Browse and deploy Kubernetes Operators")),(0,a.kt)("p",null,"Kubeapps is not yet user- and tenant aware. Teams can login to Kubeapps using the generated token that is provided when downloading the KUBECFG (through Otomi Console)."),(0,a.kt)("p",null,"Take notice: Most of the public charts do not comply with the Otomi security policy baseline."))}c.isMDXComponent=!0}}]);