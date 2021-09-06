import { OpenApiMap, OpenApiReference, OpenApiSchema } from '@tstypes/openapi-v3';
import { IModel } from '../../../interfaces/models.interface';
import { isReference } from './is-reference';

test('isReference - General case', () => {
  const models: IModel[] = [
    {
      name: 'schemaName',
      nullable: false,
      required: false,
      type: 'ComponentName',
    },
  ];

  const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
    schemaName: {
      $ref: '#/components/schemas/ComponentName',
    },
  };

  Object.entries(schemas).forEach(([schemaName, schema]) => {
    const result = isReference(schema, schemaName);
    expect(result).toStrictEqual(models);
  });
});

test('isReference required - Case can happen while the reference is a property of a different schema', () => {
  const models: IModel[] = [
    {
      name: 'schemaName',
      nullable: false,
      required: true,
      type: 'ComponentName',
    },
  ];

  const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
    schemaName: {
      $ref: '#/components/schemas/ComponentName',
    },
  };

  const requiredSchemas = ['schemaName'];

  Object.entries(schemas).forEach(([schemaName, schema]) => {
    const result = isReference(schema, schemaName, requiredSchemas);
    expect(result).toStrictEqual(models);
  });
});

test('isNotReference', () => {
  const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
    schemaName: {
      type: 'object',
      properties: { name: { type: 'string' } },
      required: ['name'],
    },
  };

  Object.entries(schemas).forEach(([schemaName, schema]) => {
    const result = isReference(schema, schemaName);
    expect(result).toBeUndefined();
  });
});
