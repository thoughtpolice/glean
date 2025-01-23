"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6307],{15680:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>f,withMDXComponents:()=>s});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){return function(n){var t=f(n.components);return a.createElement(e,i({},n,{components:t}))}},f=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=f(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=f(t),p=r,u=s["".concat(o,".").concat(p)]||s[p]||m[p]||i;return t?a.createElement(u,l(l({ref:n},c),{},{components:t})):a.createElement(u,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},94633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));t(14423);const i={id:"efficiency",title:"Query Efficiency",sidebar_label:"Query Efficiency"},o=void 0,l={unversionedId:"angle/efficiency",id:"angle/efficiency",title:"Query Efficiency",description:"There are two important aspects of a query that affect its efficiency;",source:"@site/docs/angle/efficiency.md",sourceDirName:"angle",slug:"/angle/efficiency",permalink:"/docs/angle/efficiency",draft:!1,editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/angle/efficiency.md",tags:[],version:"current",frontMatter:{id:"efficiency",title:"Query Efficiency",sidebar_label:"Query Efficiency"},sidebar:"someSidebar",previous:{title:"Guide",permalink:"/docs/angle/guide"},next:{title:"Advanced Query Features",permalink:"/docs/angle/advanced"}},d={},c=[{value:"Efficient matching of facts",id:"efficient-matching-of-facts",level:2},{value:"Making queries efficient using a derived predicate",id:"making-queries-efficient-using-a-derived-predicate",level:2},{value:"The order of statements is important",id:"the-order-of-statements-is-important",level:2}],s={toc:c},f="wrapper";function p(e){let{components:n,...t}=e;return(0,r.mdx)(f,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"There are two important aspects of a query that affect its efficiency;"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Which fields are specified in a pattern"),(0,r.mdx)("li",{parentName:"ol"},"The ordering of statements")),(0,r.mdx)("p",null,"We\u2019ll cover each of these in the following sections."),(0,r.mdx)("h2",{id:"efficient-matching-of-facts"},"Efficient matching of facts"),(0,r.mdx)("p",null,"The order of fields in the schema matters a lot for efficiency. Glean indexes facts by a prefix of their keys, so if we know the prefix when searching for facts this will be a lot faster. Often this difference is absolutely crucial; the difference is between ",(0,r.mdx)("em",{parentName:"p"},"O(log n)")," and ",(0,r.mdx)("em",{parentName:"p"},"O(n)"),", so when the database is large this can be many orders of magnitude."),(0,r.mdx)("p",null,"For example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," predicate we saw ",(0,r.mdx)("a",{parentName:"p",href:"/docs/angle/guide#matching-nested-facts"},"earlier")," is defined as"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate Parent :\n  {\n    child : Person,\n    parent : Person,\n  }\n")),(0,r.mdx)("p",null,"We should think of this as a mapping from ",(0,r.mdx)("inlineCode",{parentName:"p"},"child")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"parent"),". Glean won\u2019t stop you writing a query for ",(0,r.mdx)("inlineCode",{parentName:"p"},"{ parent = ... }"),", but such a query will examine all of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," facts in the database. We can see how many facts are searched for our query using ",(0,r.mdx)("inlineCode",{parentName:"p"},":profile full")," in the shell (see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/angle/debugging"},"debugging")," for more details):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'facts> :profile full\nfacts> example.Parent { parent = { name = "Pet" }}\n(snip)\n2 results, 2 facts, 0.40ms, 159440 bytes, 988 compiled bytes\nFacts searched:\n                        example.Parent.1 : 3\n')),(0,r.mdx)("p",null,"This tells us that although it found the 2 results we expected, it searched all 3 ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," facts in the process."),(0,r.mdx)("h2",{id:"making-queries-efficient-using-a-derived-predicate"},"Making queries efficient using a derived predicate"),(0,r.mdx)("p",null,"What if we wanted to efficiently map from ",(0,r.mdx)("inlineCode",{parentName:"p"},"parent")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"child"),"? That\u2019s easy to accomplish using a ",(0,r.mdx)("em",{parentName:"p"},"derived predicate"),". We\u2019re going to define a new predicate with a different field ordering, and automatically generate the facts of our new predicate by deriving them from the facts of the existing predicate.  For full details see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/derived"},"Derived Predicates"),", what follows will be a walkthrough showing how to use a derived predicate to make our queries more efficient."),(0,r.mdx)("p",null,"First we\u2019ll define our derived predicate in the schema, like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"predicate Child :\n  {\n    parent : Class,\n    child : Class,\n  }\n  stored\n  { P, C } where Parent { C, P }\n")),(0,r.mdx)("p",null,"We can try this out in the shell. First we have to create a new database to hold the derived facts that is ",(0,r.mdx)("em",{parentName:"p"},"stacked")," on top of the old database. Drop out of the shell and run this command to create the new database:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"glean create --db-root /tmp/glean/db --schema dir:/tmp/glean/schema --db derived/1 --stacked facts/1\n")),(0,r.mdx)("p",null,"Now start the shell again and load the stacked database. Note that we can still query facts from the original database:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'> :db derived/1\nderived> example.Parent _\n{ "id": 1028, "key": { "child": { "id": 1025 }, "parent": { "id": 1024 } } }\n{ "id": 1029, "key": { "child": { "id": 1026 }, "parent": { "id": 1024 } } }\n{ "id": 1030, "key": { "child": { "id": 1027 }, "parent": { "id": 1026 } } }\n')),(0,r.mdx)("p",null,"Initially we have no facts of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Child")," predicate:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"derived> example.Child _\n0 results, 0 facts, 0.91ms, 812952 bytes, 664 compiled bytes\n")),(0,r.mdx)("p",null,"But we can create them automatically:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'derived> * example.Child _\n{ "id": 1037, "key": { "parent": { "id": 1024 }, "child": { "id": 1025 } } }\n{ "id": 1038, "key": { "parent": { "id": 1024 }, "child": { "id": 1026 } } }\n{ "id": 1039, "key": { "parent": { "id": 1026 }, "child": { "id": 1027 } } }\n')),(0,r.mdx)("p",null,"(the ",(0,r.mdx)("inlineCode",{parentName:"p"},"*")," means \u201cderive and store\u201d the facts produced by the query. To derive facts for a production database you would use either ",(0,r.mdx)("inlineCode",{parentName:"p"},"glean derive")," from the command line, or the appropriate Thrift API in whatever language you\u2019re using to talk to the Glean server)."),(0,r.mdx)("p",null,"Now we have 3 facts of our derived predicate:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},"derived> :stat\nexample.Child.1\n  count: 3\n  size:  87 (87 bytes) 100.0000%\n")),(0,r.mdx)("p",null,"And finally we can make efficient queries to find a parent\u2019s children:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'derived> example.Child { parent = { name = "Pet" }}\n{ "id": 1037, "key": { "parent": { "id": 1024 }, "child": { "id": 1025 } } }\n{ "id": 1038, "key": { "parent": { "id": 1024 }, "child": { "id": 1026 } } }\n\n2 results, 2 facts, 0.41ms, 160992 bytes, 1013 compiled bytes\nFacts searched:\n                         example.Child.1 : 2\n                         example.Class.1 : 1\n')),(0,r.mdx)("p",null,"We found the correct 2 results, and only searched 2 ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Child")," facts."),(0,r.mdx)("p",null,"This idea of adding extra indices to your database using derived predicates is common practice when working with Glean data, so it\u2019s worthwhile getting familiar with it."),(0,r.mdx)("h2",{id:"the-order-of-statements-is-important"},"The order of statements is important"),(0,r.mdx)("p",null,"Suppose we want to find the grandparent of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Goldfish")," class using our example schema. We would probably write it like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'Q where\n    example.Parent { child = { name = "Goldfish" }, parent = P };\n    example.Parent { child = P, parent = Q }\n')),(0,r.mdx)("p",null,"Generally speaking the statements are matched top-to-bottom. For each of the facts that match the first statement, bind the variables in the pattern and then proceed with the second statement, and so on."),(0,r.mdx)("p",null,"As written, this query works by ",(0,r.mdx)("em",{parentName:"p"},"first")," finding the parent of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Goldfish")," and ",(0,r.mdx)("em",{parentName:"p"},"then")," finding its parent, which is exactly what we want. This query will be efficient, because both stages are matching on the first field of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," predicate."),(0,r.mdx)("p",null,"If instead we swapped the order of the statements:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-lang=angle"},'Q where\n    example.Parent { child = P, parent = Q };\n    example.Parent { child = { name = "Goldfish" }, parent = P }\n')),(0,r.mdx)("p",null,"The query still works, and means exactly the same thing, but it\u2019s much less efficient. This query works as follows:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"for each ",(0,r.mdx)("inlineCode",{parentName:"li"},"example.Parent")," fact, call the child ",(0,r.mdx)("inlineCode",{parentName:"li"},"P")," and the parent ",(0,r.mdx)("inlineCode",{parentName:"li"},"Q")),(0,r.mdx)("li",{parentName:"ul"},"search for an ",(0,r.mdx)("inlineCode",{parentName:"li"},"example.Parent")," fact with child ",(0,r.mdx)("inlineCode",{parentName:"li"},'{ name = "Goldfish" }')," and parent ",(0,r.mdx)("inlineCode",{parentName:"li"},"P")),(0,r.mdx)("li",{parentName:"ul"},"if it exists, then ",(0,r.mdx)("inlineCode",{parentName:"li"},"Q")," is a result")),(0,r.mdx)("p",null,"This is going to involve searching all of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent")," facts, instead of just the ones for the parent of ",(0,r.mdx)("inlineCode",{parentName:"p"},"Goldfish"),"."),(0,r.mdx)("p",null,"The general rule of thumb is to do the more specific searches first. The search for ",(0,r.mdx)("inlineCode",{parentName:"p"},'example.Parent { child = { name = "Goldfish" }, parent = P }')," is efficient because we know the ",(0,r.mdx)("inlineCode",{parentName:"p"},"child"),", this binds he value of ",(0,r.mdx)("inlineCode",{parentName:"p"},"P")," which makes the search for ",(0,r.mdx)("inlineCode",{parentName:"p"},"example.Parent { child = P, parent = Q }")," also fast."),(0,r.mdx)("hr",null))}p.isMDXComponent=!0},80510:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const r=t(88266);n.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},88266:function(e,n){var t=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,r=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=r++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),o={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,l),t}))}},70680:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const r=t(88266);n.reportContentCopied=function(e){return a(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield r.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return a(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield r.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(a){}}))}},14423:function(e,n,t){var a=this&&this.__createBinding||(Object.create?function(e,n,t,a){void 0===a&&(a=t),Object.defineProperty(e,a,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,a){void 0===a&&(a=t),e[a]=n[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return r(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(80510)),n.uidocs=i(t(3730)),n.feedback=i(t(70680)),n.inpageeditor=i(t(45458));const o=["internal","external"];function l(e){return c(e),s()?"internal"in e?d(e.internal):[]:"external"in e?d(e.external):[]}function d(e){return"function"==typeof e?e():e}function c(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function s(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function f(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=c,n.isInternal=s,n.hasEphemeralDiffNumber=function(){return Boolean(f())},n.getEphemeralDiffNumber=f,n.FbInternalOnly=function(e){return s()?e.children:null},n.OssOnly=function(e){return s()?null:e.children}},45458:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const r=t(88266);n.submitDiff=function(e){return a(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:a,diff_number:i}=e;try{return yield r.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:a,diff_number:i}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},3730:function(e,n,t){var a=this&&this.__awaiter||function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{d(a.next(e))}catch(n){i(n)}}function l(e){try{d(a.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((a=a.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const r=t(88266);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return a(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:a}=e;return yield r.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:a}})}))}}}]);