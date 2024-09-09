import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Purchase } from '../../purchase/entities';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @OneToMany(() => Purchase, (purchase) => purchase.offer)
  purchases: Purchase[];
}
