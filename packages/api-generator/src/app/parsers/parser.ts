import { OpenApi as OpenApiV3 } from '@tstypes/openapi-v3';
import { OpenApi as OpenApiV2 } from '@tstypes/openapi-v2';
import { IOpenApiParserFactory } from './interfaces/openapi-parser.interface';
import { IParser } from './interfaces/parser.interface';
import { OpenApiParserFactory } from './openapi-parser.factory';

export class Parser implements IParser {
  parserFactory: IOpenApiParserFactory;
  constructor() {
    this.parserFactory = new OpenApiParserFactory();
  }
  parse(openApi: OpenApiV2 | OpenApiV3) {
    return this.parserFactory.create(openApi).parse(openApi);
  }
}
