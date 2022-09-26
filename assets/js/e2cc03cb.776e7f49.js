"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<s;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={slug:"ingress-classes/",title:"Use private ingress class"},l=void 0,o={unversionedId:"for-ops/how-to/ingress-classes",id:"for-ops/how-to/ingress-classes",title:"Use private ingress class",description:"When Otomi is installed, exposure (ingress) for all services (included exposure for platform services) is handeled by the default platform ingress class using a public (cloud) load balancer. Otomi offers the option to use multiple ingress classes. Each class get a dedicated ingress controller. In case of security requirements, where platform services are not allowed to be exposed publicly, the default platform class can be configured to use a private load balancer instead of a public one. Additional (public) ingress classes can be created to expose team (application) services.",source:"@site/docs/for-ops/how-to/ingress-classes.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/ingress-classes/",permalink:"/docs/for-ops/how-to/ingress-classes/",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/how-to/ingress-classes.md",tags:[],version:"current",frontMatter:{slug:"ingress-classes/",title:"Use private ingress class"},sidebar:"mainSidebar",previous:{title:"Backup",permalink:"/docs/for-ops/console/settings/backup"},next:{title:"Switch to use DNS",permalink:"/docs/for-ops/how-to/switch-to-dns"}},i={},c=[{value:"prerequisites",id:"prerequisites",level:2},{value:"related documentation",id:"related-documentation",level:2},{value:"Steps",id:"steps",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When Otomi is installed, exposure (ingress) for all services (included exposure for platform services) is handeled by the default platform ingress class using a public (cloud) load balancer. Otomi offers the option to use multiple ingress classes. Each class get a dedicated ingress controller. In case of security requirements, where platform services are not allowed to be exposed publicly, the default platform class can be configured to use a private load balancer instead of a public one. Additional (public) ingress classes can be created to expose team (application) services."),(0,n.kt)("h2",{id:"prerequisites"},"prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access to the internal subnet (using a VPN or a Jumphost)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cluster.provider=azure"))),(0,n.kt)("h2",{id:"related-documentation"},"related documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/aks/internal-lb"},"Azure AKS, create internal load balancer"))),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("p",null,"Steps to change to use a private load balancer for exposing platform services:"),(0,n.kt)("p",null,"If there are no team services created that use the default platform class, then you can skip step 2."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create an additional public ingress class")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to Ingress Classes under Settings in the web UI"),(0,n.kt)("li",{parentName:"ul"},"Under ",(0,n.kt)("inlineCode",{parentName:"li"},"additional classes")," click on ",(0,n.kt)("inlineCode",{parentName:"li"},"add item")),(0,n.kt)("li",{parentName:"ul"},"Provide a name for the additional ingress class (for example ",(0,n.kt)("inlineCode",{parentName:"li"},"teams"),")"),(0,n.kt)("li",{parentName:"ul"},"Use the public load balancer type"),(0,n.kt)("li",{parentName:"ul"},"(optional) If you would like to create a new load balancer in another resource group, fill in the name of that resource group"),(0,n.kt)("li",{parentName:"ul"},"(optional) If you would like to use a static (public) IP for the load balancer, then fill in the IP address. More information about using static IP addresses can be found ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/aks/static-ip"},"here")),(0,n.kt)("li",{parentName:"ul"},"Click submit and then deploy changes")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Move all existing team services to use the new ingress class:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("inlineCode",{parentName:"li"},"services"),", click on the service you would like to move to the new ingress class"),(0,n.kt)("li",{parentName:"ul"},"Under ",(0,n.kt)("inlineCode",{parentName:"li"},"Exposure Ingress"),", fill in the name of the new ingress class in the ",(0,n.kt)("inlineCode",{parentName:"li"},"ingress class name")," field."),(0,n.kt)("li",{parentName:"ul"},"Click submit and then deploy changes")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Change the platform class from public to private:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to Ingress Classes under Settings in the web UI"),(0,n.kt)("li",{parentName:"ul"},"Under ",(0,n.kt)("inlineCode",{parentName:"li"},"Platform class"),", select ",(0,n.kt)("inlineCode",{parentName:"li"},"private")),(0,n.kt)("li",{parentName:"ul"},"(optional) If you would like to use a static IP for the load balancer, then fill in the IP address")),(0,n.kt)("p",null,"By default the internal load balancer is is created in the node resource group and connected to the same virtual network as the AKS cluster. If you would like to use a different resource group and subnet, fill in the Resource Group name and the subnet."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click submit and then deploy changes")),(0,n.kt)("p",null,"When the platform ingress class has been configured to use an internal load balancer, Otomi will add the following annotations to the K8s load balancer service of the platform ingress controller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'service.beta.kubernetes.io/azure-load-balancer-resource-group: {{ . }}\nservice.beta.kubernetes.io/azure-load-balancer-internal: "true"\nservice.beta.kubernetes.io/azure-load-balancer-internal-subnet: "{{ . }}"\n')))}p.isMDXComponent=!0}}]);