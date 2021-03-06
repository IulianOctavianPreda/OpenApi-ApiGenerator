import { OpenApiReference, OpenApiSchema } from '@tstypes/openapi-v3';

import { IReferenceModel } from '../../../../ast/interfaces/model.interface';
import { isOpenApiReference } from '../../../type-guards';
import { ModelType } from './../../../../ast/enums/model-type.enum';

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
export function isReference(
  schema: OpenApiSchema | OpenApiReference,
  schemaName: string,
  requiredSchemas: string[] = []
): IReferenceModel[] | undefined {
  if (isOpenApiReference(schema)) {
    return [
      {
        type: ModelType.Reference,
        name: schemaName,
        tsType: schema.$ref.split('/').pop(),
        required: requiredSchemas.includes(schemaName),
        nullable: false,
      },
    ];
  }
}
