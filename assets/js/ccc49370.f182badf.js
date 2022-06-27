"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6103],{9058:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7294),l=a(6010),r=a(3659),o=a(7524),s=a(9960),i=a(5999);const c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var v=a(3102);function f(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return n.createElement(v.Zo,{component:f,props:e})}function E(e){let{sidebar:t}=e;const a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(h,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return n.createElement(r.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(E,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},1860:(e,t,a)=>{a.d(t,{Z:()=>L});var n=a(7294),l=a(6010),r=a(5999),o=a(9960),s=a(4996),i=a(8824),c=a(8780),m=a(3548),u=a(6114),d=a(1526);function g(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function p(e){let{author:t}=e;const{name:a,title:l,url:r,imageURL:o,email:s}=t,i=r||s&&"mailto:"+s||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(g,{href:i,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(g,{href:i,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const h="authorCol_sTYa",v="imageOnlyAuthorRow_vA2J",f="imageOnlyAuthorCol_kG3X";function b(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?v:"row")},t.map(((e,t)=>{var o;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?f:h),key:t},n.createElement(p,{author:{...e,imageURL:null!=(o=a.authorsImageUrls[t])?o:e.imageURL}}))})))}const E="blogPostTitle_Ikge",N="blogPostData_SAv4",_="blogPostDetailsFull_u0Nl";function L(e){var t;const a=function(){const{selectMessage:e}=(0,i.c)();return t=>{const a=Math.ceil(t);return e(a,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:g}=(0,s.C)(),{children:p,frontMatter:h,assets:v,metadata:f,truncated:L,isBlogPostPage:k=!1}=e,{date:Z,formattedDate:P,permalink:x,tags:y,readingTime:I,title:C,editUrl:H,authors:w}=f,A=null!=(t=v.image)?t:h.image,T=!k&&L,M=y.length>0,O=k?"h1":"h2";return n.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(O,{className:E,itemProp:"headline"},k?C:n.createElement(o.Z,{itemProp:"url",to:x},C)),n.createElement("div",{className:(0,l.Z)(N,"margin-vert--md")},n.createElement("time",{dateTime:Z,itemProp:"datePublished"},P),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",a(I))),n.createElement(b,{authors:w,assets:v})),A&&n.createElement("meta",{itemProp:"image",content:g(A,{absolute:!0})}),n.createElement("div",{id:k?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(m.Z,null,p)),(M||L)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",k&&_)},M&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":T})},n.createElement(d.Z,{tags:y})),k&&H&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:H})),T&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":M})},n.createElement(o.Z,{to:f.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:C})},n.createElement("b",null,n.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8166:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(7294),l=a(6010),r=a(833),o=a(5281),s=a(9058),i=a(1860),c=a(7462),m=a(5999),u=a(2244);function d(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(u.Z,(0,c.Z)({},a,{subLabel:n.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(u.Z,(0,c.Z)({},t,{subLabel:n.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var g=a(9407);function p(e){var t;const{content:a}=e,{assets:l,metadata:o}=a,{title:s,description:i,date:c,tags:m,authors:u,frontMatter:d}=o,{keywords:g}=d,p=null!=(t=l.image)?t:d.image;return n.createElement(r.d,{title:s,description:i,keywords:g,image:p},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:c}),u.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:u.map((e=>e.url)).filter(Boolean).join(",")}),m.length>0&&n.createElement("meta",{property:"article:tag",content:m.map((e=>e.label)).join(",")}))}function h(e){const{content:t,sidebar:a}=e,{assets:l,metadata:r}=t,{nextItem:o,prevItem:c,frontMatter:m}=r,{hide_table_of_contents:u,toc_min_heading_level:p,toc_max_heading_level:h}=m;return n.createElement(s.Z,{sidebar:a,toc:!u&&t.toc&&t.toc.length>0?n.createElement(g.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:h}):void 0},n.createElement(i.Z,{frontMatter:m,assets:l,metadata:r,isBlogPostPage:!0},n.createElement(t,null)),(o||c)&&n.createElement(d,{nextItem:o,prevItem:c}))}function v(e){return n.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},n.createElement(p,e),n.createElement(h,e))}},9407:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),l=a(7294),r=a(6010),o=a(3743);const s="tableOfContents_bqdL";function i(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),l=a(7294);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}var s=a(6668);function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function c(e,t){var a;let{anchorTopOffset:n}=t;const l=e.find((e=>i(e).top>=n));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(a=e[e.length-1])?a:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),a=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),i=c(s,{anchorTopOffset:a.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function d(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const g=l.memo(d);function p(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...p}=e;const h=(0,s.L)(),v=null!=m?m:h.tableOfContents.minHeadingLevel,f=null!=d?d:h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>o({toc:r(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return u((0,l.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:f}}),[i,c,v,f])),l.createElement(g,(0,n.Z)({toc:b,className:a,linkClassName:i},p))}},8824:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(7294),l=a(2263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),s}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);