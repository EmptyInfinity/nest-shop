import { Module } from '@nestjs/common';
import { OffersService } from './services';
import { OffersController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Offer])],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OfferModule {}
