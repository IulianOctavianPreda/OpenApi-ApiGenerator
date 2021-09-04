import { OpenApi as OpenApiV3 } from '@tstypes/openapi-v3';
import { OpenApi as OpenApiV2 } from '@tstypes/openapi-v2';
import { IAbstractSyntaxTree } from './abstract-syntax-tree.interface';

export interface IParser<T = OpenApiV2 | OpenApiV3> {
  parse(openApi: T): IAbstractSyntaxTree;
}
