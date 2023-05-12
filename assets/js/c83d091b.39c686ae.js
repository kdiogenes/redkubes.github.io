"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={slug:"lab-3",title:"Create a private Git repo",sidebar_label:"Lab 3"},i=void 0,l={unversionedId:"for-devs/get-started/lab-3",id:"for-devs/get-started/lab-3",title:"Create a private Git repo",description:"As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, Otomi has you covered. Otomi includes a complete self-hosted Git solution called Gitea.",source:"@site/docs/for-devs/get-started/lab-3.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-3",permalink:"/docs/for-devs/get-started/lab-3",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-3.md",tags:[],version:"current",frontMatter:{slug:"lab-3",title:"Create a private Git repo",sidebar_label:"Lab 3"},sidebar:"mainSidebar",previous:{title:"Lab 2",permalink:"/docs/for-devs/get-started/lab-2"},next:{title:"lab 4",permalink:"/docs/for-devs/get-started/lab-4"}},s={},p=[{value:"Create a private repository",id:"create-a-private-repository",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a developer you'll need a Git repository for your code. Most organizations will probably have a central code repository like Gitlab, or use Github. But if you don't, Otomi has you covered. Otomi includes a complete self-hosted Git solution called Gitea."),(0,o.kt)("p",null,"As a team member, you can create and manage your own repositories."),(0,o.kt)("h2",{id:"create-a-private-repository"},"Create a private repository"),(0,o.kt)("p",null,"In the apps section in Otomi console, you'll see an app called Gitea. Click on it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(1194).Z,width:"2200",height:"1030"})),(0,o.kt)("p",null,"Now follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Sign In")," with OpenID")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(8379).Z,width:"2200",height:"1082"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"+ New Repository"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(9857).Z,width:"2200",height:"886"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fill in a Repository Name"),(0,o.kt)("li",{parentName:"ul"},"Optional: Enable ",(0,o.kt)("inlineCode",{parentName:"li"},"Initialize Repository")),(0,o.kt)("li",{parentName:"ul"},"Optional: Make Repository Private"),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Create Repository"))),(0,o.kt)("p",null,"Your repo is now ready to be used!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:r(3471).Z,width:"2180",height:"1318"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that you as a user are now the owner of this repo and can add other team members to collaborate. Otomi does not create a group in Gitea that contains all the team member. Team members first have to sign in to Gitea (using OpenID) before they can be added to an existing repo.")))}u.isMDXComponent=!0},8379:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/gitea-openid-dca1d73e3512321edcd5fc9a3c290cb0.png"},3471:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/new-gitea-repo-ready-fdeb4574a283f5d957b3dae6e000f2af.png"},9857:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/new-gitea-repo-6784f37af5481c83fe32609e85a9b221.png"},1194:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/team-app-gitea-7f5e97b4c4cefc6fc442a01a11966297.png"}}]);