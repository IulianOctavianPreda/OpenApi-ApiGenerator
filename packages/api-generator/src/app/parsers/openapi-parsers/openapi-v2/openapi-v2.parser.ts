import { OpenApi } from '@tstypes/openapi-v2';

import { IAbstractSyntaxTree } from './../../../ast/interfaces/abstract-syntax-tree.interface';
import { IModel } from './../../../ast/interfaces/model.interface';
import { IService } from './../../../ast/interfaces/service.interface';
import { IOpenApiParser } from './../interfaces/openapi-parser.interface';

export class OpenApiV2Parser implements IOpenApiParser<OpenApi> {
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
