import { IModel } from './../../../ast/interfaces/model.interface';
import { IService } from './../../../ast/interfaces/service.interface';

export type IModelParsingRule<T> = (schema: T, schemaName: string, requiredSchemas?: string[], parse?: IModelParsingRule<T>) => IModel[];
export type IServiceParsingRule<T> = (
  schema: T,
  schemaName: string,
  requiredSchemas?: string[],
  parse?: IServiceParsingRule<T>
) => IService[];

export interface IOpenApiParsingRules<T> {
  setRules(rules: (IModelParsingRule<T> | IServiceParsingRule<T>)[]): void;
  getRules(): (IModelParsingRule<T> | IServiceParsingRule<T>)[];
}
