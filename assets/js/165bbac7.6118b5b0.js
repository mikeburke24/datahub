"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[62462],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(a),m=n,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>l});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={title:"Ingestion Framework",sidebar_label:"Ingestion Framework",slug:"/architecture/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/metadata-ingestion.md"},c="Metadata Ingestion Architecture",u={unversionedId:"docs/architecture/metadata-ingestion",id:"version-0.13.1/docs/architecture/metadata-ingestion",title:"Ingestion Framework",description:"DataHub supports an extremely flexible ingestion architecture that can support push, pull, asynchronous and synchronous models.",source:"@site/versioned_docs/version-0.13.1/docs/architecture/metadata-ingestion.md",sourceDirName:"docs/architecture",slug:"/architecture/metadata-ingestion",permalink:"/docs/0.13.1/architecture/metadata-ingestion",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/metadata-ingestion.md",tags:[],version:"0.13.1",frontMatter:{title:"Ingestion Framework",sidebar_label:"Ingestion Framework",slug:"/architecture/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/metadata-ingestion.md"},sidebar:"overviewSidebar",previous:{title:"Components",permalink:"/docs/0.13.1/components"},next:{title:"Serving Tier",permalink:"/docs/0.13.1/architecture/metadata-serving"}},p={},l=[{value:"Metadata Change Proposal: The Center Piece",id:"metadata-change-proposal-the-center-piece",level:2},{value:"Pull-based Integration",id:"pull-based-integration",level:2},{value:"Push-based Integration",id:"push-based-integration",level:2},{value:"Internal Components",id:"internal-components",level:2},{value:"Applying Metadata Change Proposals to DataHub Metadata Service (mce-consumer-job)",id:"applying-metadata-change-proposals-to-datahub-metadata-service-mce-consumer-job",level:3}],d={toc:l},m="wrapper";function g(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"metadata-ingestion-architecture"},"Metadata Ingestion Architecture"),(0,r.yg)("p",null,"DataHub supports an extremely flexible ingestion architecture that can support push, pull, asynchronous and synchronous models.\nThe figure below describes all the options possible for connecting your favorite system to DataHub. "),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/ingestion-architecture.png"})),(0,r.yg)("h2",{id:"metadata-change-proposal-the-center-piece"},"Metadata Change Proposal: The Center Piece"),(0,r.yg)("p",null,"The center piece for ingestion are ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/what/mxe#metadata-change-proposal-mcp"},"Metadata Change Proposal"),"s which represent requests to make a metadata change to an organization's Metadata Graph.\nMetadata Change Proposals can be sent over Kafka, for highly scalable async publishing from source systems. They can also be sent directly to the HTTP endpoint exposed by the DataHub service tier to get synchronous success / failure responses. "),(0,r.yg)("h2",{id:"pull-based-integration"},"Pull-based Integration"),(0,r.yg)("p",null,"DataHub ships with a Python based ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/metadata-ingestion"},"metadata-ingestion system")," that can connect to different sources to pull metadata from them. This metadata is then pushed via Kafka or HTTP to the DataHub storage tier. Metadata ingestion pipelines can be ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/metadata-ingestion#lineage-with-airflow"},"integrated with Airflow")," to set up scheduled ingestion or capture lineage. If you don't find a source already supported, it is very easy to ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/metadata-ingestion#contributing"},"write your own"),"."),(0,r.yg)("h2",{id:"push-based-integration"},"Push-based Integration"),(0,r.yg)("p",null,"As long as you can emit a ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/what/mxe#metadata-change-proposal-mcp"},"Metadata Change Proposal (MCP)")," event to Kafka or make a REST call over HTTP, you can integrate any system with DataHub. For convenience, DataHub also provides simple ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/metadata-ingestion#using-as-a-library"},"Python emitters")," for you to integrate into your systems to emit metadata changes (MCP-s) at the point of origin."),(0,r.yg)("h2",{id:"internal-components"},"Internal Components"),(0,r.yg)("h3",{id:"applying-metadata-change-proposals-to-datahub-metadata-service-mce-consumer-job"},"Applying Metadata Change Proposals to DataHub Metadata Service (mce-consumer-job)"),(0,r.yg)("p",null,"DataHub comes with a Spring job, ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mce-consumer-job"},"mce-consumer-job"),", which consumes the Metadata Change Proposals and writes them into the DataHub Metadata Service (datahub-gms) using the ",(0,r.yg)("inlineCode",{parentName:"p"},"/ingest")," endpoint. "))}g.isMDXComponent=!0}}]);