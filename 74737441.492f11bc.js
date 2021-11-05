(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(189)),o={slug:"apps/nginx-ingress",title:"Working with Nginx Ingress",sidebar_label:"Nginx-ingress"},s={unversionedId:"app-nginx-ingress",id:"app-nginx-ingress",isDocsHomePage:!1,title:"Working with Nginx Ingress",description:"Otomi integrated Nginx Ingress into an advanced ingress architecture.",source:"@site/docs/app-nginx-ingress.md",slug:"/apps/nginx-ingress",permalink:"/docs/apps/nginx-ingress",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/app-nginx-ingress.md",version:"current",sidebar_label:"Nginx-ingress",sidebar:"mainSidebar",previous:{title:"Working with Gatekeeper",permalink:"/docs/apps/gatekeeper"},next:{title:"Installing and using Otomi CLI",permalink:"/docs/cli/"}},c=[{value:"ModSecurity with OWASP rule set",id:"modsecurity-with-owasp-rule-set",children:[]}],u={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Otomi integrated Nginx Ingress into an advanced ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/about/architecture#ingress--sso"}),"ingress architecture"),"."),Object(a.b)("h2",{id:"modsecurity-with-owasp-rule-set"},"ModSecurity with OWASP rule set"),Object(a.b)("p",null,"By deafault, ModSecurity is enabled in Nginx and configured with an OWASP rule set in a non-blocking mode. Teams can see ModSecurity warning messages in the Grafana/OWASP dashboard in the Otomi Apps."),Object(a.b)("p",null,"To configure ModSecurity in blocking mode, change the nginx-ingress configuration in the Otomi values repository: (",Object(a.b)("inlineCode",{parentName:"p"},"/env/charts/nginx-ingress.yaml"),") as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"charts:\n    nginx-ingress:\n        modsecurity:\n            block: true\n")))}p.isMDXComponent=!0},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,b=l["".concat(o,".").concat(d)]||l[d]||g[d]||a;return t?i.a.createElement(b,s(s({ref:n},u),{},{components:t})):i.a.createElement(b,s({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);