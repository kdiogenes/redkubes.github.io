(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),i=(n(0),n(176)),a={slug:"otomi-console/settings/kms",title:"KMS"},s={unversionedId:"settings-kms",id:"settings-kms",isDocsHomePage:!1,title:"KMS",description:"The KMS settings section offers configuration options for the Key Management Service information needed to seal and unseal secrets used by Otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the otomi-values repo), and another one for sealing/unsealing Vault storage.",source:"@site/docs/settings-kms.md",slug:"/otomi-console/settings/kms",permalink:"/docs/otomi-console/settings/kms",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/settings-kms.md",version:"current",sidebar:"mainSidebar",previous:{title:"Home",permalink:"/docs/otomi-console/settings/home"},next:{title:"OIDC",permalink:"/docs/otomi-console/settings/oidc"}},c=[{value:"SOPS",id:"sops",children:[]},{value:"Vault",id:"vault",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The KMS settings section offers configuration options for the Key Management Service information needed to seal and unseal secrets used by Otomi. Otomi needs at least one key. It needs one for encrypting/decrypting the ",Object(i.b)("inlineCode",{parentName:"p"},"otomi-values")," repo), and another one for sealing/unsealing Vault storage."),Object(i.b)("p",null,"IMPORTANT NOTES:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When omitting KMS credentials for SOPS, the secrets in the otomi-values repo will be stored in plain text"),Object(i.b)("li",{parentName:"ul"},"When omitting KMS credentials for Vault, on startup it will generate its own k8s secret for sealing/unsealing, so be careful not to remove it!")),Object(i.b)("p",null,"It is advised to provide credentials to an external stable KMS (such as from the cloud the cluster was deployed in), so that unseal keys can always be managed from one central location. The same credentials can be used for both SOPS and Vault, but that is up to you to decide."),Object(i.b)("h3",{id:"sops"},"SOPS"),Object(i.b)("p",null,"Credentials to a KMS used by SOPS. For now it expects the ",Object(i.b)("inlineCode",{parentName:"p"},".sops.yaml")," file in the root of the ",Object(i.b)("inlineCode",{parentName:"p"},"otomi/values")," repo to have the configuration pointing to the keys in use there. (Soon this file will be generated from key configuration gathered here.)"),Object(i.b)("h3",{id:"vault"},"Vault"),Object(i.b)("p",null,"Settings for Vault can be found under ",Object(i.b)("inlineCode",{parentName:"p"},"charts.vault")," in the Otomi values repository, but will be added to this section soon."))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);