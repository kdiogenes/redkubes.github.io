"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={slug:"tutorials/create-secret-vault",title:"Create a secret in Hashicorp Vault",sidebar_label:"Create a secret in Vault"},l=void 0,o={unversionedId:"old/tutorial-7-create-secret",id:"old/tutorial-7-create-secret",title:"Create a secret in Hashicorp Vault",description:"In his tutorial, you are going to create a secret in Hashicorp Vault.",source:"@site/docs/old/tutorial-7-create-secret.md",sourceDirName:"old",slug:"/old/tutorials/create-secret-vault",permalink:"/docs/old/tutorials/create-secret-vault",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/old/tutorial-7-create-secret.md",tags:[],version:"current",frontMatter:{slug:"tutorials/create-secret-vault",title:"Create a secret in Hashicorp Vault",sidebar_label:"Create a secret in Vault"}},c={},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In his tutorial, you are going to create a secret in Hashicorp Vault."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the left panel under the Team demo, click ",(0,a.kt)("inlineCode",{parentName:"li"},"Otomi Apps")," then click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Vault")),(0,a.kt)("li",{parentName:"ul"},"Sign in with Method ",(0,a.kt)("inlineCode",{parentName:"li"},"OIDC"),", skip role and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Sign in with OIDC Provider"))),(0,a.kt)("p",null,"You are now automatically redirected to the team space ",(0,a.kt)("inlineCode",{parentName:"p"},"teams/team-demo/"),"created in Vault."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Create secret")),(0,a.kt)("li",{parentName:"ul"},"Provide a name for the secret. We'll use the name hello. The name of the secret will be: ",(0,a.kt)("inlineCode",{parentName:"li"},"teams/team-demo/hello")),(0,a.kt)("li",{parentName:"ul"},"In the key field, fill in ",(0,a.kt)("inlineCode",{parentName:"li"},"TARGET")),(0,a.kt)("li",{parentName:"ul"},"In the value field, fill in ",(0,a.kt)("inlineCode",{parentName:"li"},"party people")),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"save"))),(0,a.kt)("p",null,'The secret is now created in vault. In the next tutorial, you are going to "inject" the secret in the Otomi service configuration.'))}p.isMDXComponent=!0}}]);