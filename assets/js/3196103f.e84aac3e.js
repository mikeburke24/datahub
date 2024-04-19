"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[83406],{15680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>d});var n=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var g=n.createContext({}),u=function(e){var t=n.useContext(g),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(g.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(i),p=r,d=l["".concat(g,".").concat(p)]||l[p]||y[p]||a;return i?n.createElement(d,o(o({ref:t},c),{},{components:i})):n.createElement(d,o({ref:t},c))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=p;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},83858:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>g,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>l});i(96540);var n=i(15680);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}const s={title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/bigquery/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/configuration.md"},g="Configuring Your BigQuery Connector to DataHub",u={unversionedId:"docs/quick-ingestion-guides/bigquery/configuration",id:"docs/quick-ingestion-guides/bigquery/configuration",title:"Configuration",description:"Now that you have created a Service Account and Service Account Key in BigQuery in the prior step, it's now time to set up a connection via the DataHub UI.",source:"@site/genDocs/docs/quick-ingestion-guides/bigquery/configuration.md",sourceDirName:"docs/quick-ingestion-guides/bigquery",slug:"/quick-ingestion-guides/bigquery/configuration",permalink:"/docs/quick-ingestion-guides/bigquery/configuration",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/bigquery/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/configuration.md"},sidebar:"overviewSidebar",previous:{title:"Setup",permalink:"/docs/quick-ingestion-guides/bigquery/setup"},next:{title:"Overview",permalink:"/docs/quick-ingestion-guides/redshift/overview"}},c={},l=[{value:"Configure Secrets",id:"configure-secrets",level:2},{value:"Configure Recipe",id:"configure-recipe",level:2},{value:"Schedule Execution",id:"schedule-execution",level:2},{value:"Finish Up",id:"finish-up",level:2},{value:"Validate Ingestion Runs",id:"validate-ingestion-runs",level:2}],y={toc:l},p="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.yg)(p,a(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){r(e,t,i[t])}))}return e}({},y,i),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"configuring-your-bigquery-connector-to-datahub"},"Configuring Your BigQuery Connector to DataHub"),(0,n.yg)("p",null,"Now that you have created a Service Account and Service Account Key in BigQuery in ",(0,n.yg)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/bigquery/setup"},"the prior step"),", it's now time to set up a connection via the DataHub UI."),(0,n.yg)("h2",{id:"configure-secrets"},"Configure Secrets"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Within DataHub, navigate to the ",(0,n.yg)("strong",{parentName:"li"},"Ingestion")," tab in the top, right corner of your screen")),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:'Navigate to the "Ingestion Tab"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_ingestion_button.png"})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If you do not see the Ingestion tab, please contact your DataHub admin to grant you the correct permissions")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Navigate to the ",(0,n.yg)("strong",{parentName:"li"},"Secrets")," tab and click ",(0,n.yg)("strong",{parentName:"li"},"Create new secret"))),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"Secrets Tab",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_secrets_tab.png"})),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Create a Private Key secret")),(0,n.yg)("p",null,"This will securely store your BigQuery Service Account Private Key within DataHub"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Enter a name like ",(0,n.yg)("inlineCode",{parentName:"li"},"BIGQUERY_PRIVATE_KEY")," - we will use this later to refer to the secret"),(0,n.yg)("li",{parentName:"ul"},"Copy and paste the ",(0,n.yg)("inlineCode",{parentName:"li"},"private_key")," value from your Service Account Key"),(0,n.yg)("li",{parentName:"ul"},"Optionally add a description"),(0,n.yg)("li",{parentName:"ul"},"Click ",(0,n.yg)("strong",{parentName:"li"},"Create"))),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"Private Key Secret",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_private_key_secret.png"})),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Create a Private Key ID secret")),(0,n.yg)("p",null,"This will securely store your BigQuery Service Account Private Key ID within DataHub"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Click ",(0,n.yg)("strong",{parentName:"li"},"Create new secret")," again"),(0,n.yg)("li",{parentName:"ul"},"Enter a name like ",(0,n.yg)("inlineCode",{parentName:"li"},"BIGQUERY_PRIVATE_KEY_ID")," - we will use this later to refer to the secret"),(0,n.yg)("li",{parentName:"ul"},"Copy and paste the ",(0,n.yg)("inlineCode",{parentName:"li"},"private_key_id")," value from your Service Account Key"),(0,n.yg)("li",{parentName:"ul"},"Optionally add a description"),(0,n.yg)("li",{parentName:"ul"},"Click ",(0,n.yg)("strong",{parentName:"li"},"Create"))),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"Private Key Id Secret",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_private_key_id_secret.png"})),(0,n.yg)("h2",{id:"configure-recipe"},"Configure Recipe"),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"Navigate to the ",(0,n.yg)("strong",{parentName:"li"},"Sources")," tab and click ",(0,n.yg)("strong",{parentName:"li"},"Create new source"))),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:'Click "Create new source"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_click_create_new_source_button.png"})),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"Select BigQuery")),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"Select BigQuery from the options",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_bigquery_button.png"})),(0,n.yg)("ol",{start:7},(0,n.yg)("li",{parentName:"ol"},"Fill out the BigQuery Recipe")),(0,n.yg)("p",null,"You can find the following details in your Service Account Key file:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Project ID"),(0,n.yg)("li",{parentName:"ul"},"Client Email"),(0,n.yg)("li",{parentName:"ul"},"Client ID")),(0,n.yg)("p",null,"Populate the Secret Fields by selecting the Private Key and Private Key ID secrets you created in steps 3 and 4. "),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"Fill out the BigQuery Recipe",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery-ingestion-recipe.png"})),(0,n.yg)("ol",{start:8},(0,n.yg)("li",{parentName:"ol"},"Click ",(0,n.yg)("strong",{parentName:"li"},"Test Connection"))),(0,n.yg)("p",null,"This step will ensure you have configured your credentials accurately and confirm you have the required permissions to extract all relevant metadata."),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"Test BigQuery connection",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery-test-connection.png"})),(0,n.yg)("p",null,"After you have successfully tested your connection, click ",(0,n.yg)("strong",{parentName:"p"},"Next"),"."),(0,n.yg)("h2",{id:"schedule-execution"},"Schedule Execution"),(0,n.yg)("p",null,"Now it's time to schedule a recurring ingestion pipeline to regularly extract metadata from your BigQuery instance."),(0,n.yg)("ol",{start:9},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Decide how regularly you want this ingestion to run-- day, month, year, hour, minute, etc. Select from the dropdown"),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"schedule selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_scheduled_execution.png"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Ensure you've configured your correct timezone"),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"timezone_selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_timezone_selector.png"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click ",(0,n.yg)("strong",{parentName:"p"},"Next")," when you are done"))),(0,n.yg)("h2",{id:"finish-up"},"Finish Up"),(0,n.yg)("ol",{start:12},(0,n.yg)("li",{parentName:"ol"},"Name your ingestion source, then click ",(0,n.yg)("strong",{parentName:"li"},"Save and Run"),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"Name your ingestion",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_name_ingestion.png"})))),(0,n.yg)("p",null,"You will now find your new ingestion source running"),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"ingestion_running",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_running.png"})),(0,n.yg)("h2",{id:"validate-ingestion-runs"},"Validate Ingestion Runs"),(0,n.yg)("ol",{start:13},(0,n.yg)("li",{parentName:"ol"},"View the latest status of ingestion runs on the Ingestion page")),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"ingestion succeeded",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_succeeded.png"})),(0,n.yg)("ol",{start:14},(0,n.yg)("li",{parentName:"ol"},"Click the plus sign to expand the full list of historical runs and outcomes; click ",(0,n.yg)("strong",{parentName:"li"},"Details")," to see the outcomes of a specific run")),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"ingestion_details",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_details.png"})),(0,n.yg)("ol",{start:15},(0,n.yg)("li",{parentName:"ol"},"From the Ingestion Run Details page, pick ",(0,n.yg)("strong",{parentName:"li"},"View All")," to see which entities were ingested")),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_details_view_all.png"})),(0,n.yg)("ol",{start:16},(0,n.yg)("li",{parentName:"ol"},"Pick an entity from the list to manually validate if it contains the detail you expected  ")),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/bigquery/bigquery_ingestion_ingested_assets.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Congratulations!")," You've successfully set up BigQuery as an ingestion source for DataHub!"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.yg)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}d.isMDXComponent=!0}}]);