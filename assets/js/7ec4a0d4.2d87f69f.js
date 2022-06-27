"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={slug:"installation/cli/",title:"Installing with CLI"},l=void 0,r={unversionedId:"inst-cli",id:"inst-cli",title:"Installing with CLI",description:"1. Initialize a values repo",source:"@site/docs/inst-cli.md",sourceDirName:".",slug:"/installation/cli/",permalink:"/docs/installation/cli/",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/inst-cli.md",tags:[],version:"current",frontMatter:{slug:"installation/cli/",title:"Installing with CLI"},sidebar:"mainSidebar",previous:{title:"Working with Otomi CLI",permalink:"/docs/cli/working-with"},next:{title:"otomi apply",permalink:"/docs/cli/apply"}},s={},p=[{value:"1. Initialize a values repo",id:"1-initialize-a-values-repo",level:2},{value:"2. Customize configuration",id:"2-customize-configuration",level:2},{value:"3. Configure credentials from a KMS (optional)",id:"3-configure-credentials-from-a-kms-optional",level:2},{value:"4. Start Otomi Console on your local machine (optional)",id:"4-start-otomi-console-on-your-local-machine-optional",level:2},{value:"5. Configuration",id:"5-configuration",level:2},{value:"6. Validation",id:"6-validation",level:2},{value:"7. Deployment",id:"7-deployment",level:2},{value:"Charted vs uncharted resources",id:"charted-vs-uncharted-resources",level:3},{value:"Working with uncharted resources",id:"working-with-uncharted-resources",level:3},{value:"Working with charted resources",id:"working-with-charted-resources",level:3},{value:"Need to know quirks",id:"need-to-know-quirks",level:3},{value:"8. Committing values",id:"8-committing-values",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-initialize-a-values-repo"},"1. Initialize a values repo"),(0,o.kt)("p",null,"Otomi needs a git repo to store its configuration. We call it a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"values"))," repo."),(0,o.kt)("p",null,"In order to quickly get up and running it is advised to download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/chart/otomi/values.yaml"},"chart values")," and fill in the values."),(0,o.kt)("p",null,"The following commands bootstrap the values repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# map the chart values.yaml as initial input:\nexport VALUES_INPUT=$PWD/values.yaml\n# point to a folder that is or will become the values repo\nexport ENV_DIR=$PWD/otomi-values\n# and bootstrap all the files in there\notomi bootstrap\n")),(0,o.kt)("h2",{id:"2-customize-configuration"},"2. Customize configuration"),(0,o.kt)("p",null,"The essential otomi platform configurations is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"env/cluster.yaml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"env/settings.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"env/secrets.settings.yaml")," files. Inspect them and customize values to match your environment."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The minimum required input is found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/chart/otomi/values.yaml"},"chart values"),"."))),(0,o.kt)("h2",{id:"3-configure-credentials-from-a-kms-optional"},"3. Configure credentials from a KMS (optional)"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"No encryption needed?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you don't need encryption straight away please continue to the next step"))),(0,o.kt)("p",null,"Otomi will encrypt any ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets.*.yaml")," files with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mozilla/sops"},"sops"),", but only if it finds ",(0,o.kt)("inlineCode",{parentName:"p"},"sops:")," configuration details. In order to have access to the KMS credentials to encrypt/decrypt, a ",(0,o.kt)("inlineCode",{parentName:"p"},".secrets")," file needs to exist and have those credentials. Please ",(0,o.kt)("inlineCode",{parentName:"p"},"copy .secrets.sample .secrets")," and fill it in with the credentials from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/prerequisites"},"prerequisites"),"."),(0,o.kt)("p",null,"Then you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"otomi bootstrap"),", which will result in the encryption and decryption of the secrets files."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note to developers:")),(0,o.kt)("p",null,"To allow ",(0,o.kt)("inlineCode",{parentName:"p"},"git diff")," to show unencrypted values, you must register the sops diffing routine once with git. To register it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git config diff.sopsdiffer.textconv 'sops -d'\n")),(0,o.kt)("p",null,"This only registers the sops differ, which is responsible for invoking sops. But sops still needs the credentials to the KMS service. Again, your AWS profile is always pointed and loaded, but in case of Google KMS you will need to point GOOGLE_APPLICATION_CREDENTIALS to the ",(0,o.kt)("inlineCode",{parentName:"p"},"gcp-key.json")," file holding your account information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export GOOGLE_APPLICATION_CREDENTIALS=$PWD/gcp-key.json\n")),(0,o.kt)("p",null,"Now try a diff:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git diff\n")),(0,o.kt)("h2",{id:"4-start-otomi-console-on-your-local-machine-optional"},"4. Start Otomi Console on your local machine (optional)"),(0,o.kt)("p",null,"Bootstrap again and start the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"otomi bootstrap\notomi console\n")),(0,o.kt)("p",null,"The console allows for easy configuration of many settings but not all. Assuming the setup steps are completed, you need to now configure the Otomi values repository. This repo is the source configuration for Otomi. It contains Drone pipeline configuration for listening to updates of these values targeting the cluster the Drone instance is running on."),(0,o.kt)("h2",{id:"5-configuration"},"5. Configuration"),(0,o.kt)("p",null,"Configuration can be performed much easier through the Otomi Console, so please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/console/"},"Otomi Console")," documentation."),(0,o.kt)("p",null,"However, chart configuration is not (yet) exposed through the console, so please look at the values repo's ",(0,o.kt)("inlineCode",{parentName:"p"},"env/charts/*")," files to edit the configuration files."),(0,o.kt)("p",null,"Important things to note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every configuration file can have a ",(0,o.kt)("inlineCode",{parentName:"li"},"secrets.*.yaml")," counterpart, but these are optional."),(0,o.kt)("li",{parentName:"ul"},"A json schema and vscode settings are imported by the bootrap (in ",(0,o.kt)("inlineCode",{parentName:"li"},".vscode/*"),"), so you will have automatic linting and hinting for the configuration when vscode is used (try CTRL+SPACE in the yaml)."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},".secrets")," is correctly configured then automatic de-/en-cryption will also be performed when in vscode and editing a ",(0,o.kt)("inlineCode",{parentName:"li"},"secrets.*.yaml")," file.")),(0,o.kt)("p",null,"Please follow the guidance of the yaml hinting, as it has all the descriptions and example values you need to operate on these files."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Otomi YAML hinting only works in vscode")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"VSCode automatically loads the '.vscode/values-schema.yaml' schema provided. Please inspect it or wire it up manually when using another editor."))),(0,o.kt)("p",null,"If you wish to be sure of your changes, you can always do a ",(0,o.kt)("inlineCode",{parentName:"p"},"git diff"),". When you chose to use encryption and have correctly followed the corresponding instructions, then you should see a diff with the unencrypted values. That is, if you modified any ;)"),(0,o.kt)("h2",{id:"6-validation"},"6. Validation"),(0,o.kt)("p",null,"When you are done with the configuration you can validate the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"otomi validate-values\n")),(0,o.kt)("p",null,"If you have made an error in the format of the values this will be reported."),(0,o.kt)("p",null,"To check if all the output manifests are valid for the target cluster's k8s version, ",(0,o.kt)("em",{parentName:"p"},"and")," following best practices you can run another variation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"otomi validate-templates\n")),(0,o.kt)("h2",{id:"7-deployment"},"7. Deployment"),(0,o.kt)("h3",{id:"charted-vs-uncharted-resources"},"Charted vs uncharted resources"),(0,o.kt)("p",null,"The output manifests generated by otomi are deployed in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Uncharted: some base manifests are applied directly with ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply")),(0,o.kt)("li",{parentName:"ul"},"Charted: manfests that are packaged up in helm charts.")),(0,o.kt)("p",null,"Ideally, we would like to deploy as helm chart as it has ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.nl/search?q=benefits+of+helm+chart"},"many benefits")," such as rollback. But in some cases we can't or we don't wish to. The reasons for that are the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Some resources we don't want governed by charts (as charts might get accidentally removed, erasing everything that was deployed with it)."),(0,o.kt)("li",{parentName:"ol"},"Some existing resources have to be patched (like pull secrets in service accounts), which helmfile won't do as it will not modify existing resources not annotated to be under control by a chart."),(0,o.kt)("li",{parentName:"ol"},"Some resources need to exist before the charts are deployed (such as CRDs).")),(0,o.kt)("p",null,"The manifests that are currently not charted are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"k8s/base")," (unparameterized, mostly rbac roles)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values/cloud"),' (applies cloud specific "normalization" patterns, such as for storageclasses)'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values/k8s")," (team resources, such as namespaces, service accounts, pull secrets)")),(0,o.kt)("h3",{id:"working-with-uncharted-resources"},"Working with uncharted resources"),(0,o.kt)("p",null,"Currently we don't have any subcommand that only works on uncharted resources, but we have the following commands that target the entire bundle."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"otomi test"),": does a dry run, showing all manifests that will be deployed, and will also show any errors in the output manifests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"otomi apply"),": deploys all the manifests (uncharted first, then charted)")),(0,o.kt)("p",null,"So after doing ",(0,o.kt)("inlineCode",{parentName:"p"},"otomi test"),", if all looks ok, go ahead and do the initial deployment of all resources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"otomi apply\n")),(0,o.kt)("p",null,"This command executes two stages (please see ",(0,o.kt)("inlineCode",{parentName:"p"},"binzx/apply.ts"),"). The first stage will deploy all uncharted resources with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply"),", and the second stage will deploy all the charted resources with ",(0,o.kt)("inlineCode",{parentName:"p"},"helmfile apply"),"."),(0,o.kt)("p",null,"Whenever you add a team, or change or add to these uncharted resources, you have to run ",(0,o.kt)("inlineCode",{parentName:"p"},"otomi apply")," to apply them. When you let Drone do the syncing for you, it will invoke that command to synchronize the cluster."),(0,o.kt)("h3",{id:"working-with-charted-resources"},"Working with charted resources"),(0,o.kt)("p",null,"During development iterations you will probably not touch uncharted resources often, but instead you will add features in charts."),(0,o.kt)("p",null,"Otomi has these subcommands that only target charted resources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"otomi (diff|apply|sync|template)\n")),(0,o.kt)("p",null,"You can always target a single chart like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"otomi (diff|apply|sync|template) -l name=prometheus-operator\n")),(0,o.kt)("p",null,"(For a list of all supported flags to use those subcommands, we defer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/roboll/helmfile"},"helmfile documentation"),", as those are deferred to the helmfile cli.)"),(0,o.kt)("p",null,"Let's do a diff of all the charts that are enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"otomi diff\n")),(0,o.kt)("h3",{id:"need-to-know-quirks"},"Need to know quirks"),(0,o.kt)("p",null,"Whenever you modify resources without using helm, its internal bookkeeping (the versioned secrets in the namespaces) will not change, and any subsequent ",(0,o.kt)("inlineCode",{parentName:"p"},"otomi apply")," commands will not modify anything. If you notice this, and want to overwrite with the output manifests, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"otomi sync"),", which will skip doing a diff, and instead apply all charted manifests as a new version."),(0,o.kt)("h2",{id:"8-committing-values"},"8. Committing values"),(0,o.kt)("p",null,"To commit values and run post processing tasks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"otomi commit\n")),(0,o.kt)("p",null,'This will detect any version changes, generate Drone pipeline configuration, and then commit all files with a standardized message "Manual commit". (We believe all values repo configuration changes are equally meaningful and don\'t need explicit commit messages.) Directly doing a ',(0,o.kt)("inlineCode",{parentName:"p"},"git commit")," is discouraged with a git hook saying so, but whenever you did not touch any versions in ",(0,o.kt)("inlineCode",{parentName:"p"},"env/clusters.yaml")," you may bypass with ",(0,o.kt)("inlineCode",{parentName:"p"},'git commit -m "Manual commit" --no-verify')," to save development time."),(0,o.kt)("p",null,"This will then trigger the pipeline of any ",(0,o.kt)("a",{parentName:"p",href:"https://drone.$clusterDomain/"},"configured Drone")," (if you followed the postinstall step)."))}u.isMDXComponent=!0}}]);