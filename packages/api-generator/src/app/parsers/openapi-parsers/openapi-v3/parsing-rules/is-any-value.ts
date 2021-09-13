import { OpenApiReference, OpenApiSchema } from '@tstypes/openapi-v3';

import { TsType } from '../../../../ast/enums/typescript-type.enum';
import { isOpenApiReference } from '../../../type-guards';
import { ModelType } from './../../../../ast/enums/model-type.enum';
import { IAnyValueModel } from './../../../../ast/interfaces/model.interface';

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
export function isAnyValue(
  schema: OpenApiSchema | OpenApiReference,
  schemaName: string,
  requiredSchemas: string[] = []
): IAnyValueModel[] | undefined {
  if (!isOpenApiReference(schema) && schemaName === ModelType.AnyValue) {
    return [
      {
        type: ModelType.AnyValue,
        description: schema.description,
        name: ModelType.AnyValue,
        tsType: TsType.Record,
        required: requiredSchemas.includes(schemaName),
        nullable: schema?.nullable,
      },
    ];
  }
}
