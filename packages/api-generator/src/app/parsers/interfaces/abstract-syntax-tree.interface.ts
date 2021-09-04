import { IModel } from './models.interface';
import { IService } from './service.interface';

export interface IAbstractSyntaxTree {
  models: IModel[];
  services: IService[];
}
