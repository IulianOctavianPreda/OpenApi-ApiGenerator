import { TypeScriptTypes } from '../enums/typescript-types.enum';

export type IModelName = string;

export type IModel = IModelBase | IModelArray | IAnyValueModel;

export interface IAnyValueModel extends IModelBase {
  name: 'AnyValue';
  type: TypeScriptTypes.Any | TypeScriptTypes.Object | TypeScriptTypes.Unknown | TypeScriptTypes.Record;
}

export interface IModelArray extends IModelBase {
  type: TypeScriptTypes.Array;
  arrayTypes?: (TypeScriptTypes | IModelName)[];
}

export interface IModelBase {
  name: IModelName;
  nullable: boolean;
  required: boolean;
  type: TypeScriptTypes | IModelName;
  properties?: IModel[];
}
