"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={slug:"known-issues",title:"Known Issues",sidebar_label:"Known issues"},i=void 0,l={unversionedId:"for-ops/cli/known-issues",id:"for-ops/cli/known-issues",title:"Known Issues",description:"The otomi (diff|apply|sync|template) commands are delegated to helmfile, which in turn delegates the deployment work to helm. Sometimes it is not clear wether the issue is from Helm or Helmfile, so we will address them together in this section.",source:"@site/docs/for-ops/cli/known-issues.md",sourceDirName:"for-ops/cli",slug:"/for-ops/cli/known-issues",permalink:"/docs/for-ops/cli/known-issues",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/cli/known-issues.md",tags:[],version:"current",frontMatter:{slug:"known-issues",title:"Known Issues",sidebar_label:"Known issues"},sidebar:"mainSidebar",previous:{title:"Using Otomi CLI",permalink:"/docs/for-ops/cli/deploying"},next:{title:"otomi apply",permalink:"/docs/for-ops/cli/apply"}},s={},p=[{value:"State drift",id:"state-drift",level:2},{value:"Deployment errors/problems",id:"deployment-errorsproblems",level:2},{value:"1. It can&#39;t deploy a resource when it already exists",id:"1-it-cant-deploy-a-resource-when-it-already-exists",level:3},{value:"2. Release&#39;s latest state is failed",id:"2-releases-latest-state-is-failed",level:3},{value:"3. Some resources couldn&#39;t be patched",id:"3-some-resources-couldnt-be-patched",level:3},{value:"4. Timeout",id:"4-timeout",level:3},{value:"5. It can&#39;t deploy when another operation is in progress",id:"5-it-cant-deploy-when-another-operation-is-in-progress",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi (diff|apply|sync|template)")," commands are delegated to ",(0,a.kt)("inlineCode",{parentName:"p"},"helmfile"),", which in turn delegates the deployment work to ",(0,a.kt)("inlineCode",{parentName:"p"},"helm"),". Sometimes it is not clear wether the issue is from Helm or Helmfile, so we will address them together in this section."),(0,a.kt)("h2",{id:"state-drift"},"State drift"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi apply")," does not seem to change resources."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution"),": try ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi sync")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Background info"),":"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi apply")," command uses helmfile's ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," command, which combines its ",(0,a.kt)("inlineCode",{parentName:"p"},"diff")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," commandds. So it first does a ",(0,a.kt)("inlineCode",{parentName:"p"},"helmfile diff")," against helm's bookeeping (which resides in versioned secrets, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"sh.helm.release.v1.loki.v1"),"). This is the most cost effective way and does not lead to a new release version being deployed when there are no changes. However, when you changed cluster resources without the Otomi CLI (so without using helm) this is not reflected in the secrets. ",(0,a.kt)("inlineCode",{parentName:"p"},"helmfile diff")," will not see any changes in the secret, so it won't execute the subsequent ",(0,a.kt)("inlineCode",{parentName:"p"},"helmfile sync"),". If you wish to overwrite the desired state on the cluster, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi sync -l name=$releaseName")," command directly. Usually only for a certain release, so you don't force change all the releases, which costs a lot of time."),(0,a.kt)("h2",{id:"deployment-errorsproblems"},"Deployment errors/problems"),(0,a.kt)("p",null,"Helmfile uses Helm 3 under the hood, and it will throw errors in certain situations:"),(0,a.kt)("h3",{id:"1-it-cant-deploy-a-resource-when-it-already-exists"},"1. It can't deploy a resource when it already exists"),(0,a.kt)("p",null,"When a resource already exists and was not deployed with the chart before (alien to Helm), it is possible to 'adopt' the resource beforehand by labeling and annotating them correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k -n $NS annotate --overwrite $KIND $NAME meta.helm.sh/release-name=$RELEASE\nk -n $NS annotate --overwrite $KIND $NAME meta.helm.sh/release-namespace=$NAMESPACE\nk -n $NS label --overwrite $KIND $NAME app.kubernetes.io/managed-by=Helm\n")),(0,a.kt)("p",null,"This functionality exists in the stack in ",(0,a.kt)("inlineCode",{parentName:"p"},"bin/upgrades/adopt-by-helm.sh"),", and is used in the upgrade scripts."),(0,a.kt)("h3",{id:"2-releases-latest-state-is-failed"},"2. Release's latest state is failed"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Error: "$releaseName" has no deployed releases')),(0,a.kt)("p",null,"This may happen when you try to install a chart (usually for the first time) and it fails. This results in the release's deployment having state 'failed'."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When this was the first install: destroy with ",(0,a.kt)("inlineCode",{parentName:"li"},"otomi destroy -l name=$releaseName")," and then apply with ",(0,a.kt)("inlineCode",{parentName:"li"},"otomi apply -l name=$releaseName")," again."),(0,a.kt)("li",{parentName:"ul"},"When it was successfully deployed before: remove the last versioned helm secret that is causing the blockage (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"sh.helm.release.v1.loki.v3"),")")),(0,a.kt)("h3",{id:"3-some-resources-couldnt-be-patched"},"3. Some resources couldn't be patched"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Error: UPGRADE FAILED: failed to replace object: ... field is immutable")),(0,a.kt)("p",null,"This usually happens when a manifest is not allowed to be patched in place and needs to be replaced. Retry the borking release with ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi apply -l name=$releaseName --extraArgs='--force=true'")," which does exactly that."),(0,a.kt)("h3",{id:"4-timeout"},"4. Timeout"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem"),": Sometimes the Otomi cli will time out when operating on a Google cluster."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cause"),": This happens when the containerized kubectl binary wants to refresh an access token, but it can't find the binary that was registered to do so in the otomi docker container."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Workaround"),": Retry the command. Before every invocation with the containerized ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," binary, Otomi CLI first runs ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl version")," with the local binary to invoke a token refresh, resulting in an up-to-date config to mount."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Background"),":"),(0,a.kt)("p",null,"The Otomi CLI is a docker container with all the binaries it needs to deploy to these clusters. When running a command the local cloud configs are mounted. These configs may contain configuration for token refresh mechanisms, including the name of a binary to execute with certain parameters. This makes it possible to include the binaries in the image, and make them available via the known ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,a.kt)("p",null,"However, Google Cloud SDK breaks with that approach, by tightly coupling a hard path to the local gcloud binary. Sample user section from ",(0,a.kt)("inlineCode",{parentName:"p"},"$KUBECONFIG"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: gke_otomi-cloud_europe-west4_otomi-gke-demo\n  user:\n    auth-provider:\n      config:\n        access-token: xxxxxxxxx\n        cmd-args: config config-helper --format=json\n        cmd-path: /usr/local/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin/gcloud\n        expiry: '2020-10-29T02:15:37Z'\n        expiry-key: '{.credential.token_expiry}'\n        token-key: '{.credential.access_token}'\n      name: gcp\n")),(0,a.kt)("p",null,"This will not work with containerization unfortunately. We also can't predict the path on the users host computer to this binary, so we have to hope for Google to fix this some day. They are not inclined to do so it seems:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://issuetracker.google.com/issues/171493249"},"https://issuetracker.google.com/issues/171493249")),(0,a.kt)("p",null,"Maybe they will start to see the importance of this after getting more feedback ;)"),(0,a.kt)("h3",{id:"5-it-cant-deploy-when-another-operation-is-in-progress"},"5. It can't deploy when another operation is in progress"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi apply")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"otomi sync")," command fails with the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error: UPGRADE FAILED: another operation (install/upgrade/rollback) is in progress\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cause"),": A given helm release is in ",(0,a.kt)("inlineCode",{parentName:"p"},"pending-upgrade")," state, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME      NAMESPACE    REVISION    UPDATED                 STATUS     CHART      APP VERSION\nkeycloak    keycloak    3        2021-03-22 13:50:22.5069506 +0000 UTC  pending-upgrade keycloak-8.2.2 10.0.0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution"),": Find helm release that is in the ",(0,a.kt)("inlineCode",{parentName:"p"},"pending-upgrade")," state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm list -a -A | grep -i pending\n")),(0,a.kt)("p",null,"If there is a helm release in the ",(0,a.kt)("inlineCode",{parentName:"p"},"pending")," state AND it has more than one revision, then rollback to the previous revision:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm -n <namespace> rollback <release-name> <previous revision number>\n")),(0,a.kt)("p",null,"Otherwise, if there is a helm release in the state ",(0,a.kt)("inlineCode",{parentName:"p"},"pending")," AND it has only one revision, then remove that release:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm uninstall -n <namespace> rollback <release-name>\n")))}m.isMDXComponent=!0}}]);