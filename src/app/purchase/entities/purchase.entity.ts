import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities';
import { Offer } from '../../offer/entities';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Offer, (offer) => offer.purchases)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;

  @ManyToOne(() => User, (user) => user.purchases)
  @JoinColumn({ name: 'user_id' })
  user: User;

  get userId(): string {
    return typeof this.user === 'string' ? this.user : this.user.id;
  }
}
