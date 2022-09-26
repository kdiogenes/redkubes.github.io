"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={slug:"tutorials/use-secret",title:"Use secrets in Kubernetes",sidebar_label:"Use secret in Kubernetes"},s=void 0,l={unversionedId:"old/tutorial-9-use-secret",id:"old/tutorial-9-use-secret",title:"Use secrets in Kubernetes",description:"In his tutorial, you are going to use the secret created in Hashicorp Vault and added to Kubernetes using the Otomi Secrets feature in a Kubernetes deployment.",source:"@site/docs/old/tutorial-9-use-secret.md",sourceDirName:"old",slug:"/old/tutorials/use-secret",permalink:"/docs/old/tutorials/use-secret",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/old/tutorial-9-use-secret.md",tags:[],version:"current",frontMatter:{slug:"tutorials/use-secret",title:"Use secrets in Kubernetes",sidebar_label:"Use secret in Kubernetes"}},i={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In his tutorial, you are going to use the secret created in Hashicorp Vault and added to Kubernetes using the Otomi Secrets feature in a Kubernetes deployment."),(0,o.kt)("p",null,"Add the following snippet to the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-svc.yaml")," file created in the previous tutorial to the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec:")," section of the deployment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"env:\n  - name: TARGET\n    valueFrom:\n      secretKeyRef:\n        name: hello\n        key: TARGET\n")),(0,o.kt)("p",null,"And apply the manifest to Kubernetes:"),(0,o.kt)("p",null,"bash kubectl apply -f hello-svc.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nGo to https://hello.team-demo.<your-ip>.nip.io/\n\nAs you can see, the text on the page now shows the value `party people` of the secret you created in Vault.\n\nYou can do the same for the Knative service `hello-ksvc`.\n")))}p.isMDXComponent=!0}}]);