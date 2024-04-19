"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[75285],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,y=u["".concat(c,".").concat(b)]||u[b]||d[b]||s;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},68162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(96540);var n=r(15680);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Get ElasticSearch Task Status Endpoint",slug:"/api/restli/get-elastic-task-status",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-elastic-task-status.md"},c="Get ElasticSearch Task Status Endpoint",p={unversionedId:"docs/api/restli/get-elastic-task-status",id:"docs/api/restli/get-elastic-task-status",title:"Get ElasticSearch Task Status Endpoint",description:"You can do a HTTP POST request to /gms/operations?action=getEsTaskStatus endpoint to see the status of the input task running in ElasticSearch. For example, the task ID given by the truncateTimeseriesAspect endpoint. The task ID can be passed in as a string with node name and task ID separated by a colon (as is output by the previous API), or the node name and task ID parameters separately.",source:"@site/genDocs/docs/api/restli/get-elastic-task-status.md",sourceDirName:"docs/api/restli",slug:"/api/restli/get-elastic-task-status",permalink:"/docs/api/restli/get-elastic-task-status",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-elastic-task-status.md",tags:[],version:"current",frontMatter:{title:"Get ElasticSearch Task Status Endpoint",slug:"/api/restli/get-elastic-task-status",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-elastic-task-status.md"},sidebar:"overviewSidebar",previous:{title:"Truncate Timeseries Index Endpoint",permalink:"/docs/api/restli/truncate-time-series-aspect"},next:{title:"Evaluate Tests Endpoint",permalink:"/docs/api/restli/evaluate-tests"}},l={},u=[],d={toc:u},b="wrapper";function y(e){var{components:t}=e,r=o(e,["components"]);return(0,n.yg)(b,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"get-elasticsearch-task-status-endpoint"},"Get ElasticSearch Task Status Endpoint"),(0,n.yg)("p",null,"You can do a HTTP POST request to ",(0,n.yg)("inlineCode",{parentName:"p"},"/gms/operations?action=getEsTaskStatus")," endpoint to see the status of the input task running in ElasticSearch. For example, the task ID given by the ",(0,n.yg)("a",{parentName:"p",href:"/docs/api/restli/truncate-time-series-aspect"},(0,n.yg)("inlineCode",{parentName:"a"},"truncateTimeseriesAspect")," endpoint"),". The task ID can be passed in as a string with node name and task ID separated by a colon (as is output by the previous API), or the node name and task ID parameters separately."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"curl --location --request POST 'https://demo.datahubproject.io/api/gms/operations?action=getEsTaskStatus' \\\n--header 'Authorization: Bearer TOKEN'\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"task\": \"aB1cdEf2GHIJKLMnoPQr3S:123456\"\n}'\n\ncurl --location --request POST  http://localhost:8080/operations\\?action\\=getEsTaskStatus \\         \n--header 'Authorization: Bearer TOKEN'\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"nodeId\": \"aB1cdEf2GHIJKLMnoPQr3S\",\n    taskId: 12345\n}' \n")),(0,n.yg)("p",null,"The output will be a string representing a JSON object with the task status."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'{\n  "value": "{\\"error\\":\\"Could not get task status for XIAMx5WySACgg9XxBgaKmw:12587\\"}"\n}\n')),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'"{\n  "completed": true,\n  "taskId": "qhxGdzytQS-pQek8CwBCZg:54654",\n  "runTimeNanos": 1179458,\n  "status": "{\n    "total": 0,\n    "updated": 0,\n    "created": 0,\n    "deleted": 0,\n    "batches": 0,\n    "version_conflicts": 0,\n    "noops": 0,\n    "retries": {\n      "bulk": 0,\n      "search": 0\n    },\n    "throttled_millis": 0,\n    "requests_per_second": -1.0,\n    "throttled_until_millis": 0\n  }\n}\n')))}y.isMDXComponent=!0}}]);