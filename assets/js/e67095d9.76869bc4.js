"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[89588],{15680:(e,t,o)=>{o.d(t,{xA:()=>l,yg:()=>m});var n=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(o),g=r,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return o?n.createElement(m,s(s({ref:t},l),{},{components:o})):n.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=g;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},26043:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});o(96540);var n=o(15680);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const a={title:"Using a Custom Ingestion Source",sidebar_label:"Using a Custom Ingestion Source",slug:"/how/add-custom-ingestion-source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-ingestion-source.md"},u="How to use a custom ingestion source without forking Datahub?",c={unversionedId:"docs/how/add-custom-ingestion-source",id:"version-0.13.0/docs/how/add-custom-ingestion-source",title:"Using a Custom Ingestion Source",description:"Adding a custom ingestion source is the easiest way to extend Datahubs ingestion framework to support source systems",source:"@site/versioned_docs/version-0.13.0/docs/how/add-custom-ingestion-source.md",sourceDirName:"docs/how",slug:"/how/add-custom-ingestion-source",permalink:"/docs/0.13.0/how/add-custom-ingestion-source",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-ingestion-source.md",tags:[],version:"0.13.0",frontMatter:{title:"Using a Custom Ingestion Source",sidebar_label:"Using a Custom Ingestion Source",slug:"/how/add-custom-ingestion-source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-custom-ingestion-source.md"},sidebar:"overviewSidebar",previous:{title:"Adding a Metadata Ingestion Source",permalink:"/docs/0.13.0/metadata-ingestion/adding-source"},next:{title:"Adding a custom Dataset Data Platform",permalink:"/docs/0.13.0/how/add-custom-data-platform"}},l={},d=[{value:"What you need to do",id:"what-you-need-to-do",level:2},{value:"How to use this source?",id:"how-to-use-this-source",level:3},{value:"Example code?",id:"example-code",level:3}],p={toc:d},g="wrapper";function m(e){var{components:t}=e,o=s(e,["components"]);return(0,n.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){r(e,t,o[t])}))}return e}({},p,o),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"how-to-use-a-custom-ingestion-source-without-forking-datahub"},"How to use a custom ingestion source without forking Datahub?"),(0,n.yg)("p",null,"Adding a custom ingestion source is the easiest way to extend Datahubs ingestion framework to support source systems\nwhich are not yet officially supported by Datahub."),(0,n.yg)("h2",{id:"what-you-need-to-do"},"What you need to do"),(0,n.yg)("p",null,"First thing to do is building a custom source like it is described in\nthe ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.0/metadata-ingestion/adding-source"},"metadata-ingestion source guide")," in your own project."),(0,n.yg)("h3",{id:"how-to-use-this-source"},"How to use this source?"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.0/ui-ingestion"},"UI Based Ingestion")," currently does not support custom ingestion sources.")),(0,n.yg)("p",null,"To be able to use this source you just need to do a few things."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Build a python package out of your project including the custom source class."),(0,n.yg)("li",{parentName:"ol"},"Install this package in your working environment where you are using the Datahub CLI to ingest metadata.")),(0,n.yg)("p",null,"Now you are able to just reference your ingestion source class as a type in the YAML recipe by using the fully qualified\npackage name. For example if your project structure looks like this ",(0,n.yg)("inlineCode",{parentName:"p"},"<project>/src/my-source/custom_ingestion_source.py"),"\nwith the custom source class named ",(0,n.yg)("inlineCode",{parentName:"p"},"MySourceClass")," your YAML recipe would look like the following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: my-source.custom_ingestion_source.MySourceClass\n  config:\n  # place for your custom config defined in the configModel\n")),(0,n.yg)("p",null,"If you now execute the ingestion the datahub client will pick up your code and call the ",(0,n.yg)("inlineCode",{parentName:"p"},"get_workunits")," method and do\nthe rest for you. That's it."),(0,n.yg)("h3",{id:"example-code"},"Example code?"),(0,n.yg)("p",null,"For examples how this setup could look like and a good starting point for building your first custom source visit\nour ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/acryldata/meta-world"},"meta-world")," example repository."))}m.isMDXComponent=!0}}]);