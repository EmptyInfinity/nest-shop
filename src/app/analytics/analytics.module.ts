import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AnalyticsProcessor } from './processors/analytics.processor';
import { AnalyticsService } from './services';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'analytics',
    }),
  ],
  providers: [AnalyticsService, AnalyticsProcessor],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
