"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[813],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1704:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={slug:"universal-opa-policy-development",title:"Universal OPA Policies Development",authors:"aspinu",tags:["otomi","opa","gatekeeper","rego","security"]},l=void 0,c={permalink:"/blog/universal-opa-policy-development",source:"@site/blog/2021-03-11-universal-opa-policy-development.md",title:"Universal OPA Policies Development",description:"Introduction",date:"2021-03-11T00:00:00.000Z",formattedDate:"March 11, 2021",tags:[{label:"otomi",permalink:"/blog/tags/otomi"},{label:"opa",permalink:"/blog/tags/opa"},{label:"gatekeeper",permalink:"/blog/tags/gatekeeper"},{label:"rego",permalink:"/blog/tags/rego"},{label:"security",permalink:"/blog/tags/security"}],readingTime:9.56,truncated:!1,authors:[{name:"Alin Spinu",title:"Otomi contributor",url:"https://github.com/rawc0der",imageURL:"https://avatars.githubusercontent.com/u/1760897?v=4",key:"aspinu"}],frontMatter:{slug:"universal-opa-policy-development",title:"Universal OPA Policies Development",authors:"aspinu",tags:["otomi","opa","gatekeeper","rego","security"]},prevItem:{title:"Integrating Harbor, KeyCloak and Istio",permalink:"/blog/harbor-keycloak-istio"},nextItem:{title:"Introducing Otomi",permalink:"/blog/introducing-otomi"}},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Hands-on using OPA in Otomi",id:"hands-on-using-opa-in-otomi",level:2},{value:"OPA ecosystem common knowledge",id:"opa-ecosystem-common-knowledge",level:2},{value:"In-Cluster vs Static Resources Policy Wars",id:"in-cluster-vs-static-resources-policy-wars",level:2},{value:"Conftest in action",id:"conftest-in-action",level:2},{value:"Running Gatekeeper",id:"running-gatekeeper",level:2},{value:"Policy Development in Gatekeeper context",id:"policy-development-in-gatekeeper-context",level:2},{value:"Planning for Unification",id:"planning-for-unification",level:2},{value:"Open Issues in OPA Community",id:"open-issues-in-opa-community",level:2},{value:"Current State of Unified Rego",id:"current-state-of-unified-rego",level:2},{value:"How Istio is Mutating Objects in the Background",id:"how-istio-is-mutating-objects-in-the-background",level:2},{value:"Otomi Policy Features",id:"otomi-policy-features",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This is a story behind the trenches of writing ",(0,a.kt)("strong",{parentName:"p"},"Rego")," policies and how to unravel the cumbersome process of working with ",(0,a.kt)("strong",{parentName:"p"},"Gatekeeper")," vs ",(0,a.kt)("strong",{parentName:"p"},"Conftest")," for validating Kubernetes resources."),(0,a.kt)("p",null,"Working with policy compliant Kubernetes clusters is on the radar for a lot of companies these days, especially if you're walking the path towards popular certifications like ISO/IEC 27001 for Information Security Management."),(0,a.kt)("h2",{id:"hands-on-using-opa-in-otomi"},"Hands-on using OPA in Otomi"),(0,a.kt)("p",null,"As some of you probably already know, the Kubernetes native PodSecurityPolicy resource is going to be deprecated, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/pull/97171"},"Github")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1VKqjUlpU888OYtIrBwidL43FOLhbmOD5tesYwmjzO4E/edit#"},"Google docs"),"\u200a\u2014\u200athis leaves way for external projects like Open Policy Agent to be used as the new standard for developing and enforcing policy rules."),(0,a.kt)("p",null,"Otomi is using OPA as the standard for providing policy enforcement because of the popularity and commitment to the Kubernetes community, ease of use and also for the future project development plans."),(0,a.kt)("p",null,"One of the key principles of Otomi is that it is easy to use and provides clarity for integrations, allowing developers to easily extend any platform feature and provide integrated security for everything from the ground up."),(0,a.kt)("h2",{id:"opa-ecosystem-common-knowledge"},"OPA ecosystem common knowledge"),(0,a.kt)("p",null,"Decisions are handled by the means of ",(0,a.kt)("strong",{parentName:"p"},"Admission Controllers")," such as ",(0,a.kt)("strong",{parentName:"p"},"OPA kube-mgmt")," project or Gatekeeper, which I will touch upon in a minute, but also remember that we can validate things using ",(0,a.kt)("strong",{parentName:"p"},"Rego query")," language on any plain files using static analysis tools like Conftest. The list of supported Conftest formats include (but is not limited to): json, yaml, Dockerfile, INI files, XML, etc.Here's the problem, Conftest and Gatekeeper are on the path of diverging. Although they speak the same REGO language, the two disagree on some aspects."),(0,a.kt)("h2",{id:"in-cluster-vs-static-resources-policy-wars"},"In-Cluster vs Static Resources Policy Wars"),(0,a.kt)("p",null,'Working in a policy constricted environment is like having "parental controls" turned on for unprivileged users, allowing administrators to decide what kind of resources and setup are safest for their flock of Kubernetes clusters. From an application developer\'s perspective, being denied access to deploy some resources means that they are not adhering to the rules imposed for that environment and should decide to find and fix the missing links in this setup.'),(0,a.kt)("p",null,"Policy administrators/developers on the other hand, struggle with finding the correct enforcement strategies and adjusting policy parameters according to desired state or allowing certain exclusions for cases where policy enforcement does not make sense. For example: system namespaces, cloud vendor specific namespaces or anything that should avoid intervention by default. There is no golden rule for policy adoption and you are in charge of overcoming your own mistakes if something is not right."),(0,a.kt)("p",null,"Let's start with the simple use-case of running policy checks against any kind of YAML resource. Then I move forward with more details about in-cluster Kubernetes admission review objects."),(0,a.kt)("h2",{id:"conftest-in-action"},"Conftest in action"),(0,a.kt)("p",null,"With a simple command we can test if a helm chart is violating any rules in the provided policies folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm template stable/keycloak | conftest test --policy ./policies/ --all-namespaces -\nFAIL - Policy: container-limits - container <keycloak> has no resource limits\nFAIL - Policy: container-limits - container <keycloak-test> has no resource limits\n162 tests, 160 passed, 0 warnings, 2 failures, 0 exceptions\n")),(0,a.kt)("p",null,"The generated yaml files are streamed into Conftest and policies are tested one by one."),(0,a.kt)("p",null,'By examining the log message, we can see that the container-limits policy is marking two resources as failures. Now all we have to do is modify the templates to provide a "sensitive" amount of resource limits to the indicated containers and our policy checks will pass successfully! Hooray'),(0,a.kt)("p",null,"This is pretty useful if you want to adopt new helm applications, but don't want to deploy anything to the cluster unless it's well-examined for any violations. Conftest supports passing values to the policies using the \u2013data option, which allows policy designers to configure different settings through parameters. Parameters can help us control any aspect of creating configurable rules for resources. I will return to that in a moment."),(0,a.kt)("h2",{id:"running-gatekeeper"},"Running Gatekeeper"),(0,a.kt)("p",null,"Gatekeeper is becoming the new standard for implementing security policies in Kubernetes, endorsing a broad ecosystem to spread ideas. Enforcing policy decisions works by using a validating web-hook, intercepting any request authenticated by the api-server and checking if the request meets the defined policy\u200a or rejecting it otherwise."),(0,a.kt)("p",null,"Trying to create a non-conformant resource object in a Gatekeeper enabled cluster results in an error with a message to explain the rejected request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm template charts/redis | kubectl apply -f -\n\nsecret/redis created\nconfigmap/redis created\nservice/redis-master created\nError from server (\n[denied by banned-image-tags] Policy: banned-image-tags - container <redis> has banned image tag <latest>, banned tags are {"latest", "master"}\n[denied by psp-allowed-users] Policy: psp-allowed-users - Container redis is attempting to run as disallowed user 0. Allowed runAsUser: {"rule": "MustRunAsNonRoot"}\n)\nerror when creating "redis/templates/redis-master-statefulset.yaml": admission webhook "validation.gatekeeper.sh" denied the request\n')),(0,a.kt)("p",null,"As you can see, some of the resources get created, but the command fails with a denial from the admission webhook."),(0,a.kt)("p",null,"To make this resource valid, small tweaks to the image tag and securityContext fields will do the trick."),(0,a.kt)("h2",{id:"policy-development-in-gatekeeper-context"},"Policy Development in Gatekeeper context"),(0,a.kt)("p",null,"Similar to plain policy files which Conftest uses, Gatekeeper policy library works by loading into memory a collection of wrapped rego files in Kubernetes CRDs called ConstraintTemplates."),(0,a.kt)("p",null,"To enforce a policy for certain resource types we need to instantiate a Constraint (CR resource) which is acting like the blueprint with desired values or parameters."),(0,a.kt)("p",null,"Example Gatekeeper setup for Config and Constraint resources:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"--- # Gatekeeper Config\napiVersion: config.gatekeeper.sh/v1alpha1\nkind: Config\nmetadata:\n  name: config\n  namespace: gatekeeper-system\nspec:\n  match:\n    - excludedNamespaces:\n        - gatekeeper-system\n        - kube-system\n      processes:\n        - '*'\nsync:\n  syncOnly:\n    - group: ''\n      kind: Pod\n      version: v1\n--- # ContainerLimits Constraint\napiVersion: constraints.gatekeeper.sh/v1beta1\nkind: ContainerLimits\nmetadata:\n  name: containerlimits\nspec:\n  match:\n    kinds:\n      - apiGroups:\n          - apps\n          - ''\n        kinds:\n          - DaemonSet\n          - Deployment\n          - StatefulSet\n          - Pod\nparameters:\n  container-limits:\n    enabled: false\n    cpu: '2'\n    memory: 2000Mi\n")),(0,a.kt)("p",null,'So far this looks pretty easy\u200a. We decide to enable this policy for all namespaces except for "gatekeeper-system" & "kube-system" and Gatekeeper will test all our containers for resource limits.'),(0,a.kt)("p",null,"Hold on.. Where is the definition for this policy? Rego Rules are defined in CRD files called ConstraintTemplates and they need to be deployed prior to the Constraint instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"--- # ConstraintTemplate for container-limits policy\napiVersion: templates.gatekeeper.sh/v1beta1\nkind: ConstraintTemplate\nmetadata:\n name: containerlimits\nspec:\n crd:\n   spec:\n     names:\n       kind: ContainerLimits\n     validation:        # Schema for the `parameters` field\n       openAPIV3Schema:\n...\ntargets:\n- target: admission.k8s.gatekeeper.sh\n libs:\n   - |-\n     package lib.utils\n     ...\n rego: |-\n   package containerlimits\n   ...\n")),(0,a.kt)("p",null,"To simplify the example, we've cut out parts of our file, but you can also view it on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper-library/blob/master/library/general/containerlimits/template.yaml"},"Gatekeeper Library repo"),'. The "rego" property is where the actual policy definition lives and any dependency libraries can be declared in the list of "libs". We won\'t go into how Rego rules for violations work now, but you can enjoy all the fun of learning a powerful query language inspired by decades old ',(0,a.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"Datalog"),"."),(0,a.kt)("h2",{id:"planning-for-unification"},"Planning for Unification"),(0,a.kt)("p",null,"While the process of creating new policies seems to bear a lot of weight, luckily there is a simple CLI tool to speed up our work called Konstraint."),(0,a.kt)("p",null,"You can define the rules in Rego files and Konstraint will wrap our policy and all dependency libraries in the necessary CRD files for Gatekeeper. Konstraint has core library functions for working with all kinds of kubernetes native objects which makes it an indispensable tool for Rego development. OK, so this means we only care about writing Rego files and we can test them in both Gatekeeper and Conftest."),(0,a.kt)("h2",{id:"open-issues-in-opa-community"},"Open Issues in OPA Community"),(0,a.kt)("p",null,"While that is true, after delving deeper into the bowels of Gatekeeper and Conftest, we found conflicting design concepts which completely ruin this unified policy development mindset."),(0,a.kt)("p",null,"The way you can define parameters in two libraries is different, and Gatekeeper has a restrictive parser which does not allow arbitrary imports in the rego definition. There has been an attempt to change this hard limitation in a discussion ","[here]","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/issues/1046"},"https://github.com/open-policy-agent/gatekeeper/issues/1046")),(0,a.kt)("h2",{id:"current-state-of-unified-rego"},"Current State of Unified Rego"),(0,a.kt)("p",null,"To echo the subject once again, we are interested in reducing the boilerplate and simplify the process of developing Policies."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[ Same Rego == different contexts ]")),(0,a.kt)("p",null,'Working with one common set Rego policy files and using the same source code for testing "static files", generated from CI Builds or across any "Gatekeeping context", where objects are created via the Kubernetes api. Let\'s cut to the chase, and say we already made this happen, and delivered a working solution in Otomi. By using the available community tools, lots of integration work and a lot of customization additions. We now have a rich collection of policies and utility functions defined for our Kubernetes clusters\u200a. You can browse them in the ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/tree/master/policies/"},"Otomi-core repository"),"."),(0,a.kt)("h2",{id:"how-istio-is-mutating-objects-in-the-background"},"How Istio is Mutating Objects in the Background"),(0,a.kt)("p",null,"So by now, we understand all the nitty gritty details about Rego policies and Gatekeeper\u200a\u2014\u200abut there will always be external factors, changing the state of the world and you can find yourself in a closed box situation, nowhere to go."),(0,a.kt)("p",null,'This situation becomes a nightmare when using Istio mesh for networking. In reality Istio is creating a "subspace" of resources by injecting a Sidecar container to all the pods in namespaces where service mesh communication is enabled. This kind of container is sometimes interfering with the security constraints design strategy.'),(0,a.kt)("h2",{id:"otomi-policy-features"},"Otomi Policy Features"),(0,a.kt)("p",null,"To create some flexibility, we have further extended the policy exceptions capabilities by examining granular annotation information for every resource under analysis."),(0,a.kt)("p",null,"Coming back to the Parameters idea described a while back, if Policy files can read resource files as raw input, why not allow certain exceptions through annotating which resources we want to skip checking, similar to the excludeNamespace option for Gatekeeper."),(0,a.kt)("p",null,"Rego has a rich built-in library system and is a powerful language, allowing us to easily create robust utility functions for this design."),(0,a.kt)("p",null,"To give an example, using the following annotations will allow entire pod or certain containers from the pod to exclude one or more policies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Annotation for entire pod\npolicy.otomi.io/ignore: psp-allowed-repos\n# Annotation for Istio sidecar based containers\npolicy.otomi.io/ignore-sidecar: psp-allowed-users,psp-capabilities\n# Annotation for specific container (name=app-container)\npolicy.otomi.io/ignore/app-container: banned-image-tags\nAnother example of exclusion is to turn of the policy entirely by disabling it from the baseline settings:\n# baseline configuration\npolicies:\n container-limits:\n   enabled: false\n   cpu: '2'\n   memory: 2Gi\n banned-image-tags:\n   enabled: false\n   tags:\n     - latest\n     - master\n psp-host-filesystem:\n   enabled: true\n   allowedHostPaths:\n     - pathPrefix: /tmp/\n       readOnly: false\n psp-allowed-users:\n   enabled: true\n   runAsUser:\n     rule: MustRunAsNonRoot\n   runAsGroup:\n     rule: MayRunAs\n     ranges:\n       - min: 1\n         max: 65535\n   supplementalGroups:\n     rule: MayRunAs\n     ranges:\n       - min: 1\n         max: 65535\n   fsGroup:\n     rule: MayRunAs\n     ranges:\n       - min: 1\n         max: 65535\n psp-host-security:\n   enabled: true\npsp-host-networking-ports:\n   enabled: true\npsp-privileged:\n   enabled: true\npsp-capabilities:\n   enabled: true\n   allowedCapabilities:\n     - NET_BIND_SERVICE\n     - NET_RAW\n psp-forbidden-sysctls:\n   enabled: true\n   forbiddenSysctls:\n     - kernel.*\n     - net.*\n     - abi.*\n     - fs.*\n     - sunrpc.*\n     - user.*\n     - vm.*\n psp-apparmor:\n   enabled: true\n   allowedProfiles:\n     - runtime/default\n     - docker/default\npsp-selinux:\n   enabled: false\n   seLinuxContext: RunAsAny\npsp-seccomp:\n   enabled: false\n   allowedProfiles:\n     - runtime/default\npsp-allowed-repos:\n   enabled: true\n   repos:\n     - docker.io\n     - gke.otomi.cloud\n     - aks.otomi.cloud\n     - eks.otomi.cloud\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"To pin down the state of the landscape\u200a\u2014\u200a designing Kubernetes policies is still evolving towards new heights and I can image in the near future more and more projects sharing the same policies from a registry like the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/policy-hub/policy-hub-cli"},"policy-hub"),"."),(0,a.kt)("p",null,"We think creating a common understanding about unified Rego is the key to a sunny future."),(0,a.kt)("p",null,"This article was originally posted by Alin Spinu on ",(0,a.kt)("a",{parentName:"p",href:"https://spinualin.medium.com/universal-opa-policies-development-a3f88226e3d5"},"Medium"),"."))}m.isMDXComponent=!0}}]);