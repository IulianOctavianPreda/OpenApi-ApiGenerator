import { IOpenApiParserFactory } from './openapi-parsers/interfaces/openapi-parser-factory.interface';
import { IOpenApi } from './openapi-parsers/interfaces/openapi.interface';
import { OpenApiParserFactory } from './openapi-parsers/openapi-parser.factory';

export class Parser {
  parserFactory: IOpenApiParserFactory;
  constructor() {
    this.parserFactory = new OpenApiParserFactory();
  }
  parse(openApi: IOpenApi) {
    return this.parserFactory.create(openApi).parse(openApi);
  }
}
