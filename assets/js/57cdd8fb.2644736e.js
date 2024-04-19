"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[51914],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>c});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={title:"Python Emitter",slug:"/metadata-ingestion/as-a-library",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/as-a-library.md"},l="Python Emitter",m={unversionedId:"metadata-ingestion/as-a-library",id:"version-0.13.1/metadata-ingestion/as-a-library",title:"Python Emitter",description:"In some cases, you might want to construct Metadata events directly and use programmatic ways to emit that metadata to DataHub. Use-cases are typically push-based and include emitting metadata events from CI/CD pipelines, custom orchestrators etc.",source:"@site/versioned_docs/version-0.13.1/metadata-ingestion/as-a-library.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/as-a-library",permalink:"/docs/0.13.1/metadata-ingestion/as-a-library",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/as-a-library.md",tags:[],version:"0.13.1",frontMatter:{title:"Python Emitter",slug:"/metadata-ingestion/as-a-library",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/as-a-library.md"},sidebar:"overviewSidebar",previous:{title:"Aspect Versioning",permalink:"/docs/0.13.1/advanced/aspect-versioning"},next:{title:"Builder",permalink:"/docs/0.13.1/python-sdk/builder"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"REST Emitter",id:"rest-emitter",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Emitter Code",id:"emitter-code",level:3},{value:"Kafka Emitter",id:"kafka-emitter",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Example Usage",id:"example-usage-1",level:3},{value:"Emitter Code",id:"emitter-code-1",level:3},{value:"Other Languages",id:"other-languages",level:2}],u={toc:c},d="wrapper";function g(e){var{components:t}=e,a=o(e,["components"]);return(0,r.yg)(d,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"python-emitter"},"Python Emitter"),(0,r.yg)("p",null,"In some cases, you might want to construct Metadata events directly and use programmatic ways to emit that metadata to DataHub. Use-cases are typically push-based and include emitting metadata events from CI/CD pipelines, custom orchestrators etc."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"acryl-datahub")," Python package offers REST and Kafka emitter API-s, which can easily be imported and called from your own code."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Pro Tip!")," Throughout our API guides, we have examples of using Python API SDK.\nLookout for the ",(0,r.yg)("inlineCode",{parentName:"p"},"| Python |")," tab within our tutorials.")),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Follow the installation guide for the main ",(0,r.yg)("inlineCode",{parentName:"p"},"acryl-datahub")," package ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/metadata-ingestion#install-from-pypi"},"here"),". Read on for emitter specific installation instructions."),(0,r.yg)("h2",{id:"rest-emitter"},"REST Emitter"),(0,r.yg)("p",null,"The REST emitter is a thin wrapper on top of the ",(0,r.yg)("inlineCode",{parentName:"p"},"requests")," module and offers a blocking interface for sending metadata events over HTTP. Use this when simplicity and acknowledgement of metadata being persisted to DataHub's metadata store is more important than throughput of metadata emission. Also use this when read-after-write scenarios exist, e.g. writing metadata and then immediately reading it back."),(0,r.yg)("h3",{id:"installation-1"},"Installation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"pip install -U `acryl-datahub[datahub-rest]`\n")),(0,r.yg)("h3",{id:"example-usage"},"Example Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'import datahub.emitter.mce_builder as builder\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.metadata.schema_classes import DatasetPropertiesClass\n\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Create an emitter to DataHub over REST\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080", extra_headers={})\n\n# For Acryl, you will want to point to your Acryl server\'s GMS endpoint\n# emitter = DatahubRestEmitter(gms_server="https://<your-domain>.acryl.io/gms", token="<your token>", extra_headers={})\n\n# Test the connection\nemitter.test_connection()\n\n# Construct a dataset properties object\ndataset_properties = DatasetPropertiesClass(description="This table stored the canonical User profile",\n    customProperties={\n         "governance": "ENABLED"\n    })\n\n# Construct a MetadataChangeProposalWrapper object.\nmetadata_event = MetadataChangeProposalWrapper(\n    entityUrn=builder.make_dataset_urn("bigquery", "my-project.my-dataset.user-table"),\n    aspect=dataset_properties,\n)\n\n# Emit metadata! This is a blocking call\nemitter.emit(metadata_event)\n')),(0,r.yg)("p",null,"Other examples:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_emitter_mcpw_rest.py"},"lineage_emitter_mcpw_rest.py")," - emits simple bigquery table-to-table (dataset-to-dataset) lineage via REST as MetadataChangeProposalWrapper.")),(0,r.yg)("h3",{id:"emitter-code"},"Emitter Code"),(0,r.yg)("p",null,"If you're interested in looking at the REST emitter code, it is available ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/emitter/rest_emitter.py"},"here")),(0,r.yg)("h2",{id:"kafka-emitter"},"Kafka Emitter"),(0,r.yg)("p",null,"The Kafka emitter is a thin wrapper on top of the SerializingProducer class from ",(0,r.yg)("inlineCode",{parentName:"p"},"confluent-kafka")," and offers a non-blocking interface for sending metadata events to DataHub. Use this when you want to decouple your metadata producer from the uptime of your datahub metadata server by utilizing Kafka as a highly available message bus. For example, if your DataHub metadata service is down due to planned or unplanned outages, you can still continue to collect metadata from your mission critical systems by sending it to Kafka. Also use this emitter when throughput of metadata emission is more important than acknowledgement of metadata being persisted to DataHub's backend store."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Note")),": The Kafka emitter uses Avro to serialize the Metadata events to Kafka. Changing the serializer will result in unprocessable events as DataHub currently expects the metadata events over Kafka to be serialized in Avro."),(0,r.yg)("h3",{id:"installation-2"},"Installation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"# For emission over Kafka\npip install -U `acryl-datahub[datahub-kafka]`\n")),(0,r.yg)("h3",{id:"example-usage-1"},"Example Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'import datahub.emitter.mce_builder as builder\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.metadata.schema_classes import DatasetPropertiesClass\n\nfrom datahub.emitter.kafka_emitter import DatahubKafkaEmitter, KafkaEmitterConfig\n# Create an emitter to Kafka\nkafka_config = {\n    "connection": {\n        "bootstrap": "localhost:9092",\n        "schema_registry_url": "http://localhost:8081",\n        "schema_registry_config": {}, # schema_registry configs passed to underlying schema registry client\n        "producer_config": {}, # extra producer configs passed to underlying kafka producer\n    }\n}\n\nemitter = DatahubKafkaEmitter(\n    KafkaEmitterConfig.parse_obj(kafka_config)\n)\n\n# Construct a dataset properties object\ndataset_properties = DatasetPropertiesClass(description="This table stored the canonical User profile",\n    customProperties={\n         "governance": "ENABLED"\n    })\n\n# Construct a MetadataChangeProposalWrapper object.\nmetadata_event = MetadataChangeProposalWrapper(\n    entityUrn=builder.make_dataset_urn("bigquery", "my-project.my-dataset.user-table"),\n    aspect=dataset_properties,\n)\n\n\n# Emit metadata! This is a non-blocking call\nemitter.emit(\n    metadata_event,\n    callback=lambda exc, message: print(f"Message sent to topic:{message.topic()}, partition:{message.partition()}, offset:{message.offset()}") if message else print(f"Failed to send with: {exc}")\n)\n\n#Send all pending events\nemitter.flush()\n')),(0,r.yg)("h3",{id:"emitter-code-1"},"Emitter Code"),(0,r.yg)("p",null,"If you're interested in looking at the Kafka emitter code, it is available ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/emitter/kafka_emitter.py"},"here")),(0,r.yg)("h2",{id:"other-languages"},"Other Languages"),(0,r.yg)("p",null,"Emitter API-s are also supported for:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.13.1/metadata-integration/java/as-a-library"},"Java"))))}g.isMDXComponent=!0}}]);