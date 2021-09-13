import { IAbstractSyntaxTree } from './abstract-syntax-tree.interface';
import { IOpenApi } from '../openapi-parsers/interfaces/openapi.interface';

export interface IParser<T = IOpenApi> {
  parse(openApi: T): IAbstractSyntaxTree;
}
