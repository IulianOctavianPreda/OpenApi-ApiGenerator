import { OpenApi } from '@tstypes/openapi-v3';

import { OpenApiParserFactory } from './openapi-parser.factory';
import { OpenApiV2Parser } from './openapi-v2/openapi-v2.parser';
import { OpenApiV3Parser } from './openapi-v3/openapi-v3.parser';

describe('OpenApiParserFactory', () => {
  test('Should create appropriate parser', () => {
    const factory = new OpenApiParserFactory();
    const parserVersionMapper = {
      2: OpenApiV2Parser,
      3: OpenApiV3Parser,
    };

    const minimumVersion = 2;
    const maximumVersion = 3;

    for (let i = minimumVersion; i <= maximumVersion; i++) {
      for (let j = 0; j <= 100; j++) {
        for (let k = 0; k <= 100; k++) {
          const parser = factory.create({ info: { version: `${i}.${j}.${k}` } } as OpenApi);
          expect(parser).toBeInstanceOf(parserVersionMapper[i]);
        }
      }
    }
  });
});
