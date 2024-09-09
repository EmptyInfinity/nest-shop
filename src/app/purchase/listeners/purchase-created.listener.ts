import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { PurchaseCreatedEvent } from '../events';
import { AnalyticsService } from '../../analytics/services';
import { UsersService } from '../../user/services';

@Injectable()
export class PurchaseCreatedListener {
  constructor(
    private analyticsService: AnalyticsService,
    private usersService: UsersService,
    @InjectQueue('email') private emailQueue: Queue,
  ) {}

  @OnEvent('purchase.created')
  async handlePurchaseCreatedEvent(event: PurchaseCreatedEvent) {
    this.analyticsService.sendAnalyticsEvent(event);

    const user = await this.usersService.findOne(event.purchase.userId);
    if (!user) return;

    const emailData = {
      email: user.email,
      subject: 'Astrological report title',
      text: 'Astrological report text',
    };
    await this.emailQueue.add(emailData, { delay: 24 * 60 * 60 * 1000 }); // 24 hours delay
  }
}
