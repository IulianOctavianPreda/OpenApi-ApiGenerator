import { OpenApi, OpenApiReference, OpenApiSchema, OpenApiSchemaFormat, OpenApiSchemaType } from '@tstypes/openapi-v3';
import { IModel } from './interfaces/models.interface';
import { isOpenApiReference } from './type-guards';

const ex: OpenApi = JSON.parse(
  `
    {
        "openapi": "3.0.0",
        "info": {
            "title": "Api",
            "description": "The API description",
            "version": "1.0",
            "contact": {}
        },
        "tags": [{ "name": "api", "description": "" }],
        "servers": [],
        "components": {
            "schemas": {
                "SubMessage": {
                    "type": "object",
                    "properties": { "name": { "type": "string" } },
                    "required": ["name"]
                },
                "Message": {
                    "type": "object",
                    "properties": {
                        "arr3": { "type": "array", "items": { "type": "number" } },
                        "message": { "type": "string" },
                        "currentDate": { "format": "date-time", "type": "string" },
                        "number": { "type": "number" },
                        "union": { "type": "object" },
                        "union3": { "type": "object" },
                        "union2": { "type": "object" },
                        "arr": { "type": "array", "items": { "type": "number" } },
                        "arr2": { "type": "array", "items": { "type": "number" } },
                        "arr4": { "type": "array", "items": { "type": "object" } },
                        "arr5": { "type": "array", "items": { "type": "object" } },
                        "nullable": { "type": "string", "nullable": true },
                        "subMessage": { "$ref": "#/components/schemas/SubMessage" },
                        "subMessage2": {
                            "nullable": true,
                            "allOf": [{ "$ref": "#/components/schemas/SubMessage" }]
                        },
                        "bbb": {
                            "type": "object",
                            "properties": { "bbb": { "required": true, "type": "string" } }
                        },
                        "ccc": { "type": "object", "nullable": true },
                        "bool": { "type": "boolean" },
                        "a": { "type": "object" },
                        "reg": { "type": "object" }
                    },
                    "required": ["message", "bbb"]
                }
            }
        },
        "paths": {
            "/hello": {
                "get": {
                    "operationId": "AppController_getData",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "",
                            "content": {
                                "application/json": {
                                    "schema": { "$ref": "#/components/schemas/Message" }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    `
);

const defaults = {};

const types: IModel[] = [];
export function main() {
  generateAST(ex);
}

function generateAST(openApi: OpenApi) {
    Object.entries(openApi.paths).forEach(([pathName,path]) => {
        path.
    })
  Object.entries(openApi.components.schemas).forEach(([schemaName, schema]) => {
    types.push(...getProperties(schema, schemaName));
  });
  console.log(types);
}

function getProperties(schema: OpenApiSchema | OpenApiReference, schemaName: string): IModel[] {
  console.log(schemaName, schema);
  if (isOpenApiReference(schema)) {
    return [
      {
        name: schemaName,
        type: schema.$ref.split('/').pop(),
        required: false,
        nullable: false,
      },
    ];
  }

  if (schema.type === 'object' && schema?.properties.length) {
    return Object.entries(schema.properties)
      .map(([propertyName, property]) => getProperties(property, propertyName))
      .flat();
  }

  return [
    {
      name: schemaName,
      type: schema.type,
      required: schema.required.includes(schemaName),
      nullable: schema.nullable,
    },
  ];
}
