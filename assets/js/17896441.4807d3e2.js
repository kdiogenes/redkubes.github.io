(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7918],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(n),p=l,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5326:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ft});var a=n(7294),l=n(6010),r=n(833),o=n(7524),s=n(5281),c=n(7462),i=n(5999),m=n(9960);function d(e){const{permalink:t,title:n,subLabel:r,isNext:o}=e;return a.createElement(m.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function u(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(d,(0,c.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(d,(0,c.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var p=n(2263),g=n(143),h=n(373),f=n(4477);const b={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=b[e.versionMetadata.banner];return a.createElement(t,e)}function E(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(m.Z,{to:n,onClick:l},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,p.Z)(),{pluginId:o}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,h.J)(o),{latestDocSuggestion:i,latestVersionSuggestion:m}=(0,g.Jo)(o),d=null!=i?i:(u=m).docs.find((e=>e.id===u.mainDocId));var u;return a.createElement("div",{className:(0,l.Z)(t,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(E,{versionLabel:m.label,to:d.path,onClick:()=>c(m.name)})))}function k(e){let{className:t}=e;const n=(0,f.E)();return n.banner?a.createElement(y,{className:t,versionMetadata:n}):null}function N(e){let{className:t}=e;const n=(0,f.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function C(e){let{lastUpdatedBy:t}=e;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:s.k.common.lastUpdated},a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(L,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(C,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const Z="iconEdit_eYIM";function T(e){let{className:t,...n}=e;return a.createElement("svg",(0,c.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(Z,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function w(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.k.common.editThisPage},a.createElement(T,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var B=n(3008);const x="tags_jXut",O="tag_QGVx";function j(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(x,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:O},a.createElement(B.Z,{label:t,permalink:n}))}))))}const A="lastUpdated_vbeJ";function H(e){return a.createElement("div",{className:(0,l.Z)(s.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(j,e)))}function S(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,l.Z)(s.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(w,{editUrl:t})),a.createElement("div",{className:(0,l.Z)("col",A)},(n||r)&&a.createElement(_,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function I(e){const{content:t}=e,{metadata:n}=t,{editUrl:r,lastUpdatedAt:o,formattedLastUpdatedAt:c,lastUpdatedBy:i,tags:m}=n,d=m.length>0,u=!!(r||o||i);return d||u?a.createElement("footer",{className:(0,l.Z)(s.k.docs.docFooter,"docusaurus-mt-lg")},d&&a.createElement(H,{tags:m}),u&&a.createElement(S,{editUrl:r,lastUpdatedAt:o,lastUpdatedBy:i,formattedLastUpdatedAt:c})):null}var P=n(6668);function U(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function M(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=M({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function V(e){const t=e.getBoundingClientRect();return t.top===t.bottom?V(e.parentNode):t}function D(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>V(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(V(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function R(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,P.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function z(e){const t=(0,a.useRef)(void 0),n=R();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=D(s,{anchorTopOffset:n.current}),i=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===i)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function W(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(W,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const F=a.memo(W);function q(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:s,...i}=e;const m=(0,P.L)(),d=null!=o?o:m.tableOfContents.minHeadingLevel,u=null!=s?s:m.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>M({toc:U(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return z((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:d,maxHeadingLevel:u}}),[l,r,d,u])),a.createElement(F,(0,c.Z)({toc:p,className:n,linkClassName:l},i))}const G="tableOfContents_bqdL";function J(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.Z)(G,"thin-scrollbar",t)},a.createElement(q,(0,c.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var Y=n(6043);const $="tocCollapsibleButton_TO0P",X="tocCollapsibleButtonExpanded_MG3E";function K(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,c.Z)({type:"button"},n,{className:(0,l.Z)("clean-btn",$,!t&&X,n.className)}),a.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const Q="tocCollapsible_ETCw",ee="tocCollapsibleContent_vkbj",te="tocCollapsibleExpanded_sAul";function ne(e){let{toc:t,className:n,minHeadingLevel:r,maxHeadingLevel:o}=e;const{collapsed:s,toggleCollapsed:c}=(0,Y.u)({initialState:!0});return a.createElement("div",{className:(0,l.Z)(Q,!s&&te,n)},a.createElement(K,{collapsed:s,onClick:c}),a.createElement(Y.z,{lazy:!0,className:ee,collapsed:s},a.createElement(q,{toc:t,minHeadingLevel:r,maxHeadingLevel:o})))}const ae="anchorWithStickyNavbar_LWe7",le="anchorWithHideOnScrollNavbar_WYt5";function re(e){let{as:t,id:n,...r}=e;const{navbar:{hideOnScroll:o}}=(0,P.L)();return"h1"!==t&&n?a.createElement(t,(0,c.Z)({},r,{className:(0,l.Z)("anchor",o?le:ae),id:n}),r.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,c.Z)({},r,{id:void 0}))}var oe=n(2802),se=n(8596),ce=n(4996);function ie(e){return a.createElement("svg",(0,c.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const me={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function de(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(m.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function ue(e){let{children:t,active:n,index:r,addMicrodata:o}=e;return a.createElement("li",(0,c.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function pe(){const e=(0,ce.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(m.Z,{"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",me.breadcrumbsItemLink),href:e},a.createElement(ie,{className:me.breadcrumbHomeIcon})))}function ge(){const e=(0,oe.s1)(),t=(0,se.Ns)();return e?a.createElement("nav",{className:(0,l.Z)(s.k.docs.docBreadcrumbs,me.breadcrumbsContainer),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(pe,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(ue,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(de,{href:t.href,isLast:l},t.label))})))):null}var he=n(3905),fe=n(5742);var be=n(2389),ve=n(2949);function Ee(){const{prism:e}=(0,P.L)(),{colorMode:t}=(0,ve.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var ye=n(7594),ke=n.n(ye);const Ne=/title=(?<quote>["'])(?<title>.*?)\1/,Le=/\{(?<range>[\d,-]+)\}/,Ce={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function _e(e,t){const n=e.map((e=>{const{start:n,end:a}=Ce[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function Ze(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:l,metastring:r}=t;if(r&&Le.test(r)){const e=r.match(Le).groups.range;if(0===l.length)throw new Error("A highlight range has been given in code block's metastring (``` "+r+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=l[0].className,a=ke()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return _e(["js","jsBlock"],t);case"jsx":case"tsx":return _e(["js","jsBlock","jsx"],t);case"html":return _e(["js","jsBlock","html"],t);case"python":case"py":case"bash":return _e(["bash"],t);case"markdown":case"md":return _e(["html","jsx","bash"],t);default:return _e(Object.keys(Ce),t)}}(a,l),s=n.split("\n"),c=Object.fromEntries(l.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(l.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(l.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<s.length;){const e=s[p].match(o);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?c[i[t]].range+=p+",":m[t]?c[m[t]].start=p:d[t]&&(c[d[t]].range+=c[d[t]].start+"-"+(p-1)+","),s.splice(p,1)}n=s.join("\n");const u={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;ke()(n).forEach((e=>{null!=u[e]||(u[e]=[]),u[e].push(t)}))})),{lineClassNames:u,code:n}}const Te="codeBlockContainer_Ckt0";function we(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,l]=e;const r=t[a];r&&"string"==typeof l&&(n[r]=l)})),n}(Ee());return a.createElement(t,(0,c.Z)({},n,{style:r,className:(0,l.Z)(n.className,Te,s.k.common.codeBlock)}))}const Be={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function xe(e){let{children:t,className:n}=e;return a.createElement(we,{as:"pre",tabIndex:0,className:(0,l.Z)(Be.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Be.codeBlockLines},t))}const Oe={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var je={Prism:n(7410).Z,theme:Oe};function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function He(){return He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},He.apply(this,arguments)}var Se=/\r\n|\r|\n/,Ie=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Pe=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Ue=function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=He({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=He({},n,{backgroundColor:null}),l};function Me(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const Ve=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Ae(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Ue(e.theme,e.language):void 0;return t.themeDict=n})),Ae(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,r=He({},Me(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?He({},r.style,l):l),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),Ae(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return r[n[0]];var o=a?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(s))}})),Ae(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,r=e.token,o=He({},Me(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?He({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),Ae(this,"tokenize",(function(e,t,n,a){var l={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[n];return l({tokens:function(e){for(var t=[[]],n=[e],a=[0],l=[e.length],r=0,o=0,s=[],c=[s];o>-1;){for(;(r=a[o]++)<l[o];){var i=void 0,m=t[o],d=n[o][r];if("string"==typeof d?(m=o>0?m:["plain"],i=d):(m=Pe(m,d.type),d.alias&&(m=Pe(m,d.alias)),i=d.content),"string"==typeof i){var u=i.split(Se),p=u.length;s.push({types:m,content:u[0]});for(var g=1;g<p;g++)Ie(s),c.push(s=[]),s.push({types:m,content:u[g]})}else o++,t.push(m),n.push(i),a.push(0),l.push(i.length)}o--,t.pop(),n.pop(),a.pop(),l.pop()}return Ie(s),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),De="codeLine_lJS_",Re="codeLineNumber_Tfdd",ze="codeLineContent_feaV";function We(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:o,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=o({line:t,className:(0,l.Z)(n,r&&De)}),m=t.map(((e,t)=>a.createElement("span",(0,c.Z)({key:t},s({token:e,key:t})))));return a.createElement("span",i,r?a.createElement(a.Fragment,null,a.createElement("span",{className:Re}),a.createElement("span",{className:ze},m)):a.createElement(a.Fragment,null,m,a.createElement("br",null)))}const Fe={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function qe(e){let{code:t,className:n}=e;const[r,o]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),l&&l.focus()}(t),o(!0),s.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":r?(0,i.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,i.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,i.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,Fe.copyButton,r&&Fe.copyButtonCopied),onClick:c},a.createElement("span",{className:Fe.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:Fe.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Fe.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Ge="wordWrapButtonIcon_Bwma",Je="wordWrapButtonEnabled_EoeP";function Ye(e){let{className:t,onClick:n,isEnabled:r}=e;const o=(0,i.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,r&&Je),"aria-label":o,title:o},a.createElement("svg",{className:Ge,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function $e(e){var t;let{children:n,className:r="",metastring:o,title:s,showLineNumbers:i,language:m}=e;const{prism:{defaultLanguage:d,magicComments:u}}=(0,P.L)(),p=null!=(t=null!=m?m:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(r))?t:d,g=Ee(),h=function(){const[e,t]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(null),o=(0,a.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[r,e]),s=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");l(n)}),[r]);return(0,a.useEffect)((()=>{s()}),[e,s]),(0,a.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:o}}(),f=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(Ne))?void 0:n.groups.title)?t:""}(o)||s,{lineClassNames:b,code:v}=Ze(n,{metastring:o,language:p,magicComments:u}),E=null!=i?i:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return a.createElement(we,{as:"div",className:(0,l.Z)(r,p&&!r.includes("language-"+p)&&"language-"+p)},f&&a.createElement("div",{className:Be.codeBlockTitle},f),a.createElement("div",{className:Be.codeBlockContent},a.createElement(Ve,(0,c.Z)({},je,{theme:g,code:v,language:null!=p?p:"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,l.Z)(t,Be.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,l.Z)(Be.codeBlockLines,E&&Be.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(We,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:b[t],showLineNumbers:E})))))})),a.createElement("div",{className:Be.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&a.createElement(Ye,{className:Be.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),a.createElement(qe,{className:Be.codeButton,code:v}))))}function Xe(e){let{children:t,...n}=e;const l=(0,be.Z)(),r=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),o="string"==typeof r?$e:xe;return a.createElement(o,(0,c.Z)({key:String(l)},n),r)}const Ke="details_lb9f",Qe="isBrowser_bmU9",et="collapsibleContent_i85q";function tt(e){return!!e&&("SUMMARY"===e.tagName||tt(e.parentElement))}function nt(e,t){return!!e&&(e===t||nt(e.parentElement,t))}function at(e){let{summary:t,children:n,...r}=e;const o=(0,be.Z)(),s=(0,a.useRef)(null),{collapsed:i,setCollapsed:m}=(0,Y.u)({initialState:!r.open}),[d,u]=(0,a.useState)(r.open);return a.createElement("details",(0,c.Z)({},r,{ref:s,open:d,"data-collapsed":i,className:(0,l.Z)(Ke,o&&Qe,r.className),onMouseDown:e=>{tt(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;tt(t)&&nt(t,s.current)&&(e.preventDefault(),i?(m(!1),u(!0)):m(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(Y.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),u(!e)}},a.createElement("div",{className:et},n)))}const lt="details_b_Ee";function rt(e){let{...t}=e;return a.createElement(at,(0,c.Z)({},t,{className:(0,l.Z)("alert alert--info",lt,t.className)}))}function ot(e){return a.createElement(re,e)}const st="containsTaskList_mC6p";const ct="img_ev3q";const it={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(fe.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(Xe,e)},a:function(e){return a.createElement(m.Z,e)},pre:function(e){var t;return a.createElement(Xe,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(rt,(0,c.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,c.Z)({},e,{className:(t=e.className,(0,l.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&st))}));var t},img:function(e){return a.createElement("img",(0,c.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,ct))}));var t},h1:e=>a.createElement(ot,(0,c.Z)({as:"h1"},e)),h2:e=>a.createElement(ot,(0,c.Z)({as:"h2"},e)),h3:e=>a.createElement(ot,(0,c.Z)({as:"h3"},e)),h4:e=>a.createElement(ot,(0,c.Z)({as:"h4"},e)),h5:e=>a.createElement(ot,(0,c.Z)({as:"h5"},e)),h6:e=>a.createElement(ot,(0,c.Z)({as:"h6"},e))};function mt(e){let{children:t}=e;return a.createElement(he.Zo,{components:it},t)}const dt="docItemContainer_Adtb",ut="docItemCol_GujU",pt="tocMobile_aoJ5";function gt(e){var t;const{content:n}=e,{metadata:l,frontMatter:o,assets:s}=n,{keywords:c}=o,{description:i,title:m}=l,d=null!=(t=s.image)?t:o.image;return a.createElement(r.d,{title:m,description:i,keywords:c,image:d})}function ht(e){const{content:t}=e,{metadata:n,frontMatter:r}=t,{hide_title:c,hide_table_of_contents:i,toc_min_heading_level:m,toc_max_heading_level:d}=r,{title:p}=n,g=!c&&void 0===t.contentTitle,h=(0,o.i)(),f=!i&&t.toc&&t.toc.length>0,b=f&&("desktop"===h||"ssr"===h);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,l.Z)("col",!i&&ut)},a.createElement(k,null),a.createElement("div",{className:dt},a.createElement("article",null,a.createElement(ge,null),a.createElement(N,null),f&&a.createElement(ne,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:(0,l.Z)(s.k.docs.docTocMobile,pt)}),a.createElement("div",{className:(0,l.Z)(s.k.docs.docMarkdown,"markdown")},g&&a.createElement("header",null,a.createElement(re,{as:"h1"},p)),a.createElement(mt,null,a.createElement(t,null))),a.createElement(I,e)),a.createElement(u,{previous:n.previous,next:n.next}))),b&&a.createElement("div",{className:"col col--3"},a.createElement(J,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:s.k.docs.docTocDesktop})))}function ft(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(r.FG,{className:t},a.createElement(gt,e),a.createElement(ht,e))}},3008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(7294),l=n(6010),r=n(9960);const o="tag_zVej",s="tagRegular_sFm0",c="tagWithCount_h2kH";function i(e){let{permalink:t,label:n,count:i}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(o,i?c:s)},n,i&&a.createElement("span",null,i))}},4477:(e,t,n)=>{"use strict";n.d(t,{E:()=>s,q:()=>o});var a=n(7294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,l,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);