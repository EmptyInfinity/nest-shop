import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from '../entities';
import { CreatePurchaseDto } from '../schemas';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PurchaseCreatedEvent } from '../events';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private purchasesRepository: Repository<Purchase>,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(payload: CreatePurchaseDto): Promise<Purchase> {
    const [purchase] = this.purchasesRepository.create([payload]);
    const savedPurchase = await this.purchasesRepository.save(purchase);
    this.eventEmitter.emit(
      'purchase.created',
      new PurchaseCreatedEvent(savedPurchase),
    );
    return savedPurchase;
  }

  findAll(): Promise<Purchase[]> {
    return this.purchasesRepository.find();
  }

  findOne(id: string): Promise<Purchase | null> {
    return this.purchasesRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.purchasesRepository.delete(id);
  }
}
