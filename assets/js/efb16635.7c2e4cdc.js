"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8773],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(b,o(o({ref:t},u),{},{components:a})):r.createElement(b,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=m;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n.mdxType="string"==typeof e?e:i,o[1]=n;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const l={slug:"overview",title:"Get started with Otomi for Developers",sidebar_label:"Get Started Labs"},o=void 0,n={unversionedId:"for-devs/get-started/overview",id:"for-devs/get-started/overview",title:"Get started with Otomi for Developers",description:"Welcome to Otomi! If you are a developer and are going to use Otomi Platform, these getting started labs are for you. Step by step we'll guide you in using Otomi to deploy and manage your containerized applications. The getting started with Otomi for developers contains a set of labs to cover all the activities in the following developer workflow:",source:"@site/docs/for-devs/get-started/overview.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/overview",permalink:"/docs/for-devs/get-started/overview",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/overview.md",tags:[],version:"current",frontMatter:{slug:"overview",title:"Get started with Otomi for Developers",sidebar_label:"Get Started Labs"},sidebar:"mainSidebar",previous:{title:"Activation",permalink:"/docs/get-started/activation"},next:{title:"Overview",permalink:"/docs/for-ops/console/overview"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Building images",id:"building-images",level:2},{value:"Deploy application workloads",id:"deploy-application-workloads",level:2},{value:"Secure",id:"secure",level:2},{value:"Expose",id:"expose",level:2},{value:"Monitor",id:"monitor",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to Otomi! If you are a developer and are going to use Otomi Platform, these getting started labs are for you. Step by step we'll guide you in using Otomi to deploy and manage your containerized applications. The getting started with Otomi for developers contains a set of labs to cover all the activities in the following developer workflow:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dev-workflow",src:a(2428).Z,width:"2770",height:"2503"})),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lab 1: ",(0,i.kt)("a",{parentName:"li",href:"lab-1"},"Prerequisites")),(0,i.kt)("li",{parentName:"ul"},"Lab 2: ",(0,i.kt)("a",{parentName:"li",href:"lab-2"},"Access Otomi Console, download the Kubecfg and use Kubectl"))),(0,i.kt)("h2",{id:"building-images"},"Building images"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lab 3: ",(0,i.kt)("a",{parentName:"li",href:"lab-3"},"Create a private Git repo")),(0,i.kt)("li",{parentName:"ul"},"Lab 4: ",(0,i.kt)("a",{parentName:"li",href:"lab-4"},"Create a CI (build) pipeline")),(0,i.kt)("li",{parentName:"ul"},"Lab 5: ",(0,i.kt)("a",{parentName:"li",href:"lab-5"},"Push container images to your private repo")),(0,i.kt)("li",{parentName:"ul"},"Lab 6: ",(0,i.kt)("a",{parentName:"li",href:"lab-6"},"Create builds using Otomi")),(0,i.kt)("li",{parentName:"ul"},"Lab 7: ",(0,i.kt)("a",{parentName:"li",href:"lab-7"},"Scan your images for vulnerabilities"))),(0,i.kt)("h2",{id:"deploy-application-workloads"},"Deploy application workloads"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lab 8: ",(0,i.kt)("a",{parentName:"li",href:"lab-8"},"Create secrets")),(0,i.kt)("li",{parentName:"ul"},"Lab 9: ",(0,i.kt)("a",{parentName:"li",href:"lab-9"},"BYO manifest to deploy a workload using Kubectl")),(0,i.kt)("li",{parentName:"ul"},"Lab 10: ",(0,i.kt)("a",{parentName:"li",href:"lab-10"},"BYO manifest to deploy a workload with Argo CD")),(0,i.kt)("li",{parentName:"ul"},"Lab 11: ",(0,i.kt)("a",{parentName:"li",href:"lab-11"},"Configure ArgoCD image updater")),(0,i.kt)("li",{parentName:"ul"},"Lab 12: ",(0,i.kt)("a",{parentName:"li",href:"lab-12"},"Deploy BYO Helm chart")),(0,i.kt)("li",{parentName:"ul"},"lab 13: ",(0,i.kt)("a",{parentName:"li",href:"lab-13"},"Create regular workloads using Otomi charts")),(0,i.kt)("li",{parentName:"ul"},"lab 14: ",(0,i.kt)("a",{parentName:"li",href:"lab-14"},"Deploy Serverless workloads using Otomi charts"))),(0,i.kt)("h2",{id:"secure"},"Secure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lab 15: ",(0,i.kt)("a",{parentName:"li",href:"lab-15"},"Check policy compliance")),(0,i.kt)("li",{parentName:"ul"},"Lab 16: ",(0,i.kt)("a",{parentName:"li",href:"lab-16"},"Check for threads")),(0,i.kt)("li",{parentName:"ul"},"Lab 17: ",(0,i.kt)("a",{parentName:"li",href:"lab-17"},"Scan your running containers for vulnerabilities"))),(0,i.kt)("h2",{id:"expose"},"Expose"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lab 18: ",(0,i.kt)("a",{parentName:"li",href:"lab-18"},"Publicly expose a service")),(0,i.kt)("li",{parentName:"ul"},"Lab 19: ",(0,i.kt)("a",{parentName:"li",href:"lab-19"},"Configuring network policies"))),(0,i.kt)("h2",{id:"monitor"},"Monitor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lab 20: ",(0,i.kt)("a",{parentName:"li",href:"lab-20"},"View container logs")),(0,i.kt)("li",{parentName:"ul"},"Lab 21: ",(0,i.kt)("a",{parentName:"li",href:"lab-21"},"View container metrics")),(0,i.kt)("li",{parentName:"ul"},"Lab 22: ",(0,i.kt)("a",{parentName:"li",href:"lab-22"},"Monitor custom metrics")),(0,i.kt)("li",{parentName:"ul"},"Lab 23: ",(0,i.kt)("a",{parentName:"li",href:"lab-23"},"Monitoring service availability"))))}c.isMDXComponent=!0},2428:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dev-workflow-78b3d265c7b66cbc28d352ba35836e36.png"}}]);