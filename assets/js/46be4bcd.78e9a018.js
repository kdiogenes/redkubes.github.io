"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?o.createElement(h,n(n({ref:t},p),{},{components:a})):o.createElement(h,n({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,n=new Array(l);n[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var c=2;c<l;c++)n[c]=a[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const l={slug:"workloads",title:"Team Workloads",sidebar_label:"Workloads"},n=void 0,i={unversionedId:"for-devs/console/workloads",id:"for-devs/console/workloads",title:"Team Workloads",description:"A Workload in Otomi is a self-service feature for:",source:"@site/docs/for-devs/console/workloads.md",sourceDirName:"for-devs/console",slug:"/for-devs/console/workloads",permalink:"/docs/for-devs/console/workloads",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/console/workloads.md",tags:[],version:"current",frontMatter:{slug:"workloads",title:"Team Workloads",sidebar_label:"Workloads"},sidebar:"mainSidebar",previous:{title:"Builds",permalink:"/docs/for-devs/console/builds"},next:{title:"Services",permalink:"/docs/for-devs/console/services"}},s={},c=[{value:"Create a Workload",id:"create-a-workload",level:2},{value:"Regular application",id:"regular-application",level:2},{value:"Function as a Service",id:"function-as-a-service",level:2},{value:"BYO Helm chart",id:"byo-helm-chart",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Workload in Otomi is a self-service feature for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploying Kubernetes workloads",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A regular Kubernetes deployment with a HPA (Horizontal Pod Autoscaler)"),(0,r.kt)("li",{parentName:"ul"},"A Knative service"))),(0,r.kt)("li",{parentName:"ul"},"Automatically create the ArgoCD resources to deploy the workload in a GitOps way"),(0,r.kt)("li",{parentName:"ul"},"Manage the custom values of the workloads in Git")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ask you platform administrator to activate ArgoCD to be able to use this feature.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ask you platform administrator to activate Knative to be able to create Function as a Service workloads.")),(0,r.kt)("h2",{id:"create-a-workload"},"Create a Workload"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the workload type")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Regular application: will use the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-charts"},"Otomi deployment Helm chart")),(0,r.kt)("li",{parentName:"ul"},"Function as a Service: will use the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-charts"},"Otomi Knative service Helm chart")),(0,r.kt)("li",{parentName:"ul"},"Bring your own Helm chart: use your own (custom) Helm chart")),(0,r.kt)("h2",{id:"regular-application"},"Regular application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter a name for the workload"),(0,r.kt)("li",{parentName:"ol"},"Fill in the image name of the image the workload will deploy"),(0,r.kt)("li",{parentName:"ol"},"Fill in the tag of the image"),(0,r.kt)("li",{parentName:"ol"},"(optionally) Adjust the port"),(0,r.kt)("li",{parentName:"ol"},"(optionally) Adjust the required CPU and memory resources"),(0,r.kt)("li",{parentName:"ol"},"(optionally) Adjust the Min and Max instances. This will be used to auto-scale the application based on a Kubernetes HPA"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Next")),(0,r.kt)("li",{parentName:"ol"},"Review the Values used to install the chart. Optionally add more values. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-charts"},"here")," for all supported values")),(0,r.kt)("h2",{id:"function-as-a-service"},"Function as a Service"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter a name for the workload"),(0,r.kt)("li",{parentName:"ol"},"Fill in the image name of the image the workload will deploy"),(0,r.kt)("li",{parentName:"ol"},"Fill in the tag of the image"),(0,r.kt)("li",{parentName:"ol"},"(optionally) Adjust the port"),(0,r.kt)("li",{parentName:"ol"},"(optionally) Adjust the required CPU and memory resources"),(0,r.kt)("li",{parentName:"ol"},"(optionally) Adjust the Min and Max instances. This will be used by Knative to auto scale the application. By default the Min count is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),". This means that the workload will scale to zero. The application container in this case will start when a request is received."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Next")),(0,r.kt)("li",{parentName:"ol"},"Review the Values used to install the chart. Optionally add more values. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-charts"},"here")," for all supported values")),(0,r.kt)("h2",{id:"byo-helm-chart"},"BYO Helm chart"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter a name for the workload"),(0,r.kt)("li",{parentName:"ol"},"Enter the URL to the Git repo containing the Helm Chart or a Helm repository"),(0,r.kt)("li",{parentName:"ol"},"Optionally (only when using a Git repo) add the relative directory path within the Git repository. Absolute paths cause errors."),(0,r.kt)("li",{parentName:"ol"},"Optionally (only when using a Chart registry) add the name of the Helm chart"),(0,r.kt)("li",{parentName:"ol"},"Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Next")),(0,r.kt)("li",{parentName:"ol"},"Review the Values used to install the chart"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,r.kt)("p",null,"Now click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy Changes")),(0,r.kt)("p",null,"After a few minutes, Otomi will have created all the needed ArgoCD resources to deploy your workload. In the workloads list, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," link of your workload to see the status of your workload."),(0,r.kt)("p",null,"The values of a workload can be changed at any time. Changes will automatically be deployed."))}u.isMDXComponent=!0}}]);