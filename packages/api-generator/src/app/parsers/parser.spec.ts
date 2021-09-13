import { withDeleteProperty } from '../shared/object-functions';

describe('Parser', () => {
  test('Should parse entire object', () => {
    const fct = (x: unknown, ...params: unknown[]) => [x, ...params];
    const obj = {
      schema: {
        property: 1,
      },
    };

    const result = withDeleteProperty(fct, obj, 'schema', { additionalProperty: 2 });
    const expectedResult = [
      {
        property: 1,
      },
      { additionalProperty: 2 },
    ];
    expect(result).toStrictEqual(expectedResult);
    expect(obj).toStrictEqual({});
  });
});
const openApi = {
  openapi: '3.0.0',
  info: {
    title: 'Api',
    description: 'The API description',
    version: '1.0',
    contact: {},
  },
  tags: [{ name: 'api', description: '' }],
  servers: [],
  components: {
    schemas: {
      Message3: { type: 'object', properties: {} },
      Message2: {
        type: 'object',
        properties: {
          arr3: { type: 'array', items: { type: 'number' } },
          message: { type: 'string' },
          currentDate: { format: 'date-time', type: 'string' },
          number: { type: 'number' },
          union: { type: 'object' },
          union3: { type: 'object' },
          union2: { type: 'object' },
          arr: { type: 'array', items: { type: 'number' } },
          arr2: { type: 'array', items: { type: 'number' } },
          arr4: { type: 'array', items: { type: 'object' } },
          arr5: { type: 'array', items: { type: 'object' } },
          nullable: { type: 'string', nullable: true },
          subMessage: { $ref: '#/components/schemas/SubMessage' },
          subMessage2: {
            nullable: true,
            allOf: [{ $ref: '#/components/schemas/SubMessage' }],
          },
          subMessageReq: { $ref: '#/components/schemas/Message3' },
          subMessage2Req: {
            nullable: true,
            allOf: [{ $ref: '#/components/schemas/Message3' }],
          },
          bbb: {
            type: 'object',
            properties: { bbb: { required: true, type: 'string' } },
          },
          ccc: { type: 'object', nullable: true },
          bool: { type: 'boolean' },
          a: { type: 'object' },
          reg: { type: 'object' },
          message2: { type: 'string' },
        },
        required: ['message', 'subMessageReq', 'subMessage2Req', 'bbb', 'message2'],
      },
      SubMessage: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          message2: { $ref: '#/components/schemas/Message2' },
        },
        required: ['name', 'message2'],
      },
      Message: {
        type: 'object',
        properties: {
          arr3: { type: 'array', items: { type: 'number' } },
          message: { type: 'string' },
          currentDate: { format: 'date-time', type: 'string' },
          number: { type: 'number' },
          union: { type: 'object' },
          union3: { type: 'object' },
          union2: { type: 'object' },
          arr: { type: 'array', items: { type: 'number' } },
          arr2: { type: 'array', items: { type: 'number' } },
          arr4: { type: 'array', items: { type: 'object' } },
          arr5: { type: 'array', items: { type: 'object' } },
          nullable: { type: 'string', nullable: true },
          subMessage: { $ref: '#/components/schemas/SubMessage' },
          subMessage2: {
            nullable: true,
            allOf: [{ $ref: '#/components/schemas/SubMessage' }],
          },
          subMessageReq: { $ref: '#/components/schemas/Message3' },
          subMessage2Req: {
            nullable: true,
            allOf: [{ $ref: '#/components/schemas/Message3' }],
          },
          bbb: {
            type: 'object',
            properties: { bbb: { required: true, type: 'string' } },
          },
          ccc: { type: 'object', nullable: true },
          bool: { type: 'boolean' },
          a: { type: 'object' },
          reg: { type: 'object' },
        },
        required: ['message', 'subMessageReq', 'subMessage2Req', 'bbb'],
      },
    },
  },
  paths: {
    '/hello': {
      get: {
        operationId: 'AppController_getData',
        parameters: [],
        responses: {
          '200': {
            description: '',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Message' },
              },
            },
          },
        },
      },
    },
  },
};
