import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePurchaseDto } from '../schemas';
import { PurchasesService } from '../services';
import { Purchase } from '../entities';

@Controller('purchases')
export class PurchasesController {
  constructor(private purchasesService: PurchasesService) {}

  @Post()
  create(@Body() createPurchaseDto: CreatePurchaseDto): Promise<Purchase> {
    return this.purchasesService.create(createPurchaseDto);
  }

  @Get()
  async findAll(): Promise<Purchase[]> {
    return this.purchasesService.findAll();
  }
}
