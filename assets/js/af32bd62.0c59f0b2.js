"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4487],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>f,mdx:()=>b,useMDXComponents:()=>s,withMDXComponents:()=>u});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){return function(t){var n=s(t.components);return r.createElement(e,i({},t,{components:n}))}},s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,p=u["".concat(a,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(p,c(c({ref:t},d),{},{components:n})):r.createElement(p,c({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67555:(e,t,n)=>{n.d(t,{D4:()=>a,Lw:()=>c,gD:()=>l});var r=n(96540),o=n(14423);let i;function a(e){return r.createElement("a",{href:i+e.file},e.file)}function c(e){return r.createElement("a",{href:i+e.file},e.children)}i=(0,o.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";const l=e=>{let{children:t,internal:n,external:i}=e;return(0,o.fbContent)({internal:r.createElement("code",null,n),external:r.createElement("code",null,i)})}},82666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(58168),o=(n(96540),n(15680)),i=(n(14423),n(67555));const a={id:"scip-dotnet",title:"Dotnet",sidebar_label:"Dotnet"},c=void 0,l={unversionedId:"indexer/scip-dotnet",id:"indexer/scip-dotnet",title:"Dotnet",description:"To index Dotnet we use SourceGraph's SCIP indexer for dotnet. SCIP is a new format for tools to share information about code. Releases of scip-dotnet can be installed with dotnet tools and used as indexers for SCIP, which Glean will accept. The indexer itself requires a dotnet runtime environment.",source:"@site/docs/indexer/dotnet.md",sourceDirName:"indexer",slug:"/indexer/scip-dotnet",permalink:"/docs/indexer/scip-dotnet",draft:!1,editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/indexer/dotnet.md",tags:[],version:"current",frontMatter:{id:"scip-dotnet",title:"Dotnet",sidebar_label:"Dotnet"},sidebar:"someSidebar",previous:{title:"Python",permalink:"/docs/indexer/scip-python"},next:{title:"Building Glean",permalink:"/docs/building"}},d={},u=[{value:"Run the indexer",id:"run-the-indexer",level:2},{value:"In the shell",id:"in-the-shell",level:2},{value:"Schema",id:"schema",level:2}],s={toc:u},f="wrapper";function p(e){let{components:t,...n}=e;return(0,o.mdx)(f,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"To index ",(0,o.mdx)("a",{parentName:"p",href:"https://dotnet.microsoft.com/"},"Dotnet")," we use SourceGraph's ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/sourcegraph/scip-dotnet"},"SCIP indexer for dotnet"),". ",(0,o.mdx)("a",{parentName:"p",href:"https://about.sourcegraph.com/blog/announcing-scip"},"SCIP")," is a new format for tools to share information about code. Releases of ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/sourcegraph/scip-dotnet"},"scip-dotnet")," can be installed with ",(0,o.mdx)("inlineCode",{parentName:"p"},"dotnet tools")," and used as indexers for SCIP, which Glean will accept. The indexer itself requires a ",(0,o.mdx)("a",{parentName:"p",href:"https://dotnet.microsoft.com/"},"dotnet")," runtime environment."),(0,o.mdx)("h2",{id:"run-the-indexer"},"Run the indexer"),(0,o.mdx)("p",null,"The indexer is run via the main ",(0,o.mdx)("inlineCode",{parentName:"p"},"glean")," CLI tool."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"> cabal build exe:glean\n")),(0,o.mdx)("p",null,"And index your Dotnet repository with:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"glean index dotnet-scip DIR --db NAME/INSTANCE\n")),(0,o.mdx)("p",null,"where"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"DIR")," is the root directory containing the Dotnet project"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"name/hash")," is the name of the repository to create")),(0,o.mdx)("p",null,"Provide the usual ",(0,o.mdx)("inlineCode",{parentName:"p"},"--db-root")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"--schema")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"--service")," arguments\nto ",(0,o.mdx)("inlineCode",{parentName:"p"},"glean")),(0,o.mdx)("h2",{id:"in-the-shell"},"In the shell"),(0,o.mdx)("p",null,"Dotnet source can also be indexed directly from the Glean shell:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},":index dotnet-scip DIR\n")),(0,o.mdx)("p",null,"The shell will pick a DB name and hash for you based on ",(0,o.mdx)("inlineCode",{parentName:"p"},"DIR"),"."),(0,o.mdx)("h2",{id:"schema"},"Schema"),(0,o.mdx)("p",null,"The schema is in ",(0,o.mdx)(i.D4,{file:"glean/schema/source/scip.angle",mdxType:"SrcFile"})))}p.isMDXComponent=!0},80510:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const o=n(88266);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},88266:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,o=0;const i={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in i||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?i[t].resolve(e.data.response):i[t].reject(new Error(e.data.error)),delete i[t]})));const t=o++,n=new Promise(((e,n)=>{i[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,c),n}))}},70680:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const o=n(88266);t.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(r){}}))}},14423:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=i(n(80510)),t.uidocs=i(n(3730)),t.feedback=i(n(70680)),t.inpageeditor=i(n(45458));const a=["internal","external"];function c(e){return d(e),u()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const t=Object.keys(e).filter((e=>!a.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${a}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function s(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=d,t.isInternal=u,t.hasEphemeralDiffNumber=function(){return Boolean(s())},t.getEphemeralDiffNumber=s,t.FbInternalOnly=function(e){return u()?e.children:null},t.OssOnly=function(e){return u()?null:e.children}},45458:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const o=n(88266);t.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:r,diff_number:i}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:r,diff_number:i}})}catch(a){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${a}`)}}))}},3730:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const o=n(88266);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:r}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:r}})}))}}}]);