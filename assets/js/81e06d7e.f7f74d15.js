"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5824],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={slug:"istio",title:"Istio",sidebar_label:"Istio"},a=void 0,s={unversionedId:"apps/istio",id:"apps/istio",title:"Istio",description:"Introduction",source:"@site/docs/apps/istio.md",sourceDirName:"apps",slug:"/apps/istio",permalink:"/docs/apps/istio",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/apps/istio.md",tags:[],version:"current",frontMatter:{slug:"istio",title:"Istio",sidebar_label:"Istio"},sidebar:"mainSidebar",previous:{title:"Ingress-nginx",permalink:"/docs/apps/ingress-nginx"},next:{title:"Jaeger",permalink:"/docs/apps/jaeger"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Automation",id:"automation",level:2},{value:"Integrations",id:"integrations",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Stale Keycloak JWKS cache",id:"stale-keycloak-jwks-cache",level:3},{value:"Istio log errors",id:"istio-log-errors",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Since Otomi has security best practices built in, it is designed for intrusion.\nIstio is installed by Otomi as a service mesh to deliver the following capabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mTLS enforcement for all traffic that is deemed compromisable"),(0,i.kt)("li",{parentName:"ul"},"egress control, forcing teams to choose explicit egress endpoints"),(0,i.kt)("li",{parentName:"ul"},"advanced routing capabilities such as weight based load balancing (A/B or blue/green testing)")),(0,i.kt)("p",null,"In the future we might make it possible to opt out of Istio, but that effectively nullifies the mTLS capabilities and egress control."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h2",{id:"automation"},"Automation"),(0,i.kt)("h2",{id:"integrations"},"Integrations"),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("h3",{id:"stale-keycloak-jwks-cache"},"Stale Keycloak JWKS cache"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Jwks doesn't have key to match kid or alg from Jwt\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cause")," The istio-proxy sidecar caches JWKS with a TTL of 20 minutes. The TTL is a hardcoded parameter (",(0,i.kt)("inlineCode",{parentName:"p"},"JwtPubKeyRefreshInterval"),") and cannot be configured. By redeploing keycloak ",(0,i.kt)("inlineCode",{parentName:"p"},"kid")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"alg")," can change, thus JWKS that is cached by istio-proxy sidecar is not valid anymore."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solution")," Either wait 20 minutes, so JWKS is refreshed or kill all pods that are referenced by a RequestAuthentication resource. All services that have ",(0,i.kt)("inlineCode",{parentName:"p"},"authz.workload")," set will have one (see: core.yaml)."),(0,i.kt)("h3",{id:"istio-log-errors"},"Istio log errors"),(0,i.kt)("p",null,"When you see errors in the logs like such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"error    authorization    skipped rule ns[monitoring]-policy[grafana-dev-eks-otomi-cloud]-rule[0]: :authority must not be used in TCP\n")),(0,i.kt)("p",null,"These are not real errors, but logged incorrectly: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/istio/istio/issues/24701#issuecomment-649719089"},"https://github.com/istio/istio/issues/24701#issuecomment-649719089")))}p.isMDXComponent=!0}}]);