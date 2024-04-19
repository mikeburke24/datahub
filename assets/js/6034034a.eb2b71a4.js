"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[88074],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>d});t(96540);var a=t(15680);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={sidebar_position:5,title:"DataProcess",slug:"/generated/metamodel/entities/dataprocess",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataProcess.md"},l="DataProcess",c={unversionedId:"docs/generated/metamodel/entities/dataProcess",id:"version-0.13.1/docs/generated/metamodel/entities/dataProcess",title:"DataProcess",description:"Aspects",source:"@site/versioned_docs/version-0.13.1/docs/generated/metamodel/entities/dataProcess.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/dataprocess",permalink:"/docs/0.13.1/generated/metamodel/entities/dataprocess",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataProcess.md",tags:[],version:"0.13.1",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"DataProcess",slug:"/generated/metamodel/entities/dataprocess",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataProcess.md"},sidebar:"overviewSidebar",previous:{title:"DataFlow",permalink:"/docs/0.13.1/generated/metamodel/entities/dataflow"},next:{title:"DataProcessInstance",permalink:"/docs/0.13.1/generated/metamodel/entities/dataprocessinstance"}},p={},d=[{value:"Aspects",id:"aspects",level:2},{value:"dataProcessKey",id:"dataprocesskey",level:3},{value:"ownership",id:"ownership",level:3},{value:"dataProcessInfo",id:"dataprocessinfo",level:3},{value:"status",id:"status",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],u={toc:d},m="wrapper";function y(e){var{components:n}=e,t=o(e,["components"]);return(0,a.yg)(m,s(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"dataprocess"},"DataProcess"),(0,a.yg)("h2",{id:"aspects"},"Aspects"),(0,a.yg)("h3",{id:"dataprocesskey"},"dataProcessKey"),(0,a.yg)("p",null,"Key for a Data Process"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataProcessKey"\n  },\n  "name": "DataProcessKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 4.0,\n        "enableAutocomplete": true,\n        "fieldType": "WORD_GRAM"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Process name i.e. an ETL job name"\n    },\n    {\n      "Searchable": {\n        "enableAutocomplete": true,\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "orchestrator",\n      "doc": "Standardized Orchestrator where data process is defined.\\nTODO: Migrate towards something that can be validated like DataPlatform urn"\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL",\n        "queryByDefault": false\n      },\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "CORP": "Designates corporation fabrics",\n          "DEV": "Designates development fabrics",\n          "EI": "Designates early-integration fabrics",\n          "NON_PROD": "Designates non-production fabrics",\n          "PRE": "Designates pre-production fabrics",\n          "PROD": "Designates production fabrics",\n          "QA": "Designates quality assurance fabrics",\n          "STG": "Designates staging fabrics",\n          "TEST": "Designates testing fabrics",\n          "UAT": "Designates user acceptance testing fabrics"\n        },\n        "name": "FabricType",\n        "namespace": "com.linkedin.common",\n        "symbols": [\n          "DEV",\n          "TEST",\n          "QA",\n          "UAT",\n          "EI",\n          "PRE",\n          "STG",\n          "NON_PROD",\n          "PROD",\n          "CORP"\n        ],\n        "doc": "Fabric group type"\n      },\n      "name": "origin",\n      "doc": "Fabric type where dataset belongs to or where it was generated."\n    }\n  ],\n  "doc": "Key for a Data Process"\n}\n'))),(0,a.yg)("h3",{id:"ownership"},"ownership"),(0,a.yg)("p",null,"Ownership information of an entity."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpuser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "deprecated": true,\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "BUSINESS_OWNER": "A person or group who is responsible for logical, or business related, aspects of the asset.",\n                  "CONSUMER": "A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.",\n                  "CUSTOM": "Set when ownership type is unknown or a when new one is specified as an ownership type entity for which we have no\\nenum value for. This is used for backwards compatibility",\n                  "DATAOWNER": "A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DATA_STEWARD": "A steward, expert, or delegate responsible for the asset.",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "NONE": "No specific type associated to the owner.",\n                  "PRODUCER": "A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "STAKEHOLDER": "A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.",\n                  "TECHNICAL_OWNER": "person or group who is responsible for technical aspects of the asset."\n                },\n                "deprecatedSymbols": {\n                  "CONSUMER": true,\n                  "DATAOWNER": true,\n                  "DELEGATE": true,\n                  "DEVELOPER": true,\n                  "PRODUCER": true,\n                  "STAKEHOLDER": true\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "CUSTOM",\n                  "TECHNICAL_OWNER",\n                  "BUSINESS_OWNER",\n                  "DATA_STEWARD",\n                  "NONE",\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Asset owner types"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "ownershipType"\n                ],\n                "name": "ownershipType"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "typeUrn",\n              "default": null,\n              "doc": "The type of the ownership\\nUrn of type O"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "Searchable": {\n        "/*": {\n          "fieldType": "MAP_ARRAY",\n          "queryByDefault": false\n        }\n      },\n      "type": [\n        {\n          "type": "map",\n          "values": {\n            "type": "array",\n            "items": "string"\n          }\n        },\n        "null"\n      ],\n      "name": "ownerTypes",\n      "default": {},\n      "doc": "Ownership type to Owners map, populated via mutation hook."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0,\n        "message": null\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,a.yg)("h3",{id:"dataprocessinfo"},"dataProcessInfo"),(0,a.yg)("p",null,"The inputs and outputs of this data process"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataProcessInfo"\n  },\n  "name": "DataProcessInfo",\n  "namespace": "com.linkedin.dataprocess",\n  "fields": [\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "dataset"\n          ],\n          "isLineage": true,\n          "name": "Consumes"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "fieldName": "inputs",\n          "fieldType": "URN",\n          "numValuesFieldName": "numInputDatasets",\n          "queryByDefault": false\n        }\n      },\n      "type": [\n        "null",\n        {\n          "type": "array",\n          "items": "string"\n        }\n      ],\n      "name": "inputs",\n      "default": null,\n      "doc": "the inputs of the data process"\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "dataset"\n          ],\n          "isLineage": true,\n          "name": "Consumes"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "fieldName": "outputs",\n          "fieldType": "URN",\n          "numValuesFieldName": "numOutputDatasets",\n          "queryByDefault": false\n        }\n      },\n      "type": [\n        "null",\n        {\n          "type": "array",\n          "items": "string"\n        }\n      ],\n      "name": "outputs",\n      "default": null,\n      "doc": "the outputs of the data process"\n    }\n  ],\n  "doc": "The inputs and outputs of this data process"\n}\n'))),(0,a.yg)("h3",{id:"status"},"status"),(0,a.yg)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"outgoing"},"Outgoing"),(0,a.yg)("p",null,"These are the relationships stored in this entity's aspects"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"OwnedBy"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Corpuser via ",(0,a.yg)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,a.yg)("li",{parentName:"ul"},"CorpGroup via ",(0,a.yg)("inlineCode",{parentName:"li"},"ownership.owners.owner")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"ownershipType"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"OwnershipType via ",(0,a.yg)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Consumes"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Dataset via ",(0,a.yg)("inlineCode",{parentName:"li"},"dataProcessInfo.inputs")),(0,a.yg)("li",{parentName:"ul"},"Dataset via ",(0,a.yg)("inlineCode",{parentName:"li"},"dataProcessInfo.outputs"))))),(0,a.yg)("h2",{id:"global-metadata-model"},(0,a.yg)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}y.isMDXComponent=!0}}]);