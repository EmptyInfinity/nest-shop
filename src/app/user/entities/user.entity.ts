import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Purchase } from '../../purchase/entities';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Purchase, (purchase) => purchase.offer)
  purchases: Purchase[];
}
