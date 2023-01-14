"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={slug:"part-4",title:"Deploy your application",sidebar_label:"Part 4"},l=void 0,s={unversionedId:"for-devs/get-started/part-4",id:"for-devs/get-started/part-4",title:"Deploy your application",description:"Now that you have access to the team namespace and have pushed your image to Harbor, you can now deploy your application.",source:"@site/docs/for-devs/get-started/part-4.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/part-4",permalink:"/docs/for-devs/get-started/part-4",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/part-4.md",tags:[],version:"current",frontMatter:{slug:"part-4",title:"Deploy your application",sidebar_label:"Part 4"},sidebar:"mainSidebar",previous:{title:"Part 3",permalink:"/docs/for-devs/get-started/part-3"},next:{title:"Part 5",permalink:"/docs/for-devs/get-started/part-5"}},p={},i=[{value:"Create a Deployment and Service",id:"create-a-deployment-and-service",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that you have access to the team namespace and have pushed your image to Harbor, you can now deploy your application."),(0,a.kt)("p",null,"In this case we'll use a demo app called hello. If you like you can clone the repo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/redkubes/nodejs-helloworld.git\n")),(0,a.kt)("p",null,"And then tag and build the image as you have done in ",(0,a.kt)("a",{parentName:"p",href:"part-3"},"part 3"),"."),(0,a.kt)("h2",{id:"create-a-deployment-and-service"},"Create a Deployment and Service"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-svc.yaml")," file and copy/paste the following 2 Kubernetes manifests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-svc\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-svc\n  template:\n    metadata:\n      labels:\n        app: hello-svc\n    spec:\n      containers:\n        - name: hello-svc\n          image: harbor.<your-domain>/<team-name>/<image-name>:<tag>\n          resources:\n            limits:\n              memory: '128Mi'\n              cpu: '200m'\n            requests:\n              memory: '64Mi'\n              cpu: '100m'\n          securityContext:\n            runAsUser: 1001\n          ports:\n            - containerPort: 8080\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-svc\nspec:\n  selector:\n    app: hello-svc\n  ports:\n    - port: 80\n      targetPort: 8080\n")),(0,a.kt)("p",null,"Now apply the manifest to Kubernetes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f hello-svc.yaml\n")),(0,a.kt)("p",null,"Check to see if the pod is running and the service has been created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe svc hello\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The example here is only a very simplified one. You can dive into the world of Kubernetes deployments, or you can ask your platform administrator to enable Knative Serving. Knative will then take care of auto scaling for you. We will also soon release a new feature that will help to remove the struggle of creating and managing Kubernetes manifests. Stay tuned!")))}u.isMDXComponent=!0}}]);