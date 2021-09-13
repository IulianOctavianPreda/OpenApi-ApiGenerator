import { OpenApiReference, OpenApiSchema } from '@tstypes/openapi-v3';

import { isOpenApiReference } from '../../../type-guards';
import { ModelType } from './../../../../ast/enums/model-type.enum';
import { INullableReferenceModel } from './../../../../ast/interfaces/model.interface';

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
): INullableReferenceModel[] | undefined {
  if (!isOpenApiReference(schema) && schema.nullable && (schema?.allOf?.length === 1 || schema?.anyOf?.length === 1)) {
    const ref = schema.allOf?.[0] ?? schema.anyOf?.[0];
    if (isOpenApiReference(ref)) {
      return [
        {
          type: ModelType.NullableReference,
          name: schemaName,
          description: schema.description,
          tsType: ref.$ref.split('/').pop(),
          required: requiredSchemas.includes(schemaName),
          nullable: true,
        },
      ];
    }
  }
}
