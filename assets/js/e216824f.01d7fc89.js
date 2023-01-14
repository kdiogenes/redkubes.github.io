"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?i.createElement(k,o(o({ref:t},p),{},{components:r})):i.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(7462),n=(r(7294),r(3905));const a={slug:"prerequisites",title:"Prerequisites",sidebar_label:"Prerequisites"},o=void 0,l={unversionedId:"get-started/prerequisites",id:"get-started/prerequisites",title:"Prerequisites",description:"Client binaries",source:"@site/docs/get-started/prerequisites.md",sourceDirName:"get-started",slug:"/get-started/prerequisites",permalink:"/docs/get-started/prerequisites",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/prerequisites.md",tags:[],version:"current",frontMatter:{slug:"prerequisites",title:"Prerequisites",sidebar_label:"Prerequisites"},sidebar:"mainSidebar",next:{title:"Installation",permalink:"/docs/get-started/installation"}},s={},u=[{value:"Client binaries",id:"client-binaries",level:3},{value:"Supported Providers",id:"supported-providers",level:3},{value:"Azure (AKS)",id:"azure-aks",level:4},{value:"Amazon Web Services (EKS)",id:"amazon-web-services-eks",level:4},{value:"Google Cloud Platform (GKE)",id:"google-cloud-platform-gke",level:4},{value:"Digital Ocean",id:"digital-ocean",level:4},{value:"OVHcloud",id:"ovhcloud",level:4},{value:"Vultr (VKE)",id:"vultr-vke",level:4},{value:"All others",id:"all-others",level:4},{value:"Kubernetes versions",id:"kubernetes-versions",level:3},{value:"Minimal compute resource requirements",id:"minimal-compute-resource-requirements",level:3},{value:"CNI",id:"cni",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"client-binaries"},"Client binaries"),(0,n.kt)("p",null,"When installing Otomi using the chart, make sure the following client binaries exist:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Kubectl")," to access the cluster"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," for helm chart installation of Otomi")),(0,n.kt)("h3",{id:"supported-providers"},"Supported Providers"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We have created ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/redkubes/quickstart"},"quickstarts")," for Azure, GCP, AWS, Linode, Digital Ocean and Minikube to help you spin-up a Kubernetes cluster.")),(0,n.kt)("h4",{id:"azure-aks"},"Azure (AKS)"),(0,n.kt)("p",null,"To install Otomi on a AKS cluster in Azure, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"azure")," provider. The ",(0,n.kt)("inlineCode",{parentName:"p"},"azure")," provider includes creating optimized storage classes and optional integration with the a Application Gateway Ingress Controller add-on."),(0,n.kt)("h4",{id:"amazon-web-services-eks"},"Amazon Web Services (EKS)"),(0,n.kt)("p",null,"To install Otomi on a EKS cluster in AWS, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"aws")," provider."),(0,n.kt)("h4",{id:"google-cloud-platform-gke"},"Google Cloud Platform (GKE)"),(0,n.kt)("p",null,"To install Otomi on a GKE cluster in GCP, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"google")," provider."),(0,n.kt)("h4",{id:"digital-ocean"},"Digital Ocean"),(0,n.kt)("p",null,"To install Otomi on a Kubernetes cluster in Digital Ocean, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"digitalocean")," provider. Otomi is also available in the Digital Ocean ",(0,n.kt)("a",{parentName:"p",href:"https://marketplace.digitalocean.com/apps/otomi?refcode=476bfcac9ec9&action=deploy"},"marketplace"),"."),(0,n.kt)("h4",{id:"ovhcloud"},"OVHcloud"),(0,n.kt)("p",null,"To install Otomi on a OVHcloud ",(0,n.kt)("a",{parentName:"p",href:"https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/"},"Managed Kubernetes Service"),", use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ovh")," provider."),(0,n.kt)("h4",{id:"vultr-vke"},"Vultr (VKE)"),(0,n.kt)("p",null,"To install Otomi on a ",(0,n.kt)("a",{parentName:"p",href:"https://www.vultr.com/docs/vultr-kubernetes-engine/"},"Vultr Kubernetes Engine (VKE)")," cluster, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"vultr")," provider."),(0,n.kt)("h4",{id:"all-others"},"All others"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"custom")," provider for all other clouds, and when running Kubernetes on your own hardware (including Minikube on your local machine). The custom provider uses the default available storage classes. The only requirement for using the custom provider is to be able to create a Kubernetes LoadBalancer Service that obtains an external accessible IP."),(0,n.kt)("admonition",{title:"NOTE",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When using Minikube, only Otomi Core apps can be used! Activating more apps will require more compute resources. We advise to have a node pool available with at least 12 vCPU and 32 GiB memory.")),(0,n.kt)("h3",{id:"kubernetes-versions"},"Kubernetes versions"),(0,n.kt)("p",null,"Otomi currently supports the following Kubernetes versions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1.18")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1.19")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1.20")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1.21")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1.22")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1.23"))),(0,n.kt)("h3",{id:"minimal-compute-resource-requirements"},"Minimal compute resource requirements"),(0,n.kt)("p",null,"Otomi requires a node pool with at least ",(0,n.kt)("strong",{parentName:"p"},"6 vCPU")," threads and ",(0,n.kt)("strong",{parentName:"p"},"8GiB+ RAM"),". Note that this is the requirements for a minimal (default) install. When activating more apps, you'll probably need more resources."),(0,n.kt)("admonition",{title:"ATTENTION",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The minimal resource requirement to run Otomi is based on running Core Apps only! The core apps provide an advanced ingress architecture based on Nginx, Istio, Keycloak, Oaut2 Proxy and Certmanager. Activating optional apps will require more compute resources. We advise to have a node pool available with 12 vCPU and 32 GiB memory.")),(0,n.kt)("h3",{id:"cni"},"CNI"),(0,n.kt)("p",null,"To use the network policies feature in Otomi, make sure to install the ",(0,n.kt)("a",{parentName:"p",href:"https://www.tigera.io/project-calico/"},"Calico")," CNI or any other CNI that supports Kubernetes network polices."))}c.isMDXComponent=!0}}]);