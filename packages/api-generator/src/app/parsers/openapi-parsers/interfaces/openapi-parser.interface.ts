import { IAbstractSyntaxTree } from './../../../ast/interfaces/abstract-syntax-tree.interface';
import { IModel } from './../../../ast/interfaces/model.interface';
import { IService } from './../../../ast/interfaces/service.interface';
import { IOpenApi } from './openapi.interface';

export interface IOpenApiParser<T = IOpenApi> {
  // Todo add rules typings
  parse(openApi: T, rules?): IAbstractSyntaxTree;
  getModels(openApi: T): IModel[];
  getServices(openApi: T): IService[];
}
