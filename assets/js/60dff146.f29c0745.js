"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),h=o,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return a?n.createElement(f,p(p({ref:t},u),{},{components:a})):n.createElement(f,p({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,p=new Array(r);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={slug:"console/apps",title:"Platform - Apps",sidebar_label:"Apps"},p=void 0,i={unversionedId:"ui-apps",id:"ui-apps",title:"Platform - Apps",description:"Console apps",source:"@site/docs/ui-apps.md",sourceDirName:".",slug:"/console/apps",permalink:"/docs/console/apps",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/ui-apps.md",tags:[],version:"current",frontMatter:{slug:"console/apps",title:"Platform - Apps",sidebar_label:"Apps"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/console/"},next:{title:"Shortcuts",permalink:"/docs/console/shortcuts"}},l={},s=[{value:"App section",id:"app-section",level:2},{value:"Disabled apps",id:"disabled-apps",level:3},{value:"Enabled apps",id:"enabled-apps",level:3},{value:"App configuration",id:"app-configuration",level:2},{value:"Info",id:"info",level:3},{value:"Shortcuts",id:"shortcuts",level:3},{value:"Values",id:"values",level:3},{value:"Raw values",id:"raw-values",level:3},{value:"Open the app",id:"open-the-app",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Console apps",src:a(9088).Z,width:"2560",height:"1440"})),(0,o.kt)("h2",{id:"app-section"},"App section"),(0,o.kt)("p",null,"The apps section lists all apps available to the otomi-admin role. The apps section is devided into 2 parts:"),(0,o.kt)("h3",{id:"disabled-apps"},"Disabled apps"),(0,o.kt)("p",null,"The disabled apps are available for users to activate. Drag and drop the app to the enabled section to activate the app. This will install the app based on the Otomi default configuration."),(0,o.kt)("h3",{id:"enabled-apps"},"Enabled apps"),(0,o.kt)("p",null,"After installing Otomi, only the Core apps will be active and visable in the enabled apps section. Core apps have white names."),(0,o.kt)("h2",{id:"app-configuration"},"App configuration"),(0,o.kt)("p",null,"The Otomi default app configuration (values) can be modified for your desired use case. When you click on the app. you'll see a menu bar in the top with the following options:"),(0,o.kt)("h3",{id:"info"},"Info"),(0,o.kt)("p",null,"Here you will find more information about the app and how the app is integrated into Otomi."),(0,o.kt)("h3",{id:"shortcuts"},"Shortcuts"),(0,o.kt)("p",null,"Create shortcuts to open the app at a target path. Created shortcuts will also become visable in the ",(0,o.kt)("a",{parentName:"p",href:"shortcuts"},"Shortcuts")," section"),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("p",null,"Here you will see the Otomi default (chart) values for the app as specified in the Otomi values ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml"},"schema"),". Click on a value to see the defaults. You can change the defaults to customize the configuration."),(0,o.kt)("h3",{id:"raw-values"},"Raw values"),(0,o.kt)("p",null,"In the Raw values, all values of the app chart that are not part of the Otomi values schema can be specified."),(0,o.kt)("h3",{id:"open-the-app"},"Open the app"),(0,o.kt)("p",null,"When the apps has a UI, click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"play")," icon in the right of the app bar."))}c.isMDXComponent=!0},9088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/platform-apps-7ebfdc1477526591ab4b97427b2238cf.png"}}]);