import { IOpenApiParserFactory } from './interfaces/openapi-parser-factory.interface';
import { IOpenApiParser } from './interfaces/openapi-parser.interface';
import { IOpenApi } from './interfaces/openapi.interface';
import { OpenApiV2Parser } from './openapi-v2/openapi-v2.parser';
import { OpenApiV3Parser } from './openapi-v3/openapi-v3.parser';
export class OpenApiParserFactory implements IOpenApiParserFactory {
  create(openApi: IOpenApi): IOpenApiParser {
    if (openApi.info.version.split('.')[0] === '3') {
      return new OpenApiV3Parser();
    }
    if (openApi.info.version.split('.')[0] === '2') {
      return new OpenApiV2Parser();
    }
    throw new Error('Unsupported OpenAPI version');
  }
}
