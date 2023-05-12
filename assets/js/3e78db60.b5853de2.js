"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),y=n,b=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"lab-18",title:"Publicly expose your application",sidebar_label:"Lab 18"},i=void 0,l={unversionedId:"for-devs/get-started/lab-18",id:"for-devs/get-started/lab-18",title:"Publicly expose your application",description:"When you have deployed your app, you will propably like to expose it publicly. You propably noticed that in the previous part, we created a Kubernetes service of type ClusterIP and not LoadBalancer and also that the Pod(s) created by the deployment have an Istio sidecar. All Pods created in your team will automatically be added to the service mesh. In this part we'll create a Service in Otomi to expose your app publicly. When you create a Service, Otomi will then create the Istio virtual service and configure ingress for your application.",source:"@site/docs/for-devs/get-started/lab-18.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-18",permalink:"/docs/for-devs/get-started/lab-18",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-18.md",tags:[],version:"current",frontMatter:{slug:"lab-18",title:"Publicly expose your application",sidebar_label:"Lab 18"},sidebar:"mainSidebar",previous:{title:"Lab 17",permalink:"/docs/for-devs/get-started/lab-17"},next:{title:"Lab 19",permalink:"/docs/for-devs/get-started/lab-19"}},s={},c=[{value:"Create a Service",id:"create-a-service",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When you have deployed your app, you will propably like to expose it publicly. You propably noticed that in the previous part, we created a Kubernetes service of type ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterIP")," and not ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," and also that the Pod(s) created by the deployment have an Istio sidecar. All Pods created in your team will automatically be added to the service mesh. In this part we'll create a Service in Otomi to expose your app publicly. When you create a Service, Otomi will then create the Istio virtual service and configure ingress for your application."),(0,n.kt)("h2",{id:"create-a-service"},"Create a Service"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the left menu panel under click ",(0,n.kt)("inlineCode",{parentName:"li"},"Services")," then click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Create Service"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harbor-projects",src:r(7068).Z,width:"2136",height:"1204"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fill in the name of the Kubernetes service (hello-svc) that you already deployed:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harbor-projects",src:r(3011).Z,width:"2134",height:"1254"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Under ",(0,n.kt)("inlineCode",{parentName:"li"},"Exposure Ingress"),", select ",(0,n.kt)("inlineCode",{parentName:"li"},"Ingress")," and use the default configuration")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harbor-projects",src:r(3085).Z,width:"2174",height:"1478"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Submit")),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploy Changes")," (the Deploy Changes button in the left panel will light-up after you click on submit).")),(0,n.kt)("p",null,"Deploying changes in Otomi usually takes just a couple of minutes depending on the amount of resources available on your cluster. You will see your service in the list of Services. Click on the URL and see your application."))}u.isMDXComponent=!0},7068:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-svc-fda3882069317ae88f33261f62c09ff3.png"},3085:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ingress-810f2497a334ec02655c2d6586a0be3a.png"},3011:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/svc-name-64f7ec90c5dde3366162b02f4572fb08.png"}}]);