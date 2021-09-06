import { IModel } from '../../interfaces/models.interface';
import { IService } from '../../interfaces/service.interface';

export type IModelParsingRule<T> = (schema: T, schemaName: string) => IModel[];
export type IServiceParsingRule<T> = (schema: T, schemaName: string) => IService[];

export interface IOpenApiParsingRules<T> {
  setRules(rules: (IModelParsingRule<T> | IServiceParsingRule<T>)[]): void;
  getRules(): (IModelParsingRule<T> | IServiceParsingRule<T>)[];
}
