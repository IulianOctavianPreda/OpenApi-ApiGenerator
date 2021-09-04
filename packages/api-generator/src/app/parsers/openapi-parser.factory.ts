import { OpenApi as OpenApiV2 } from '@tstypes/openapi-v2';
import { OpenApi as OpenApiV3 } from '@tstypes/openapi-v3';
import { IOpenApiParser, IOpenApiParserFactory } from './interfaces/openapi-parser.interface';
import { OpenApiV2Parser } from './openapi-v2.parser';
import { OpenApiV3Parser } from './openapi-v3.parser';
export class OpenApiParserFactory implements IOpenApiParserFactory {
  create(openApi: OpenApiV2 | OpenApiV3): IOpenApiParser {
    if (openApi.info.version.split('.')[0] === '3') {
      return new OpenApiV3Parser();
    }
    if (openApi.info.version.split('.')[0] === '2') {
      return new OpenApiV2Parser();
    }
    throw new Error('Unsupported OpenAPI version');
  }
}
