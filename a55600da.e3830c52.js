(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(184)),i={slug:"tutorials/build-tag-push",title:"Build, tag and push an image to Harbor",sidebar_label:"Using harbor"},l={unversionedId:"tutorial-1",id:"tutorial-1",isDocsHomePage:!1,title:"Build, tag and push an image to Harbor",description:"In this tutorial, you are going to:",source:"@site/docs/tutorial-1.md",slug:"/tutorials/build-tag-push",permalink:"/docs/tutorials/build-tag-push",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/tutorial-1.md",version:"current",sidebar_label:"Using harbor",sidebar:"mainSidebar",previous:{title:"Creating and managing users when using Keycloak as IDP",permalink:"/docs/tutorials/create-keycloak-users"},next:{title:"Create a Kubernetes service",permalink:"/docs/tutorials/create-k8s-svc"}},c=[{value:"Build an image and push it to Harbor",id:"build-an-image-and-push-it-to-harbor",children:[{value:"Create a robot account in Harbor",id:"create-a-robot-account-in-harbor",children:[]},{value:"Download the demo application used in this tutorial",id:"download-the-demo-application-used-in-this-tutorial",children:[]},{value:"Login to Harbor",id:"login-to-harbor",children:[]},{value:"Build, tag and push the image",id:"build-tag-and-push-the-image",children:[]}]}],u={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this tutorial, you are going to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Build an image and push it to Harbor in Otomi"),Object(o.b)("li",{parentName:"ol"},"Create a Kubernetes Deployment and Service"),Object(o.b)("li",{parentName:"ol"},"Publicly expose the Hello World app using Otomi")),Object(o.b)("h2",{id:"build-an-image-and-push-it-to-harbor"},"Build an image and push it to Harbor"),Object(o.b)("p",null,"When you created a Team in Otomi, Otomi has automatically created a project for the team in Harbor. In this tutorial we'll assume you have created a team called ",Object(o.b)("inlineCode",{parentName:"p"},"demo"),"."),Object(o.b)("h3",{id:"create-a-robot-account-in-harbor"},"Create a robot account in Harbor"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"https://harbor.<your domainSuffix>")),Object(o.b)("li",{parentName:"ul"},"Click 'Login with OIDC Provider'"),Object(o.b)("li",{parentName:"ul"},"In projects page, click on ",Object(o.b)("inlineCode",{parentName:"li"},"team-demo")),Object(o.b)("li",{parentName:"ul"},"on the team-demo page, click on ",Object(o.b)("inlineCode",{parentName:"li"},"Robot Accounts")),Object(o.b)("li",{parentName:"ul"},"Click on ",Object(o.b)("inlineCode",{parentName:"li"},"New Robot Account")),Object(o.b)("li",{parentName:"ul"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"Name=hello"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Expiration Time=Never")," and then click on ",Object(o.b)("inlineCode",{parentName:"li"},"Add")),Object(o.b)("li",{parentName:"ul"},"Copy the generated Token")),Object(o.b)("h3",{id:"download-the-demo-application-used-in-this-tutorial"},"Download the demo application used in this tutorial"),Object(o.b)("p",null,"Clone the repo used for this tutorial:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/redkubes/nodejs-helloworld.git\n")),Object(o.b)("h3",{id:"login-to-harbor"},"Login to Harbor"),Object(o.b)("p",null,"Login with username ",Object(o.b)("inlineCode",{parentName:"p"},"robot$team-demo+hello")," & password: ",Object(o.b)("inlineCode",{parentName:"p"},"token")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"docker login -u 'robot$team-demo+hello' -w '$token' harbor.your-domain.cloud\n")),Object(o.b)("h3",{id:"build-tag-and-push-the-image"},"Build, tag and push the image"),Object(o.b)("p",null,"Build and tag the image:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"docker build -t harbor.your-domain.com/team-demo/hello-world .\n")),Object(o.b)("p",null,"Push the image to Harbor:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"docker push harbor.your-domain.com/hello-world\n")),Object(o.b)("p",null,"Now go to the team-demo project and verify that the hello-world repository is there. "))}b.isMDXComponent=!0},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=b(r),s=n,m=d["".concat(i,".").concat(s)]||d[s]||p[s]||o;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);