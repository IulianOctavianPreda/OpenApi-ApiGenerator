import { IAbstractSyntaxTree } from '../../interfaces/abstract-syntax-tree.interface';
import { IModel } from '../../interfaces/models.interface';
import { IService } from '../../interfaces/service.interface';
import { IOpenApi } from './openapi.interface';
export interface IOpenApiParser<T = IOpenApi> {
  parse(openApi: T, rules): IAbstractSyntaxTree;
  getModels(openApi: T): IModel[];
  getServices(openApi: T): IService[];
}
