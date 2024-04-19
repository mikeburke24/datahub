"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33630],{88432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>u});a(96540);var n=a(15680),s=a(53720),r=a(5400);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const d={title:"Dataset",slug:"/api/tutorials/datasets",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/datasets.md"},p="Dataset",c={unversionedId:"docs/api/tutorials/datasets",id:"docs/api/tutorials/datasets",title:"Dataset",description:"Why Would You Use Datasets?",source:"@site/genDocs/docs/api/tutorials/datasets.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/datasets",permalink:"/docs/api/tutorials/datasets",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/datasets.md",tags:[],version:"current",frontMatter:{title:"Dataset",slug:"/api/tutorials/datasets",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/datasets.md"},sidebar:"overviewSidebar",previous:{title:"But First, Semantics: Upsert versus Patch",permalink:"/docs/advanced/patch"},next:{title:"Lineage",permalink:"/docs/api/tutorials/lineage"}},m={},u=[{value:"Why Would You Use Datasets?",id:"why-would-you-use-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Dataset",id:"create-dataset",level:2},{value:"Expected Outcomes of Creating Dataset",id:"expected-outcomes-of-creating-dataset",level:3},{value:"Delete Dataset",id:"delete-dataset",level:2},{value:"Expected Outcomes of Deleting Dataset",id:"expected-outcomes-of-deleting-dataset",level:3}],h={toc:u},g="wrapper";function y(e){var{components:t}=e,a=l(e,["components"]);return(0,n.yg)(g,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"dataset"},"Dataset"),(0,n.yg)("h2",{id:"why-would-you-use-datasets"},"Why Would You Use Datasets?"),(0,n.yg)("p",null,"The dataset entity is one the most important entities in the metadata model. They represent collections of data that are typically represented as Tables or Views in a database (e.g. BigQuery, Snowflake, Redshift etc.), Streams in a stream-processing environment (Kafka, Pulsar etc.), bundles of data found as Files or Folders in data lake systems (S3, ADLS, etc.).\nFor more information about datasets, refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/generated/metamodel/entities/dataset"},"Dataset"),"."),(0,n.yg)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,n.yg)("p",null,"This guide will show you how to"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Create: create a dataset with three columns."),(0,n.yg)("li",{parentName:"ul"},"Delete: delete a dataset.")),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,n.yg)("h2",{id:"create-dataset"},"Create Dataset"),(0,n.yg)(s.A,{mdxType:"Tabs"},(0,n.yg)(r.A,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\ud83d\udeab Creating a dataset via ",(0,n.yg)("inlineCode",{parentName:"p"},"graphql")," is currently not supported.\nPlease check out ",(0,n.yg)("a",{parentName:"p",href:"/docs/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information."))),(0,n.yg)(r.A,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetAdd.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.AuditStamp;\nimport com.linkedin.common.urn.CorpuserUrn;\nimport com.linkedin.common.urn.DataPlatformUrn;\nimport com.linkedin.common.urn.DatasetUrn;\nimport com.linkedin.common.urn.UrnUtils;\nimport com.linkedin.schema.DateType;\nimport com.linkedin.schema.OtherSchema;\nimport com.linkedin.schema.SchemaField;\nimport com.linkedin.schema.SchemaFieldArray;\nimport com.linkedin.schema.SchemaFieldDataType;\nimport com.linkedin.schema.SchemaMetadata;\nimport com.linkedin.schema.StringType;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.rest.RestEmitter;\nimport datahub.event.MetadataChangeProposalWrapper;\nimport java.io.IOException;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\n\npublic class DatasetAdd {\n\n  private DatasetAdd() {}\n\n  public static void main(String[] args)\n      throws IOException, ExecutionException, InterruptedException {\n    DatasetUrn datasetUrn = UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD");\n    CorpuserUrn userUrn = new CorpuserUrn("ingestion");\n    AuditStamp lastModified = new AuditStamp().setTime(1640692800000L).setActor(userUrn);\n\n    SchemaMetadata schemaMetadata =\n        new SchemaMetadata()\n            .setSchemaName("customer")\n            .setPlatform(new DataPlatformUrn("hive"))\n            .setVersion(0L)\n            .setHash("")\n            .setPlatformSchema(\n                SchemaMetadata.PlatformSchema.create(\n                    new OtherSchema().setRawSchema("__insert raw schema here__")))\n            .setLastModified(lastModified);\n\n    SchemaFieldArray fields = new SchemaFieldArray();\n\n    SchemaField field1 =\n        new SchemaField()\n            .setFieldPath("address.zipcode")\n            .setType(\n                new SchemaFieldDataType()\n                    .setType(SchemaFieldDataType.Type.create(new StringType())))\n            .setNativeDataType("VARCHAR(50)")\n            .setDescription(\n                "This is the zipcode of the address. Specified using extended form and limited to addresses in the United States")\n            .setLastModified(lastModified);\n    fields.add(field1);\n\n    SchemaField field2 =\n        new SchemaField()\n            .setFieldPath("address.street")\n            .setType(\n                new SchemaFieldDataType()\n                    .setType(SchemaFieldDataType.Type.create(new StringType())))\n            .setNativeDataType("VARCHAR(100)")\n            .setDescription("Street corresponding to the address")\n            .setLastModified(lastModified);\n    fields.add(field2);\n\n    SchemaField field3 =\n        new SchemaField()\n            .setFieldPath("last_sold_date")\n            .setType(\n                new SchemaFieldDataType().setType(SchemaFieldDataType.Type.create(new DateType())))\n            .setNativeDataType("Date")\n            .setDescription("Date of the last sale date for this property")\n            .setLastModified(lastModified);\n    fields.add(field3);\n\n    schemaMetadata.setFields(fields);\n\n    MetadataChangeProposalWrapper mcpw =\n        MetadataChangeProposalWrapper.builder()\n            .entityType("dataset")\n            .entityUrn(datasetUrn)\n            .upsert()\n            .aspect(schemaMetadata)\n            .build();\n\n    String token = "";\n    RestEmitter emitter = RestEmitter.create(b -> b.server("http://localhost:8080").token(token));\n    Future<MetadataWriteResponse> response = emitter.emit(mcpw, null);\n    System.out.println(response.get().getResponseContent());\n  }\n}\n\n'))),(0,n.yg)(r.A,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_schema.py\n# Imports for urn construction utility methods\nfrom datahub.emitter.mce_builder import make_data_platform_urn, make_dataset_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    DateTypeClass,\n    OtherSchemaClass,\n    SchemaFieldClass,\n    SchemaFieldDataTypeClass,\n    SchemaMetadataClass,\n    StringTypeClass,\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityUrn=make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD"),\n    aspect=SchemaMetadataClass(\n        schemaName="customer",  # not used\n        platform=make_data_platform_urn("hive"),  # important <- platform must be an urn\n        version=0,  # when the source system has a notion of versioning of schemas, insert this in, otherwise leave as 0\n        hash="",  # when the source system has a notion of unique schemas identified via hash, include a hash, else leave it as empty string\n        platformSchema=OtherSchemaClass(rawSchema="__insert raw schema here__"),\n        lastModified=AuditStampClass(\n            time=1640692800000, actor="urn:li:corpuser:ingestion"\n        ),\n        fields=[\n            SchemaFieldClass(\n                fieldPath="address.zipcode",\n                type=SchemaFieldDataTypeClass(type=StringTypeClass()),\n                nativeDataType="VARCHAR(50)",  # use this to provide the type of the field in the source system\'s vernacular\n                description="This is the zipcode of the address. Specified using extended form and limited to addresses in the United States",\n                lastModified=AuditStampClass(\n                    time=1640692800000, actor="urn:li:corpuser:ingestion"\n                ),\n            ),\n            SchemaFieldClass(\n                fieldPath="address.street",\n                type=SchemaFieldDataTypeClass(type=StringTypeClass()),\n                nativeDataType="VARCHAR(100)",\n                description="Street corresponding to the address",\n                lastModified=AuditStampClass(\n                    time=1640692800000, actor="urn:li:corpuser:ingestion"\n                ),\n            ),\n            SchemaFieldClass(\n                fieldPath="last_sold_date",\n                type=SchemaFieldDataTypeClass(type=DateTypeClass()),\n                nativeDataType="Date",\n                description="Date of the last sale date for this property",\n                created=AuditStampClass(\n                    time=1640692800000, actor="urn:li:corpuser:ingestion"\n                ),\n                lastModified=AuditStampClass(\n                    time=1640692800000, actor="urn:li:corpuser:ingestion"\n                ),\n            ),\n        ],\n    ),\n)\n\n# Create rest emitter\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\n\n')))),(0,n.yg)("h3",{id:"expected-outcomes-of-creating-dataset"},"Expected Outcomes of Creating Dataset"),(0,n.yg)("p",null,"You can now see ",(0,n.yg)("inlineCode",{parentName:"p"},"realestate_db.sales")," dataset has been created."),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-created.png"})),(0,n.yg)("h2",{id:"delete-dataset"},"Delete Dataset"),(0,n.yg)("p",null,"You may want to delete a dataset if it is no longer needed, contains incorrect or sensitive information, or if it was created for testing purposes and is no longer necessary in production.\nIt is possible to ",(0,n.yg)("a",{parentName:"p",href:"/docs/how/delete-metadata"},"delete entities via CLI"),", but a programmatic approach is necessary for scalability."),(0,n.yg)("p",null,"There are two methods of deletion: soft delete and hard delete.\n",(0,n.yg)("strong",{parentName:"p"},"Soft delete")," sets the Status aspect of the entity to Removed, which hides the entity and all its aspects from being returned by the UI.\n",(0,n.yg)("strong",{parentName:"p"},"Hard delete")," physically deletes all rows for all aspects of the entity."),(0,n.yg)("p",null,"For more information about soft delete and hard delete, please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/how/delete-metadata#delete-by-urn"},"Removing Metadata from DataHub"),"."),(0,n.yg)(s.A,{mdxType:"Tabs"},(0,n.yg)(r.A,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"\ud83d\udeab Hard delete with ",(0,n.yg)("inlineCode",{parentName:"p"},"graphql")," is currently not supported.\nPlease check out ",(0,n.yg)("a",{parentName:"p",href:"/docs/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'mutation batchUpdateSoftDeleted {\n    batchUpdateSoftDeleted(input:\n      { urns: ["urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)"],\n        deleted: true })\n}\n')),(0,n.yg)("p",null,"If you see the following response, the operation was successful:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "batchUpdateSoftDeleted": true\n  },\n  "extensions": {}\n}\n'))),(0,n.yg)(r.A,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"mutation batchUpdateSoftDeleted { batchUpdateSoftDeleted(input: { deleted: true, urns: [\\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\\"] }) }\", \"variables\":{}}'\n")),(0,n.yg)("p",null,"Expected Response:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{ "data": { "batchUpdateSoftDeleted": true }, "extensions": {} }\n'))),(0,n.yg)(r.A,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/delete_dataset.py\nimport logging\n\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\ngraph = DataHubGraph(\n    config=DatahubClientConfig(\n        server="http://localhost:8080",\n    )\n)\n\ndataset_urn = make_dataset_urn(name="fct_users_created", platform="hive")\n\n# Soft-delete the dataset.\ngraph.delete_entity(urn=dataset_urn, hard=False)\n\nlog.info(f"Deleted dataset {dataset_urn}")\n\n')))),(0,n.yg)("h3",{id:"expected-outcomes-of-deleting-dataset"},"Expected Outcomes of Deleting Dataset"),(0,n.yg)("p",null,"The dataset ",(0,n.yg)("inlineCode",{parentName:"p"},"fct_users_deleted")," has now been deleted, so if you search for a hive dataset named ",(0,n.yg)("inlineCode",{parentName:"p"},"fct_users_delete"),", you will no longer be able to see it."),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-deleted.png"})))}y.isMDXComponent=!0}}]);