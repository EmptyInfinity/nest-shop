import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from '../entities';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private offersRepository: Repository<Offer>,
  ) {}

  async create(payload: any): Promise<Offer> {
    const [offer] = this.offersRepository.create([payload]);
    await this.offersRepository.save(offer);
    return offer;
  }

  findAll(): Promise<Offer[]> {
    return this.offersRepository.find();
  }

  findOne(id: string): Promise<Offer | null> {
    return this.offersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.offersRepository.delete(id);
  }
}
