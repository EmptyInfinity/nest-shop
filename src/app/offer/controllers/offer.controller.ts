import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateOfferDto } from '../schemas';
import { OffersService } from '../services';
import { Offer } from '../interfaces';

@Controller('offers')
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Post()
  create(@Body() createOfferDto: CreateOfferDto): Promise<Offer> {
    return this.offersService.create(createOfferDto);
  }

  @Get()
  async findAll(): Promise<Offer[]> {
    return this.offersService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} offer`;
  }
}
