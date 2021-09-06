import { OpenApiReference, OpenApiSchema } from '@tstypes/openapi-v3';
import { IModel } from '../../../interfaces/models.interface';
import { isOpenApiReference } from '../../../type-guards';

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
export function isNullableReference(
  schema: OpenApiSchema | OpenApiReference,
  schemaName: string,
  requiredSchemas: string[] = []
): IModel[] | undefined {
  if (!isOpenApiReference(schema) && schema.nullable && (schema?.allOf?.length === 1 || schema?.anyOf?.length === 1)) {
    const ref = schema.allOf?.[0] ?? schema.anyOf?.[0];
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
}
