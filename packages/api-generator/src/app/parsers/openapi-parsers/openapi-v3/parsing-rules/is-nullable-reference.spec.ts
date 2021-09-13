import { OpenApiMap, OpenApiReference, OpenApiSchema } from '@tstypes/openapi-v3';

import { ModelType } from './../../../../ast/enums/model-type.enum';
import { INullableReferenceModel } from './../../../../ast/interfaces/model.interface';
import { isNullableReference } from './is-nullable-reference';

test('isNullableReference - General case with allOf property', () => {
  const models: INullableReferenceModel[] = [
    {
      type: ModelType.NullableReference,
      name: 'schemaName',
      nullable: true,
      required: false,
      tsType: 'ComponentName',
    },
  ];

  const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
    schemaName: {
      nullable: true,
      allOf: [{ $ref: '#/components/schemas/ComponentName' }],
    },
  };

  Object.entries(schemas).forEach(([schemaName, schema]) => {
    const result = isNullableReference(schema, schemaName);
    expect(result).toStrictEqual(models);
  });
});

test('isNullableReference - General case with anyOf property', () => {
  const models: INullableReferenceModel[] = [
    {
      type: ModelType.NullableReference,
      name: 'schemaName',
      nullable: true,
      required: false,
      tsType: 'ComponentName',
    },
  ];

  const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
    schemaName: {
      nullable: true,
      anyOf: [{ $ref: '#/components/schemas/ComponentName' }],
    },
  };

  Object.entries(schemas).forEach(([schemaName, schema]) => {
    const result = isNullableReference(schema, schemaName);
    expect(result).toStrictEqual(models);
  });
});

// Case can happen while the reference is a property of a different schema
test('isNullableReference required with anyOf property', () => {
  const requiredSchemas = ['schemaName', 'schemaName2'];
  const models: INullableReferenceModel[] = [
    {
      type: ModelType.NullableReference,
      name: 'schemaName',
      nullable: true,
      required: true,
      tsType: 'ComponentName',
    },
  ];

  const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
    schemaName: {
      nullable: true,
      allOf: [{ $ref: '#/components/schemas/ComponentName' }],
    },
  };

  Object.entries(schemas).forEach(([schemaName, schema]) => {
    const result = isNullableReference(schema, schemaName, requiredSchemas);
    expect(result).toStrictEqual(models);
  });
});

// Case can happen while the reference is a property of a different schema
test('isNullableReference required with anyOf property', () => {
  const requiredSchemas = ['schemaName', 'schemaName2'];
  const models: INullableReferenceModel[] = [
    {
      type: ModelType.NullableReference,
      name: 'schemaName',
      nullable: true,
      required: true,
      tsType: 'ComponentName',
    },
  ];

  const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
    schemaName: {
      nullable: true,
      anyOf: [{ $ref: '#/components/schemas/ComponentName' }],
    },
  };

  Object.entries(schemas).forEach(([schemaName, schema]) => {
    const result = isNullableReference(schema, schemaName, requiredSchemas);
    expect(result).toStrictEqual(models);
  });
});

test('isNotNullableReference', () => {
  const schemas: OpenApiMap<OpenApiSchema | OpenApiReference> = {
    schemaName: {
      $ref: '#/components/schemas/ComponentName',
    },
  };

  Object.entries(schemas).forEach(([schemaName, schema]) => {
    const result = isNullableReference(schema, schemaName);
    expect(result).toBeUndefined();
  });
});
