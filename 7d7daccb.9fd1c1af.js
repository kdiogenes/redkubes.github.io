(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(176)),o={slug:"otomi-console/secrets",title:"Secrets"},s={unversionedId:"secrets",id:"secrets",isDocsHomePage:!1,title:"Secrets",description:"Console: new secret",source:"@site/docs/secrets.md",slug:"/otomi-console/secrets",permalink:"/docs/otomi-console/secrets",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/secrets.md",version:"current",sidebar:"mainSidebar",previous:{title:"Jobs",permalink:"/docs/otomi-console/jobs"},next:{title:"Platform Apps",permalink:"/docs/otomi-console/platform-apps"}},i=[{value:"Create a Generic secret",id:"create-a-generic-secret",children:[]},{value:"Create a Docker Registry secret",id:"create-a-docker-registry-secret",children:[]},{value:"Create a TLS secret",id:"create-a-tls-secret",children:[]}],l={toc:i};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{alt:"Console: new secret",src:r(243).default})),Object(c.b)("p",null,"Any secret that is created here should have it's counterpart in Vault by the same name. Otomi will create kubernetes secrets from those Vault secrets. These can then be used in Otomi Services and Otomi Jobs, as injected env vars, or as file mounts."),Object(c.b)("p",null,"Otomi supports 3 types of secrets:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#create-a-generic-secret"}),"1. Generic")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#create-a-docker-registry-secret"}),"2. Docker Registry")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#create-a-tls-secret"}),"3. TLS"))),Object(c.b)("h3",{id:"create-a-generic-secret"},"Create a Generic secret"),Object(c.b)("p",null,"Create a generic kubernetes secret by listing a selection of (or all) properties of a Vault secret registered with the same name."),Object(c.b)("h3",{id:"create-a-docker-registry-secret"},"Create a Docker Registry secret"),Object(c.b)("p",null,'The docker registry (or pull) secret should exist in Vault as a secret with the same name. The vault secret should be of type "json" and have only one property ',Object(c.b)("inlineCode",{parentName:"p"},".dockerconfigjson"),". Use the following command to create the json:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'email="not@us.ed" # can be something else if the registry provider expects it, but usually this is ignored\nserver="" # example: "https://harbor.demo.eks.otomi.cloud/"\nusername="" # your username\npassword="" # your password, can be token\nkubectl create secret docker-registry --dry-run=client regcred --docker-email=$email --docker-server=$server --docker-username=$username --docker-password=$password -ojsonpath=\'{.data.\\.dockerconfigjson}\' | base64 --decode\n')),Object(c.b)("h3",{id:"create-a-tls-secret"},"Create a TLS secret"),Object(c.b)("p",null,'To create a TLS secret, the fields should correspond with the properties as named in the Vault secret registered with the same name. The "ca" field is optional and can be used to provide the certificate authority (for mTLS).'),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Setting"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"crt"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The PEM encoded public key certificate content")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The private key certificate content")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ca"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The CA certificate content (optional)")))))}b.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||c;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},243:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/console-new-secret-28ef3293af5eaffddf9e46024686b742.png"}}]);