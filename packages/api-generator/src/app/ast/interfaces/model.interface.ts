import { ModelType } from '../enums/model-type.enum';
import { TsType } from '../enums/typescript-type.enum';

export type IModelName = string;

export type IModel = IBaseModel | IArrayModel | IAnyValueModel | IReferenceModel | INullableReferenceModel;

export interface IAnyValueModel extends IBaseModel {
  type: ModelType.AnyValue;
  name: ModelType.AnyValue;
  tsType: TsType.Any | TsType.Object | TsType.Unknown | TsType.Record;
}

export interface IArrayModel extends IBaseModel {
  type: ModelType.Array;
  tsType: TsType.Array;
  arrayTypes?: Array<TsType | IModelName>;
}

export interface IReferenceModel extends IBaseModel {
  type: ModelType.Reference;
  nullable: false;
  tsType: IModelName;
}

export interface INullableReferenceModel extends IBaseModel {
  type: ModelType.NullableReference;
  nullable: true;
  tsType: IModelName;
}

export interface IBaseModel {
  type: ModelType;
  name: IModelName;
  nullable: boolean;
  required: boolean;
  tsType: TsType | IModelName;
  description?: string;
  properties?: IModel[];
}
