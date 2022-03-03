"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1830],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return b}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),b=a,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||o;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4256:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return b}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={slug:"apps/harbor",title:"Working with Harbor",sidebar_label:"Harbor"},c=void 0,u={unversionedId:"app-harbor",id:"app-harbor",title:"Working with Harbor",description:"Harbor is an open-source registry that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted. As a CNCF graduated project, Harbor delivers compliance, performance, and interoperability to help you consistently and securely manage artifacts across cloud-native compute platforms like Kubernetes. (source//goharbor.io/)",source:"@site/docs/app-harbor.md",sourceDirName:".",slug:"/apps/harbor",permalink:"/docs/apps/harbor",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/app-harbor.md",tags:[],version:"current",frontMatter:{slug:"apps/harbor",title:"Working with Harbor",sidebar_label:"Harbor"},sidebar:"mainSidebar",previous:{title:"Grafana",permalink:"/docs/apps/grafana"},next:{title:"Keycloak",permalink:"/docs/apps/keycloak"}},l={},p=[],f={toc:p};function b(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Harbor is an open-source registry that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted. As a ",(0,o.kt)("a",{parentName:"p",href:"https://www.cncf.io/announcements/2020/06/23/cloud-native-computing-foundation-announces-harbor-graduation/"},"CNCF")," graduated project, Harbor delivers compliance, performance, and interoperability to help you consistently and securely manage artifacts across cloud-native compute platforms like Kubernetes. (source: ",(0,o.kt)("a",{parentName:"p",href:"https://goharbor.io/"},"https://goharbor.io/"),")"),(0,o.kt)("p",null,"Harbor has been made user and tenant aware. Otomi runs automated tasks that take care of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating a project in Harbor for each team"),(0,o.kt)("li",{parentName:"ul"},"Creating a bot-account for each team"),(0,o.kt)("li",{parentName:"ul"},"Creating a Kubernetes pull secret in the team namespace to enable pulling of images out of the local registry")))}b.isMDXComponent=!0}}]);