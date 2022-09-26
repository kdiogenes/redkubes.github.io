"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5752],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>p});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(o),p=r,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return o?n.createElement(b,a(a({ref:t},c),{},{components:o})):n.createElement(b,a({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3163:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const i={title:"Get started with contributing",slug:"contributing",sidebar_label:"Getting started"},a=void 0,u={unversionedId:"contributing",id:"contributing",title:"Get started with contributing",description:"Welcome",source:"@site/community/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/community/contributing",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/community/contributing.md",tags:[],version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1664217436,formattedLastUpdatedAt:"9/26/2022",frontMatter:{title:"Get started with contributing",slug:"contributing",sidebar_label:"Getting started"},sidebar:"community",previous:{title:"Values",permalink:"/community/community-values"},next:{title:"Expectations",permalink:"/community/contributing/expectations"}},l={},s=[{value:"Welcome",id:"welcome",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:3},{value:"Developer guid",id:"developer-guid",level:3},{value:"Setting up your development environment",id:"setting-up-your-development-environment",level:3},{value:"Community Expectations and Roles",id:"community-expectations-and-roles",level:3},{value:"Community",id:"community",level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"welcome"},"Welcome"),(0,r.kt)("p",null,"So you might be interested in contributing to Otomi, awesome! This guide will help you understand the overall organization of the project, and direct you to the best places to get started contributing. You'll be able to pick up issues, write code to fix them, and get your work reviewed and merged. All feedback is welcome!"),(0,r.kt)("p",null,"This document is the single source of truth for how to contribute to the following code bases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-core/"},"otomi-core"),": The heart of Otomi, a monorepo containing all the apps and configurations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-tasks/"},"otomi-tasks"),": The tasks used by core to massage apps to adhere to the configurations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-clients/"},"otomi-clients"),": The openapi generator for the clients used by the tasks")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before submitting code to Otomi, you should first complete the following prerequisites. Completing these steps will make your first contribution easier:"),(0,r.kt)("h3",{id:"code-of-conduct"},"Code of Conduct"),(0,r.kt)("p",null,"Please make sure to read and observe the ",(0,r.kt)("a",{parentName:"p",href:"code-of-conduct"},"Code of Conduct")," and\n",(0,r.kt)("a",{parentName:"p",href:"community-values"},"Community Values")),(0,r.kt)("h3",{id:"developer-guid"},"Developer guid"),(0,r.kt)("p",null,"Effective development starts with an understanding the code structure and the relationship between different components of the system. Read the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/docs/development.md"},"Code development guide")," to learn how to develop on Otomi."),(0,r.kt)("h3",{id:"setting-up-your-development-environment"},"Setting up your development environment"),(0,r.kt)("p",null,"It is not required to set up a developer environment in order to contribute to Otomi, but if you do plan to contribute code changes, follow the instructions in the Developer Docs on how to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/docs/setup.md"},"Set up your development environment"),"."),(0,r.kt)("h3",{id:"community-expectations-and-roles"},"Community Expectations and Roles"),(0,r.kt)("p",null,"Otomi is a community project. Consequently, it is wholly dependent on its community to provide a productive, friendly and collaborative environment."),(0,r.kt)("p",null,"Please read and review the ","[Community Expectations]"," for an understanding of code and review expectations."),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("p",null,"Otomi is just starting its open-source community. As many open source projects often do, it depends on new people becoming members and regular code contributors. Please consider joining the Otomi community!"))}d.isMDXComponent=!0}}]);