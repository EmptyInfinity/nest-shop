import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EmailProcessor } from './processors';
import { MailerService } from './services';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  providers: [EmailProcessor, MailerService],
  exports: [MailerService, BullModule],
})
export class EmailModule {}
