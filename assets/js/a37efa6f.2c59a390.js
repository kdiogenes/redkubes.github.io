"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9229],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8076:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={slug:"console/teams",title:"Platform - Teams",sidebar_label:"Teams"},s=void 0,m={unversionedId:"ui-teams",id:"ui-teams",title:"Platform - Teams",description:"Console: Teams",source:"@site/docs/ui-teams.md",sourceDirName:".",slug:"/console/teams",permalink:"/docs/console/teams",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/ui-teams.md",tags:[],version:"current",frontMatter:{slug:"console/teams",title:"Platform - Teams",sidebar_label:"Teams"},sidebar:"mainSidebar",previous:{title:"Policies",permalink:"/docs/console/policies"},next:{title:"Services",permalink:"/docs/console/services"}},c={},p=[{value:"Team Admin",id:"team-admin",level:2},{value:"Creating new Teams",id:"creating-new-teams",level:2}],d={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Console: Teams",src:a(3460).Z,width:"2560",height:"1440"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Teams are tenants on the platform to support Development/DevOps teams, projects or even DTAP"),(0,i.kt)("li",{parentName:"ul"},"A team will get access to Otomi Console, providing access to all the shared tools"),(0,i.kt)("li",{parentName:"ul"},"Teams can choose to receive alerts in Microsoft Teams, Slack or email and each team will get access to a project in Harbor and a space in Vault to manage secrets"),(0,i.kt)("li",{parentName:"ul"},"Teams can be allowed self-service features like configure ingress, configure a notification receiver for alerts, change the OIDC group mapping and download the KubeConfig.")),(0,i.kt)("h2",{id:"team-admin"},"Team Admin"),(0,i.kt)("p",null,"By default, Otomi creates a team called Team Admin. Admins can use this team to expose any service in the team-admin namespace, but also in other namespaces."),(0,i.kt)("p",null,"see ",(0,i.kt)("a",{parentName:"p",href:"team-services"},"Team Services")," for more info about how to create Services in Otomi and how to configure ingress. The only difference here is that when creating Services in Team Admin, the admin can also select the namespace of the service."),(0,i.kt)("p",null,"Another difference between the Team Admin and user created Teams is that Team Admin does not have apps and it is not possible to configure any settings for the team-admin namespace."),(0,i.kt)("h2",{id:"creating-new-teams"},"Creating new Teams"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login with a user who is a member of the ",(0,i.kt)("inlineCode",{parentName:"li"},"otomi-admin")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"team-admin")," role"),(0,i.kt)("li",{parentName:"ol"},"Provide a name for the team (lowercase). The teamname can not be changed afterwards! Creating a team will result in the creation of namespace ",(0,i.kt)("inlineCode",{parentName:"li"},"team-$NAME")),(0,i.kt)("li",{parentName:"ol"},"Optional: Provide a OIDC group name/id granting for granting access to team. Only members of the group will get access to the team"),(0,i.kt)("li",{parentName:"ol"},"Optional (only when ",(0,i.kt)("inlineCode",{parentName:"li"},"multi-tenancy")," is enabled): In order to receive alerts, please choose an alerting endpoint:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Slack"),(0,i.kt)("td",{parentName:"tr",align:null},"Needs a slack webhook url that will give alerts for warnings and criticals")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Teams"),(0,i.kt)("td",{parentName:"tr",align:null},"Needs two alerting endpoints, for both warnings as well as criticals")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Email"),(0,i.kt)("td",{parentName:"tr",align:null},"You may provide a list of email addresses for both 'Non Critical' and 'Critical'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"If none selected"),(0,i.kt)("td",{parentName:"tr",align:null},"Global (admin) alerting endpoint configuration will be used")))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Add Resource Quotas")),(0,i.kt)("p",null,'When required, add resource quota for the team. The resource quota should adhere to the "spec.hard" format as described ',(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"here"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is no validation as there is no schema published. Add/change resource quota at your own risk."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure Azure Monitor")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Configuring Azure Monitor settings will only be active when  ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.provider=azure"),") and multi tenancy is enabled."))),(0,i.kt)("p",null,"Azure Monitor is the platform service that provides a single source for monitoring Azure resources."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No Azure monitoring"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Azure monitoring with global settings"),(0,i.kt)("td",{parentName:"tr",align:null},"Takes on the global settings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Azure monitoring with custom settings"),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides any global settings")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Turn Network Policy On/Off for the team")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Network policies"),(0,i.kt)("td",{parentName:"tr",align:null},"When enabled team services will be bound by (ingress) network policies")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Egress control"),(0,i.kt)("td",{parentName:"tr",align:null},"When enabled team service egress traffic will be limited to pre-defined endpoints only")))),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Add Team self service flags")),(0,i.kt)("p",null,"A user with the ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi-admin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"team-admin")," role can delegate permissions to modify certain configuration parameters to the team."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Service / Ingress"),(0,i.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure exposure for ",(0,i.kt)("a",{parentName:"td",href:"services"},"services"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Service / Network policy"),(0,i.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure network polices")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Team / Alerts"),(0,i.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure Alerts for the team")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Team / Oidc"),(0,i.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure OIDC for the team")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Team / Resource quota"),(0,i.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure Resource Quota for the team")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Team / Download kube config"),(0,i.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to download the KubeConfig file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Team / Network Policy"),(0,i.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to turn on/off network policies")))))}u.isMDXComponent=!0},3460:function(e,t,a){t.Z=a.p+"assets/images/platform-teams-e2f6a07d82a845efd159c8f5a02f3da4.png"}}]);