import { OpenApi as OpenApiV3 } from '@tstypes/openapi-v3';
import { OpenApi as OpenApiV2 } from '@tstypes/openapi-v2';
import { IAbstractSyntaxTree } from './abstract-syntax-tree.interface';
import { IModel } from './models.interface';
import { IService } from './service.interface';
export interface IOpenApiParser<T = OpenApiV2 | OpenApiV3> {
  parse(openApi: T): IAbstractSyntaxTree;
  getModels(openApi: T): IModel[];
  getServices(openApi: T): IService[];
}

export interface IOpenApiParserFactory<T = OpenApiV2 | OpenApiV3> {
  create(openApi: T): IOpenApiParser<T>;
}
