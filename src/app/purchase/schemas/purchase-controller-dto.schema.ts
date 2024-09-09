import { DeepPartial } from 'typeorm';
import { Offer } from '../../offer/entities';
import { User } from '../../user/entities';

export class CreatePurchaseDto {
  user: DeepPartial<User>;
  offer: DeepPartial<Offer>;
}
