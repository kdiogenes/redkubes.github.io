"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5760],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Contribution Expectations",slug:"contributing/expectations",sidebar_label:"Expectations"},s=void 0,u={unversionedId:"contributing-expectations",id:"contributing-expectations",title:"Contribution Expectations",description:"Otomi is a community project.",source:"@site/community/contributing-expectations.md",sourceDirName:".",slug:"/contributing/expectations",permalink:"/community/contributing/expectations",editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/community/contributing-expectations.md",tags:[],version:"current",lastUpdatedBy:"Maurice Faber",lastUpdatedAt:1650045199,formattedLastUpdatedAt:"4/15/2022",frontMatter:{title:"Contribution Expectations",slug:"contributing/expectations",sidebar_label:"Expectations"},sidebar:"community",previous:{title:"Getting started",permalink:"/community/contributing"},next:{title:"Pull Requests",permalink:"/community/contributing/pull-requests"}},l={},p=[{value:"Code review",id:"code-review",level:2},{value:"Expectations of reviewers: Review comments",id:"expectations-of-reviewers-review-comments",level:2},{value:"Expectations of reviewers: Review latency",id:"expectations-of-reviewers-review-latency",level:2},{value:"Thanks",id:"thanks",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Otomi is a community project.\nConsequently, it is wholly dependent on its community to provide a productive, friendly and collaborative environment."),(0,i.kt)("p",null,"The first and foremost goal of the Otomi community is to develop a stack of configurable k8s applications that work in tandem, in order to give k8s users control over their distributed applications."),(0,i.kt)("p",null,"We therefore describe the expectations for members of the Otomi community.\nThis document is intended to be a living one that evolves as the community evolves via the same PR and code review process that shapes the rest of the project.\nIt currently covers the expectations of conduct that govern all members of the community as well as the expectations around code review that govern all active contributors to Otomi."),(0,i.kt)("h2",{id:"code-review"},"Code review"),(0,i.kt)("p",null,"As a community we believe in the value of code review for all contributions.\nCode review increases both the quality and readability of our codebase, which\nin turn produces high quality software."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"pull-requests"},"pull request documentation")," for more information on code review."),(0,i.kt)("p",null,"Consequently, as a community we expect that all active participants in the community will also be active reviewers."),(0,i.kt)("h2",{id:"expectations-of-reviewers-review-comments"},"Expectations of reviewers: Review comments"),(0,i.kt)("p",null,"Because reviewers are often the first points of contact between new members of the community and can significantly impact the first impression of the Otomi community, reviewers are especially important in shaping the Otomi community. Reviewers are highly encouraged to not only abide by the ",(0,i.kt)("a",{parentName:"p",href:"../code-of-conduct"},"code of conduct")," but are strongly encouraged to go above and beyond the code of conduct to promote a collaborative, respectful Otomi community."),(0,i.kt)("h2",{id:"expectations-of-reviewers-review-latency"},"Expectations of reviewers: Review latency"),(0,i.kt)("p",null,"Reviewers are expected to respond in a timely fashion to PRs that are assigned to them. Reviewers are expected to respond to an ",(0,i.kt)("em",{parentName:"p"},"active")," PRs with reasonable latency, and if reviewers fail to respond, those PRs may be assigned to other reviewers."),(0,i.kt)("h2",{id:"thanks"},"Thanks"),(0,i.kt)("p",null,"Many thanks in advance to everyone who contributes their time and effort to making Otomi both a successful endeavour as well as a successful community.\nThe strength of our software shines in the strengths of each individual community member. Thanks!"))}d.isMDXComponent=!0}}]);