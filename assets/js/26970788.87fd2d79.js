"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[68808],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),c=l,g=p["".concat(s,".").concat(c)]||p[c]||h[c]||i;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},55388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>p});a(96540);var n=a(15680);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const o={title:"Removing Metadata from DataHub",slug:"/how/delete-metadata",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/delete-metadata.md"},s="Removing Metadata from DataHub",d={unversionedId:"docs/how/delete-metadata",id:"docs/how/delete-metadata",title:"Removing Metadata from DataHub",description:"To follow this guide, you'll need the DataHub CLI.",source:"@site/genDocs/docs/how/delete-metadata.md",sourceDirName:"docs/how",slug:"/how/delete-metadata",permalink:"/docs/how/delete-metadata",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/delete-metadata.md",tags:[],version:"current",frontMatter:{title:"Removing Metadata from DataHub",slug:"/how/delete-metadata",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/delete-metadata.md"},sidebar:"overviewSidebar",previous:{title:"Authorization using Groups",permalink:"/docs/authorization/groups"},next:{title:"Configuring Authorization with Apache Ranger",permalink:"/docs/how/configuring-authorization-with-apache-ranger"}},u={},p=[{value:"Delete CLI Usage",id:"delete-cli-usage",level:2},{value:"Selecting entities to delete",id:"selecting-entities-to-delete",level:3},{value:"Performing the delete",id:"performing-the-delete",level:3},{value:"Soft delete an entity (default)",id:"soft-delete-an-entity-default",level:4},{value:"Hard delete an entity",id:"hard-delete-an-entity",level:4},{value:"Hard delete a timeseries aspect",id:"hard-delete-a-timeseries-aspect",level:4},{value:"Delete CLI Examples",id:"delete-cli-examples",level:2},{value:"Soft delete a single entity",id:"soft-delete-a-single-entity",level:4},{value:"Hard delete a single entity",id:"hard-delete-a-single-entity",level:4},{value:"Delete everything from the Snowflake DEV environment",id:"delete-everything-from-the-snowflake-dev-environment",level:4},{value:"Delete everything within a specific Snowflake DB",id:"delete-everything-within-a-specific-snowflake-db",level:4},{value:"Delete all BigQuery datasets in the PROD environment",id:"delete-all-bigquery-datasets-in-the-prod-environment",level:4},{value:"Delete everything within a MySQL platform instance",id:"delete-everything-within-a-mysql-platform-instance",level:4},{value:"Delete all pipelines and tasks from Airflow",id:"delete-all-pipelines-and-tasks-from-airflow",level:4},{value:"Delete all containers for a particular platform",id:"delete-all-containers-for-a-particular-platform",level:4},{value:"Delete everything in the DEV environment",id:"delete-everything-in-the-dev-environment",level:4},{value:"Delete all Looker dashboards and charts",id:"delete-all-looker-dashboards-and-charts",level:4},{value:"Delete all Looker charts (but not dashboards)",id:"delete-all-looker-charts-but-not-dashboards",level:4},{value:"Clean up old datasetProfiles",id:"clean-up-old-datasetprofiles",level:4},{value:"Delete a tag",id:"delete-a-tag",level:4},{value:"Delete all datasets that match a query",id:"delete-all-datasets-that-match-a-query",level:4},{value:"Hard delete everything in Snowflake that was previously soft deleted",id:"hard-delete-everything-in-snowflake-that-was-previously-soft-deleted",level:4},{value:"Deletes using the SDK and APIs",id:"deletes-using-the-sdk-and-apis",level:2},{value:"Rollback Ingestion Run",id:"rollback-ingestion-run",level:2},{value:"Unsafe Entities and Rollback",id:"unsafe-entities-and-rollback",level:3}],h={toc:p},c="wrapper";function g(e){var{components:t}=e,a=r(e,["components"]);return(0,n.yg)(c,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"removing-metadata-from-datahub"},"Removing Metadata from DataHub"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"To follow this guide, you'll need the ",(0,n.yg)("a",{parentName:"p",href:"/docs/cli"},"DataHub CLI"),".")),(0,n.yg)("p",null,"There are a two ways to delete metadata from DataHub:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Delete metadata attached to entities by providing a specific urn or filters that identify a set of urns (delete CLI)."),(0,n.yg)("li",{parentName:"ol"},"Delete metadata created by a single ingestion run (rollback).")),(0,n.yg)("admonition",{title:"Be careful when deleting metadata",type:"caution"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Always use ",(0,n.yg)("inlineCode",{parentName:"li"},"--dry-run")," to test your delete command before executing it."),(0,n.yg)("li",{parentName:"ul"},"Prefer reversible soft deletes (",(0,n.yg)("inlineCode",{parentName:"li"},"--soft"),") over irreversible hard deletes (",(0,n.yg)("inlineCode",{parentName:"li"},"--hard"),")."))),(0,n.yg)("h2",{id:"delete-cli-usage"},"Delete CLI Usage"),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Deleting metadata using DataHub's CLI is a simple, systems-level action. If you attempt to delete an entity with children, such as a container, it will not delete those children. Instead, you will need to delete each child by URN in addition to deleting the parent.")),(0,n.yg)("p",null,"All the commands below support the following options:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"-n/--dry-run"),": Execute a dry run instead of the actual delete."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"--force"),": Skip confirmation prompts.")),(0,n.yg)("h3",{id:"selecting-entities-to-delete"},"Selecting entities to delete"),(0,n.yg)("p",null,"You can either provide a single urn to delete, or use filters to select a set of entities to delete."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'# Soft delete a single urn.\ndatahub delete --urn "<my urn>"\n\n# Soft delete using a filter.\ndatahub delete --platform snowflake\n\n# Filters can be combined, which will select entities that match all filters.\ndatahub delete --platform looker --entity-type chart\ndatahub delete --platform bigquery --env PROD\n\n# You can also do recursive deletes for container and dataPlatformInstance entities.\ndatahub delete --urn "urn:li:container:f76..." --recursive\n')),(0,n.yg)("p",null,"When performing hard deletes, you can optionally add the ",(0,n.yg)("inlineCode",{parentName:"p"},"--only-soft-deleted")," flag to only hard delete entities that were previously soft deleted."),(0,n.yg)("h3",{id:"performing-the-delete"},"Performing the delete"),(0,n.yg)("h4",{id:"soft-delete-an-entity-default"},"Soft delete an entity (default)"),(0,n.yg)("p",null,"By default, the delete command will perform a soft delete."),(0,n.yg)("p",null,"This will set the ",(0,n.yg)("inlineCode",{parentName:"p"},"status")," aspect's ",(0,n.yg)("inlineCode",{parentName:"p"},"removed")," field to ",(0,n.yg)("inlineCode",{parentName:"p"},"true"),", which will hide the entity from the UI. However, you'll still be able to view the entity's metadata in the UI with a direct link."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'# The `--soft` flag is redundant since it\'s the default.\ndatahub delete --urn "<urn>" --soft\n# or using a filter\ndatahub delete --platform snowflake --soft\n')),(0,n.yg)("h4",{id:"hard-delete-an-entity"},"Hard delete an entity"),(0,n.yg)("p",null,"This will physically delete all rows for all aspects of the entity. This action cannot be undone, so execute this only after you are sure you want to delete all data associated with this entity."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'datahub delete --urn "<my urn>" --hard\n# or using a filter\ndatahub delete --platform snowflake --hard\n')),(0,n.yg)("p",null,"As of datahub v0.10.2.3, hard deleting tags, glossary terms, users, and groups will also remove references to those entities across the metadata graph."),(0,n.yg)("h4",{id:"hard-delete-a-timeseries-aspect"},"Hard delete a timeseries aspect"),(0,n.yg)("p",null,"It's also possible to delete a range of timeseries aspect data for an entity without deleting the entire entity."),(0,n.yg)("p",null,"For these deletes, the aspect and time ranges are required. You can delete all data for a timeseries aspect by providing ",(0,n.yg)("inlineCode",{parentName:"p"},"--start-time min --end-time max"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub delete --urn \"<my urn>\" --aspect <aspect name> --start-time '-30 days' --end-time '-7 days'\n# or using a filter\ndatahub delete --platform snowflake --entity-type dataset --aspect datasetProfile --start-time '0' --end-time '2023-01-01'\n")),(0,n.yg)("p",null,"The start and end time fields filter on the ",(0,n.yg)("inlineCode",{parentName:"p"},"timestampMillis")," field of the timeseries aspect. Allowed start and end times formats:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),": a specific date"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"YYYY-MM-DD HH:mm:ss"),": a specific timestamp, assumed to be in UTC unless otherwise specified"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"+/-<number> <unit>")," (e.g. ",(0,n.yg)("inlineCode",{parentName:"li"},"-7 days"),"): a relative time, where ",(0,n.yg)("inlineCode",{parentName:"li"},"<number>")," is an integer and ",(0,n.yg)("inlineCode",{parentName:"li"},"<unit>")," is one of ",(0,n.yg)("inlineCode",{parentName:"li"},"days"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"hours"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"minutes"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"seconds")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"ddddddddd")," (e.g. ",(0,n.yg)("inlineCode",{parentName:"li"},"1684384045"),"): a unix timestamp"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"min"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"max"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"now"),": special keywords")),(0,n.yg)("h2",{id:"delete-cli-examples"},"Delete CLI Examples"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Make sure you surround your urn with quotes! If you do not include the quotes, your terminal may misinterpret the command.")),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Note: All of the commands below support ",(0,n.yg)("inlineCode",{parentName:"em"},"--dry-run")," and ",(0,n.yg)("inlineCode",{parentName:"em"},"--force")," (skips confirmation prompts).")),(0,n.yg)("h4",{id:"soft-delete-a-single-entity"},"Soft delete a single entity"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'datahub delete --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)"\n')),(0,n.yg)("h4",{id:"hard-delete-a-single-entity"},"Hard delete a single entity"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'datahub delete --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)" --hard\n')),(0,n.yg)("h4",{id:"delete-everything-from-the-snowflake-dev-environment"},"Delete everything from the Snowflake DEV environment"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub delete --platform snowflake --env DEV\n")),(0,n.yg)("h4",{id:"delete-everything-within-a-specific-snowflake-db"},"Delete everything within a specific Snowflake DB"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'# You can find your container urn by navigating to the relevant\n# DB in the DataHub UI and clicking the "copy urn" button.\ndatahub delete --urn "urn:li:container:77644901c4f574845578ebd18b7c14fa" --recursive\n')),(0,n.yg)("h4",{id:"delete-all-bigquery-datasets-in-the-prod-environment"},"Delete all BigQuery datasets in the PROD environment"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"# Note: this will leave BigQuery containers intact.\ndatahub delete --env PROD --entity-type dataset --platform bigquery\n")),(0,n.yg)("h4",{id:"delete-everything-within-a-mysql-platform-instance"},"Delete everything within a MySQL platform instance"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"# The instance name comes from the `platform_instance` config option in the ingestion recipe.\ndatahub delete --urn 'urn:li:dataPlatformInstance:(urn:li:dataPlatform:mysql,my_instance_name)' --recursive\n")),(0,n.yg)("h4",{id:"delete-all-pipelines-and-tasks-from-airflow"},"Delete all pipelines and tasks from Airflow"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'datahub delete --platform "airflow"\n')),(0,n.yg)("h4",{id:"delete-all-containers-for-a-particular-platform"},"Delete all containers for a particular platform"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"# Note: this will leave S3 datasets intact.\ndatahub delete --entity-type container --platform s3\n")),(0,n.yg)("h4",{id:"delete-everything-in-the-dev-environment"},"Delete everything in the DEV environment"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"# This is a pretty broad filter, so make sure you know what you're doing!\ndatahub delete --env DEV\n")),(0,n.yg)("h4",{id:"delete-all-looker-dashboards-and-charts"},"Delete all Looker dashboards and charts"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub delete --platform looker\n")),(0,n.yg)("h4",{id:"delete-all-looker-charts-but-not-dashboards"},"Delete all Looker charts (but not dashboards)"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub delete --platform looker --entity-type chart\n")),(0,n.yg)("h4",{id:"clean-up-old-datasetprofiles"},"Clean up old datasetProfiles"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub delete --entity-type dataset --aspect datasetProfile --start-time 'min' --end-time '-60 days'\n")),(0,n.yg)("h4",{id:"delete-a-tag"},"Delete a tag"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"# Soft delete.\ndatahub delete --urn 'urn:li:tag:Legacy' --soft\n\n# Or, using a hard delete. This will automatically clean up all tag associations.\ndatahub delete --urn 'urn:li:tag:Legacy' --hard\n")),(0,n.yg)("h4",{id:"delete-all-datasets-that-match-a-query"},"Delete all datasets that match a query"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'# Note: the query is an advanced feature, but can sometimes select extra entities - use it with caution!\ndatahub delete --entity-type dataset --query "_tmp"\n')),(0,n.yg)("h4",{id:"hard-delete-everything-in-snowflake-that-was-previously-soft-deleted"},"Hard delete everything in Snowflake that was previously soft deleted"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub delete --platform snowflake --only-soft-deleted --hard\n")),(0,n.yg)("h2",{id:"deletes-using-the-sdk-and-apis"},"Deletes using the SDK and APIs"),(0,n.yg)("p",null,"The Python SDK's ",(0,n.yg)("a",{parentName:"p",href:"/docs/python-sdk/clients"},"DataHubGraph")," client supports deletes via the following methods:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"soft_delete_entity")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"hard_delete_entity")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"hard_delete_timeseries_aspect"))),(0,n.yg)("p",null,"Deletes via the REST API are also possible, although we recommend using the SDK instead."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'# hard delete an entity by urn\ncurl "http://localhost:8080/entities?action=delete" -X POST --data \'{"urn": "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)"}\'\n')),(0,n.yg)("h2",{id:"rollback-ingestion-run"},"Rollback Ingestion Run"),(0,n.yg)("p",null,"The second way to delete metadata is to identify entities (and the aspects affected) by using an ingestion ",(0,n.yg)("inlineCode",{parentName:"p"},"run-id"),". Whenever you run ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub ingest -c ..."),", all the metadata ingested with that run will have the same run id."),(0,n.yg)("p",null,"To view the ids of the most recent set of ingestion batches, execute"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub ingest list-runs\n")),(0,n.yg)("p",null,"That will print out a table of all the runs. Once you have an idea of which run you want to roll back, run"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub ingest show --run-id <run-id>\n")),(0,n.yg)("p",null,"to see more info of the run."),(0,n.yg)("p",null,"Alternately, you can execute a dry-run rollback to achieve the same outcome."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub ingest rollback --dry-run --run-id <run-id>\n")),(0,n.yg)("p",null,"Finally, once you are sure you want to delete this data forever, run"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"datahub ingest rollback --run-id <run-id>\n")),(0,n.yg)("p",null,"to rollback all aspects added with this run and all entities created by this run.\nThis deletes both the versioned and the timeseries aspects associated with these entities."),(0,n.yg)("h3",{id:"unsafe-entities-and-rollback"},"Unsafe Entities and Rollback"),(0,n.yg)("p",null,'In some cases, entities that were initially ingested by a run might have had further modifications to their metadata (e.g. adding terms, tags, or documentation) through the UI or other means. During a roll back of the ingestion that initially created these entities (technically, if the key aspect for these entities are being rolled back), the ingestion process will analyse the metadata graph for aspects that will be left "dangling" and will:'),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Leave these aspects untouched in the database, and soft delete the entity. A re-ingestion of these entities will result in this additional metadata becoming visible again in the UI, so you don't lose any of your work."),(0,n.yg)("li",{parentName:"ol"},"The datahub cli will save information about these unsafe entities as a CSV for operators to later review and decide on next steps (keep or remove).")),(0,n.yg)("p",null,"The rollback command will report how many entities have such aspects and save as a CSV the urns of these entities under a rollback reports directory, which defaults to ",(0,n.yg)("inlineCode",{parentName:"p"},"rollback_reports")," under the current directory where the cli is run, and can be configured further using the ",(0,n.yg)("inlineCode",{parentName:"p"},"--reports-dir")," command line arg."),(0,n.yg)("p",null,"The operator can use ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub get --urn <>")," to inspect the aspects that were left behind and either keep them (do nothing) or delete the entity (and its aspects) completely using ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub delete --urn <urn> --hard"),". If the operator wishes to remove all the metadata associated with these unsafe entities, they can re-issue the rollback command with the ",(0,n.yg)("inlineCode",{parentName:"p"},"--nuke")," flag."))}g.isMDXComponent=!0}}]);