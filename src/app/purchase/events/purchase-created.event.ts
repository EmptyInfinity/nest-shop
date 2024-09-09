import { Purchase } from '../entities';

export class PurchaseCreatedEvent {
  constructor(public readonly purchase: Purchase) {}
}
