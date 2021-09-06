import { OpenApiReference, OpenApiSchema } from '@tstypes/openapi-v3';
import { IModel } from '../../../interfaces/models.interface';
import { isOpenApiReference } from '../../../type-guards';

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
): IModel[] | undefined {
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
}
