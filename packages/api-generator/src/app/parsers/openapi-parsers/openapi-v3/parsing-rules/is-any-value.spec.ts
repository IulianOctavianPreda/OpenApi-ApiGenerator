import { OpenApiMap, OpenApiReference, OpenApiSchema } from '@tstypes/openapi-v3';

import { ModelType } from '../../../../ast/enums/model-type.enum';
import { IReferenceModel } from './../../../../ast/interfaces/model.interface';
import { isAnyValue } from './is-any-value';

describe('isAnyValue', () => {
  test('General case', () => {
    const models: IReferenceModel[] = [
      {
        type: ModelType.Reference,
        name: 'schemaName',
        nullable: false,
        required: false,
        tsType: 'ComponentName',
      },
    ];

    const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
      schemaName: {
        $ref: '#/components/schemas/ComponentName',
      },
    };

    Object.entries(schemas).forEach(([schemaName, schema]) => {
      const result = isAnyValue(schema, schemaName);
      expect(result).toStrictEqual(models);
    });
  });

  test('Required - Case can happen while the reference is a property of a different schema', () => {
    const models: IReferenceModel[] = [
      {
        type: ModelType.Reference,
        name: 'schemaName',
        nullable: false,
        required: true,
        tsType: 'ComponentName',
      },
    ];

    const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
      schemaName: {
        $ref: '#/components/schemas/ComponentName',
      },
    };

    const requiredSchemas = ['schemaName'];

    Object.entries(schemas).forEach(([schemaName, schema]) => {
      const result = isAnyValue(schema, schemaName, requiredSchemas);
      expect(result).toStrictEqual(models);
    });
  });

  test('IsNotAnyValue', () => {
    const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
      schemaName: {
        type: 'object',
        properties: { name: { type: 'string' } },
        required: ['name'],
      },
    };

    Object.entries(schemas).forEach(([schemaName, schema]) => {
      const result = isAnyValue(schema, schemaName);
      expect(result).toBeUndefined();
    });
  });
});
