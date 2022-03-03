"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"apps/vault",title:"Working with Hashicorp Vault",sidebar_label:"Hashicorp Vault"},s=void 0,u={unversionedId:"app-vault",id:"app-vault",title:"Working with Hashicorp Vault",description:"HashiCorp Vault is a shared application for securely storing and managing secrets. (Read more about Vault here.) Vault has been made tenant aware in Otomi. When it is enabled, a space will automatically be created for each team, and only team members are allowed access. Vault is automatically configured to use Otomi's Keycloak OIDC settings to login users through Otomi's SSO.",source:"@site/docs/app-vault.md",sourceDirName:".",slug:"/apps/vault",permalink:"/docs/apps/vault",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/app-vault.md",tags:[],version:"current",frontMatter:{slug:"apps/vault",title:"Working with Hashicorp Vault",sidebar_label:"Hashicorp Vault"},sidebar:"mainSidebar",previous:{title:"Loki",permalink:"/docs/apps/loki"},next:{title:"Gatekeeper",permalink:"/docs/apps/gatekeeper"}},c={},p=[{value:"Sign in with full access",id:"sign-in-with-full-access",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"HashiCorp Vault is a shared application for securely storing and managing secrets. (Read more about Vault ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/what-is-vault"},"here"),".) Vault has been made tenant aware in Otomi. When it is enabled, a space will automatically be created for each team, and only team members are allowed access. Vault is automatically configured to use Otomi's Keycloak OIDC settings to login users through Otomi's SSO."),(0,o.kt)("p",null,"Vault (like all parts of Otomi) runs natively on Kubernetes. To prevent data from Vault being lost during a rolling cluster upgrade, data persistence can be configured in combination with external (blob) storage. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/configuration/storage"},"here")," for configuring external data persistence."),(0,o.kt)("h2",{id:"sign-in-with-full-access"},"Sign in with full access"),(0,o.kt)("p",null,"If you would like to sign in into Vault with full access (and not with limited access provided by Otomi), you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get secret -n vault vault-unseal-keys -o jsonpath='{.data.vault-root}' | base64 -d | pbcopy\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Vault and sign in with method ",(0,o.kt)("inlineCode",{parentName:"p"},"token"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the token generated in step 1."))))}m.isMDXComponent=!0}}]);