"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9013],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4166:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={slug:"tutorials/expose-service",title:"Publicly expose an existing service with Otomi",sidebar_label:"Expose a service"},u=void 0,s={unversionedId:"tutorial-6-expose-svc",id:"tutorial-6-expose-svc",title:"Publicly expose an existing service with Otomi",description:"In his tutorial, we are going to publicly expose a service we created in one of the previous tutorials.",source:"@site/docs/tutorial-6-expose-svc.md",sourceDirName:".",slug:"/tutorials/expose-service",permalink:"/docs/tutorials/expose-service",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/tutorial-6-expose-svc.md",tags:[],version:"current",frontMatter:{slug:"tutorials/expose-service",title:"Publicly expose an existing service with Otomi",sidebar_label:"Expose a service"}},c={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In his tutorial, we are going to publicly expose a service we created in one of the previous tutorials."),(0,o.kt)("p",null,"First navigate to the right form:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the top bar in Otomi Console, select ",(0,o.kt)("inlineCode",{parentName:"li"},"team: demo")),(0,o.kt)("li",{parentName:"ul"},"In the left menu panel under ",(0,o.kt)("inlineCode",{parentName:"li"},"Team demo"),", click ",(0,o.kt)("inlineCode",{parentName:"li"},"Services")," then click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Create Service")),(0,o.kt)("li",{parentName:"ul"},"Fill in the form with these values:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Name: hello (the name of the service we created in the previous tutorials)"),(0,o.kt)("li",{parentName:"ol"},"Service type: Choose one of ",(0,o.kt)("inlineCode",{parentName:"li"},"Existing Kubernetes service")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Existing Knative service"),", depending on the service/type you would like to expose"),(0,o.kt)("li",{parentName:"ol"},"Exposure: Public")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Submit")),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Deploy Changes")," (the Deploy Changes button in the left panel will light-up after you click on submit)")),(0,o.kt)("p",null,"Deploying changes in Otomi usually takes just a couple of minutes depending on the amount of resources available on your cluster."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://hello.team-demo.<your-ip>.nip.io/")," to see the app."))}f.isMDXComponent=!0}}]);