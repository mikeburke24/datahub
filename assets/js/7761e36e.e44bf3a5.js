"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82281],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),g=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=g(a),c=r,y=p["".concat(l,".").concat(c)]||p[c]||d[c]||o;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var g=2;g<o;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},98092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>g,toc:()=>p});a(96540);var n=a(15680);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"Dagster Integration",slug:"/lineage/dagster",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/dagster.md"},l="Dagster Integration",g={unversionedId:"docs/lineage/dagster",id:"docs/lineage/dagster",title:"Dagster Integration",description:"DataHub supports the integration of",source:"@site/genDocs/docs/lineage/dagster.md",sourceDirName:"docs/lineage",slug:"/lineage/dagster",permalink:"/docs/lineage/dagster",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/dagster.md",tags:[],version:"current",frontMatter:{title:"Dagster Integration",slug:"/lineage/dagster",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/lineage/dagster.md"},sidebar:"overviewSidebar",previous:{title:"Airflow Integration",permalink:"/docs/lineage/airflow"},next:{title:"OpenLineage",permalink:"/docs/lineage/openlineage"}},u={},p=[{value:"Using Datahub&#39;s Dagster Sensor",id:"using-datahubs-dagster-sensor",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup",id:"setup",level:3},{value:"How to validate installation",id:"how-to-validate-installation",level:3},{value:"Dagster Ins and Out",id:"dagster-ins-and-out",level:2},{value:"Define your custom logic to capture asset lineage information",id:"define-your-custom-logic-to-capture-asset-lineage-information",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Connection error for Datahub Rest URL",id:"connection-error-for-datahub-rest-url",level:3}],d={toc:p},c="wrapper";function y(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(c,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"dagster-integration"},"Dagster Integration"),(0,n.yg)("p",null,"DataHub supports the integration of"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Dagster Pipeline metadata"),(0,n.yg)("li",{parentName:"ul"},"Job and Op run information as well as"),(0,n.yg)("li",{parentName:"ul"},"Lineage information when present")),(0,n.yg)("h2",{id:"using-datahubs-dagster-sensor"},"Using Datahub's Dagster Sensor"),(0,n.yg)("p",null,"Dagster sensors allow us to perform some actions based on some state change. Datahub's defined dagster sensor will emit metadata after every dagster pipeline run execution. This sensor is able to emit both pipeline success as well as failures. For more details about Dagster sensors please refer ",(0,n.yg)("a",{parentName:"p",href:"https://docs.dagster.io/concepts/partitions-schedules-sensors/sensors"},"Sensors"),"."),(0,n.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"You need to create a new dagster project. See ",(0,n.yg)("a",{parentName:"li",href:"https://docs.dagster.io/getting-started/create-new-project"},"https://docs.dagster.io/getting-started/create-new-project"),"."),(0,n.yg)("li",{parentName:"ol"},"There are two ways to define Dagster definition before starting dagster UI. One using ",(0,n.yg)("a",{parentName:"li",href:"https://docs.dagster.io/_apidocs/definitions#dagster.Definitions"},"Definitions")," class (recommended) and second using ",(0,n.yg)("a",{parentName:"li",href:"https://docs.dagster.io/concepts/repositories-workspaces/repositories#repositories"},"Repositories"),"."),(0,n.yg)("li",{parentName:"ol"},"Creation of new dagster project by default uses Definition class to define Dagster definition.")),(0,n.yg)("h3",{id:"setup"},"Setup"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"You need to install the required dependency.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip install acryl_datahub_dagster_plugin\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"You need to import DataHub dagster plugin provided sensor definition and add it in Dagster definition or dagster repository before starting dagster UI as show below:\n",(0,n.yg)("strong",{parentName:"li"},"Using Definitions class:"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'from dagster import Definitions\nfrom datahub.ingestion.graph.client import DatahubClientConfig\n\nfrom datahub_dagster_plugin.sensors.datahub_sensors import (\n    DatahubDagsterSourceConfig,\n    make_datahub_sensor,\n)\n\nconfig = DatahubDagsterSourceConfig(\n    datahub_client_config=DatahubClientConfig(\n        server="https://your_datahub_url/gms", token="your_datahub_token"\n    ),\n    dagster_url="https://my-dagster-cloud.dagster.cloud",\n)\n\ndatahub_sensor = make_datahub_sensor(config=config)\n\ndefs = Definitions(\n    sensors=[datahub_sensor],\n)\n\n')),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The DataHub dagster plugin provided sensor internally uses below configs. You can set these configs using environment variables. If not set, the sensor will take the default value."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Configuration options:")),(0,n.yg)("table",{parentName:"li"},(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Configuration Option"),(0,n.yg)("th",{parentName:"tr",align:null},"Default value"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"datahub_client_config"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"The DataHub client config")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"dagster_url"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"The url to your Dagster Webserver.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"capture_asset_materialization"),(0,n.yg)("td",{parentName:"tr",align:null},"True"),(0,n.yg)("td",{parentName:"tr",align:null},"Whether to capture asset keys as Dataset on AssetMaterialization event")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"capture_input_output"),(0,n.yg)("td",{parentName:"tr",align:null},"True"),(0,n.yg)("td",{parentName:"tr",align:null},"Whether to capture and try to parse input and output from HANDLED_OUTPUT,.LOADED_INPUT events. (currently only ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/dagster-io/dagster/blob/7e08c05dcecef9fd07f887c7846bd1c9a90e7d84/python_modules/dagster/dagster/_core/definitions/metadata/__init__.py#L655"},"PathMetadataValue")," metadata supported (EXPERIMENTAL)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"platform_instance"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"The instance of the platform that all assets produced by this recipe belong to. It is optional")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"asset_lineage_extractor"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"You can implement your own logic to capture asset lineage information. See example for details[]"))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Once Dagster UI is up, you need to turn on the provided sensor execution. To turn on the sensor, click on Overview tab and then on Sensors tab. You will see a toggle button in front of all defined sensors to turn it on/off.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"DataHub dagster plugin provided sensor is ready to emit metadata after every dagster pipeline run execution."))),(0,n.yg)("h3",{id:"how-to-validate-installation"},"How to validate installation"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Go and check in Dagster UI at Overview -> Sensors menu if you can see the 'datahub_sensor'."),(0,n.yg)("li",{parentName:"ol"},"Run a Dagster Job. In the dagster daemon logs, you should see DataHub related log messages like:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"datahub_sensor - Emitting metadata...\n")),(0,n.yg)("h2",{id:"dagster-ins-and-out"},"Dagster Ins and Out"),(0,n.yg)("p",null,"We can provide inputs and outputs to both assets and ops explicitly using a dictionary of ",(0,n.yg)("inlineCode",{parentName:"p"},"Ins")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"Out")," corresponding to the decorated function arguments. While providing inputs and outputs explicitly we can provide metadata as well.\nTo create dataset upstream and downstream dependency for the assets and ops you can use an ins and out dictionary with metadata provided. For reference, look at the sample jobs created using assets ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion-modules/dagster-plugin/examples/assets_job.py"},(0,n.yg)("inlineCode",{parentName:"a"},"assets_job.py")),", or ops ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion-modules/dagster-plugin/examples/ops_job.py"},(0,n.yg)("inlineCode",{parentName:"a"},"ops_job.py")),"."),(0,n.yg)("h2",{id:"define-your-custom-logic-to-capture-asset-lineage-information"},"Define your custom logic to capture asset lineage information"),(0,n.yg)("p",null,"You can define your own logic to capture asset lineage information. "),(0,n.yg)("p",null,"The output Tuple contains two dictionaries, one for input assets and the other for output assets. The key of the dictionary is the op key and the value is the set of asset urns that are upstream or downstream of the op."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"from datahub_dagster_plugin.client.dagster_generator import DagsterGenerator, DatasetLineage\n\ndef asset_lineage_extractor(\n    context: RunStatusSensorContext,\n    dagster_generator: DagsterGenerator,\n    graph: DataHubGraph,\n) -> Dict[str, DatasetLineage]:\n   dataset_lineage: Dict[str, DatasetLineage] = {}\n\n    # Extracting input and output assets from the context\n    return dataset_lineage\n")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion-modules/dagster-plugin/examples/advanced_ops_jobs.py"},"See example job here"),"."),(0,n.yg)("h2",{id:"debugging"},"Debugging"),(0,n.yg)("h3",{id:"connection-error-for-datahub-rest-url"},"Connection error for Datahub Rest URL"),(0,n.yg)("p",null,"If you get ConnectionError: HTTPConnectionPool(host='localhost', port=8080), then in that case your DataHub GMS service is not up."))}y.isMDXComponent=!0}}]);