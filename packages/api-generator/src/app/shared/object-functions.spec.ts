import { withDeleteProperty } from './object-functions';

describe('Object functions', () => {
  test('withDeleteProperty - should delete property', () => {
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
