import { Module } from '@nestjs/common';
import { PurchasesService } from './services';
import { PurchasesController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './entities';
import { AnalyticsModule } from '../analytics/analytics.module';
import { EmailModule } from '../email/email.module';
import { PurchaseCreatedListener } from './listeners';
import { UserModule } from '../user/user.module';
import { PurchaseCreatedEvent } from './events';

@Module({
  imports: [
    TypeOrmModule.forFeature([Purchase]),
    AnalyticsModule,
    EmailModule,
    UserModule,
  ],
  controllers: [PurchasesController],
  providers: [PurchasesService, PurchaseCreatedEvent, PurchaseCreatedListener],
})
export class PurchaseModule {}
