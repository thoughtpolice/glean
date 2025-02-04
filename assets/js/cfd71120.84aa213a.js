"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>f,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.createElement(e,a({},n,{components:t}))}},d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,p=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(p,l(l({ref:n},s),{},{components:t})):r.createElement(p,l({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(58168),o=(t(96540),t(15680)),a=t(14423);const i={id:"walkthrough",title:"Walkthrough",sidebar_label:"Walkthrough"},l=void 0,c={unversionedId:"walkthrough",id:"walkthrough",title:"Walkthrough",description:"We can play with Glean using the shell. You can do this",source:"@site/docs/walkthrough.md",sourceDirName:".",slug:"/walkthrough",permalink:"/docs/walkthrough",draft:!1,editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/walkthrough.md",tags:[],version:"current",frontMatter:{id:"walkthrough",title:"Walkthrough",sidebar_label:"Walkthrough"},sidebar:"someSidebar",previous:{title:"Trying Glean",permalink:"/docs/trying"},next:{title:"Basic Concepts",permalink:"/docs/schema/basic"}},s={},u=[],d={toc:u},f="wrapper";function p(e){let{components:n,...t}=e;return(0,o.mdx)(f,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("p",null,"We can play with Glean using the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/shell"},"shell"),". You can do this\ndirectly from the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/trying"},"Docker image")," if you want, or ",(0,o.mdx)("a",{parentName:"p",href:"/docs/building"},"Build Glean\nfrom source")," first.")),(0,o.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("p",null,"We can play with Glean using the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/shell"},"shell"),".")),(0,o.mdx)("p",null,"To try experiments we can work with a local schema definition and\nlocal database (as opposed to connecting to a Glean server).  If you\nwant to play along with the examples, you can do so as follows:"),(0,o.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-lang=sh"},"mkdir /tmp/glean\nmkdir /tmp/glean/db\nmkdir /tmp/glean/schema\nglean shell --db-root /tmp/glean/db --schema /tmp/glean/schema\n")),(0,o.mdx)("p",null,"Put the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/Glean/blob/master/glean/example/schema/example.angle"},"example\nschema"),"\nin ",(0,o.mdx)("inlineCode",{parentName:"p"},"/tmp/glean/schema/example.angle")," and the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/Glean/blob/master/glean/example/facts.glean"},"example\ndata"),"\nin ",(0,o.mdx)("inlineCode",{parentName:"p"},"/tmp/glean/facts.glean"),". Then reload schema and create a database from the example\ndata using ",(0,o.mdx)("inlineCode",{parentName:"p"},":reload")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},":load <file>")," in the shell:")),(0,o.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-lang=sh"},"cd fbcode\nglean shell --db-root /tmp/glean --schema glean/example/schema\n")),(0,o.mdx)("p",null,"Then create a database from the example data with ",(0,o.mdx)("inlineCode",{parentName:"p"},":load <file>")," in the shell:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-lang=sh"},"> :load glean/example/facts.glean\nfacts>\n")),(0,o.mdx)("p",null,"Now head over to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/angle/guide"},"Angle Guide")," to try some example\nqueries and learn about how the query language works."))}p.isMDXComponent=!0},80510:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const o=t(88266);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},88266:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,o=0;const a={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in a||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?a[n].resolve(e.data.response):a[n].reject(new Error(e.data.error)),delete a[n]})));const n=o++,t=new Promise(((e,t)=>{a[n]={resolve:e,reject:t}})),i={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(i,l),t}))}},70680:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const o=t(88266);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},14423:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=a(t(80510)),n.uidocs=a(t(3730)),n.feedback=a(t(70680)),n.inpageeditor=a(t(45458));const i=["internal","external"];function l(e){return s(e),u()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const n=Object.keys(e).filter((e=>!i.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${i}`)}function u(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function d(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=s,n.isInternal=u,n.hasEphemeralDiffNumber=function(){return Boolean(d())},n.getEphemeralDiffNumber=d,n.FbInternalOnly=function(e){return u()?e.children:null},n.OssOnly=function(e){return u()?null:e.children}},45458:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const o=t(88266);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:a}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:a}})}catch(i){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${i}`)}}))}},3730:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(n){a(n)}}function l(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const o=t(88266);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);