import { OpenApiReference, OpenApiSchema } from '@tstypes/openapi-v3';
import { isOpenApiReference } from '../../type-guards';
import { IModelParsingRule } from '../interfaces/openapi-parsing-rules.interface';

/**
 * For schemas with the pattern:
 *
 * ```
 * {
 *   "schemaName": {
 *     "$ref": "#/components/schemas/ComponentName"
 *    }
 * }
 * ```
 */
export const isReference: IModelParsingRule<OpenApiSchema | OpenApiReference> = (
  schema: OpenApiSchema | OpenApiReference,
  schemaName: string,
  requiredSchemas: string[] = []
) => {
  if (isOpenApiReference(schema)) {
    return [
      {
        name: schemaName,
        type: schema.$ref.split('/').pop(),
        required: requiredSchemas.includes(schemaName),
        nullable: false,
      },
    ];
  }
};

/**
 * For schemas with the pattern:
 *
 * ```
 * {
 *   "schemaName": {
 *     "nullable": true,
 *     "allOf": [{ "$ref": "#/components/schemas/ComponentName" }]
 *   },
 *  //Or
 *   "schemaName": {
 *     "nullable": true,
 *     "anyOf": [{ "$ref": "#/components/schemas/ComponentName" }]
 *   },
 * }
 * ```
 */
export const isNullableReference = (schema: OpenApiSchema | OpenApiReference, schemaName: string, requiredSchemas: string[] = []) => {
  if (!isOpenApiReference(schema) && schema.nullable && (schema?.allOf.length === 1 || schema?.anyOf.length === 1)) {
    const ref = schema.allOf[0] ?? schema.anyOf[0];
    if (isOpenApiReference(ref)) {
      return [
        {
          name: schemaName,
          type: ref.$ref.split('/').pop(),
          required: requiredSchemas.includes(schemaName),
          nullable: true,
        },
      ];
    }
  }
};
