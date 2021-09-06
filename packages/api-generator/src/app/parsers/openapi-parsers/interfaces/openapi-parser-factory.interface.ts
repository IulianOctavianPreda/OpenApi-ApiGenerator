import { IOpenApi } from './openapi.interface';
import { IOpenApiParser } from './openapi-parser.interface';

export interface IOpenApiParserFactory<T = IOpenApi> {
  create(openApi: T): IOpenApiParser<T>;
}
