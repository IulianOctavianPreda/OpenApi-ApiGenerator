import { OpenApi } from '@tstypes/openapi-v3';
import { IAbstractSyntaxTree } from './interfaces/abstract-syntax-tree.interface';
import { IModel } from './interfaces/models.interface';
import { IOpenApiParser } from './interfaces/openapi-parser.interface';
import { IService } from './interfaces/service.interface';

export class OpenApiV3Parser implements IOpenApiParser<OpenApi> {
  parse(openApi: OpenApi): IAbstractSyntaxTree {
    throw new Error('Method not implemented.');
  }
  getModels(openApi: OpenApi): IModel[] {
    throw new Error('Method not implemented.');
  }
  getServices(openApi: OpenApi): IService[] {
    throw new Error('Method not implemented.');
  }
}
