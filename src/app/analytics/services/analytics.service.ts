import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class AnalyticsService {
  constructor(@InjectQueue('analytics') private analyticsQueue: Queue) {}

  sendAnalyticsEvent(purchaseData: any) {
    this.analyticsQueue.add({ purchaseData });
  }
}
