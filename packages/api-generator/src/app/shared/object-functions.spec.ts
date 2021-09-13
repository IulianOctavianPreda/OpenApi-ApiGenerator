import { withDeleteProperty } from './object-functions';

test('withDeleteProperty', () => {
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
