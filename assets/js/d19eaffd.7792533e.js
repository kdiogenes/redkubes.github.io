"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5531],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(b,i(i({ref:t},u),{},{components:r})):o.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={slug:"lab-5",title:"Push your container images",sidebar_label:"Lab 5"},i=void 0,l={unversionedId:"for-devs/get-started/lab-5",id:"for-devs/get-started/lab-5",title:"Push your container images",description:"Prerequisite: For this lab, Harbor needs to be activated and the cluster needs to be configured with trusted certificates (like Let's Encrypt using production certificate).",source:"@site/docs/for-devs/get-started/lab-5.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-5",permalink:"/docs/for-devs/get-started/lab-5",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-5.md",tags:[],version:"current",frontMatter:{slug:"lab-5",title:"Push your container images",sidebar_label:"Lab 5"},sidebar:"mainSidebar",previous:{title:"lab 4",permalink:"/docs/for-devs/get-started/lab-4"},next:{title:"Lab 6",permalink:"/docs/for-devs/get-started/lab-6"}},s={},c=[{value:"Access Harbor UI",id:"access-harbor-ui",level:2},{value:"Login to Harbor",id:"login-to-harbor",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Prerequisite: For this lab, Harbor needs to be activated and the cluster needs to be configured with trusted certificates (like Let's Encrypt using production certificate).")),(0,a.kt)("p",null,"Now that you have kubectl access to your team namespace, you are ready to deploy your first container. When the platform administrator created your team, a private container registry has been automatically created for your team in Harbor and a pull secret has been added to your team namespace. To be able to push container images to your private registries, you'll first need to create a robot-account in your Harbor project with push access rights."),(0,a.kt)("h2",{id:"access-harbor-ui"},"Access Harbor UI"),(0,a.kt)("p",null,"In the apps section in Otomi console, you'll see an app called Harbor. Click on it and follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Login via OIDC provider"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"oidc",src:r(4419).Z,width:"2198",height:"1458"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set your OIDC user name")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"harbor-oidc",src:r(3767).Z,width:"1344",height:"776"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Harbor you'll see all the projects of the teams that you are a member of")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"harbor-projects",src:r(2946).Z,width:"2474",height:"1378"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the project of your team. Here you will see all the registries of the team")),(0,a.kt)("h2",{id:"login-to-harbor"},"Login to Harbor"),(0,a.kt)("p",null,"To be able to push images to Harbor, you'll need a robot account with push permissions. Otomi offers teams with a self-service option to download the Docker config for their team's private registry in Harbor. In the left menu you will see the option ",(0,a.kt)("inlineCode",{parentName:"p"},"Download DOCKERCFG"),". Click on it to download the credentials."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"harbor-projects",src:r(9256).Z,width:"2938",height:"1726"})),(0,a.kt)("p",null,"When you have downloaded the docker config then run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker login"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker login -u 'otomi-team-<team-name>-push' -p <token> harbor.<your-domain>\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If Docker refuses to connect with an error\n",(0,a.kt)("inlineCode",{parentName:"p"},"x509: certificate signed by unknown authority"),", go to the Otomi Console,\nand click ",(0,a.kt)("inlineCode",{parentName:"p"},"Download CA")," (if you have not done so already); then copy the\nobtained file to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.docker/ca.crt")," or restart docker desktop.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build and tag your image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t harbor.<your-domain>/<team-name>/<image-name>:<tag> .\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Push the image to Harbor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker push harbor.<your-domain>/<team-name>/<image-name>:<tag>\n")))}d.isMDXComponent=!0},9256:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/download-dcfg-b432705c8bd42615c9993ca3905ca3eb.png"},4419:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/harbor-oidc-d75571afb9485dee778fee74cb6b33d9.png"},2946:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/harbor-projects-1eeb9db71bd67b284169f5ea4494dc14.png"},3767:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/harbor-user-name-ce1b5f1731671cd0a8d46d4967eb680f.png"}}]);