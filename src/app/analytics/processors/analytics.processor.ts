import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import axios from 'axios';

@Processor('analytics')
export class AnalyticsProcessor {
  @Process()
  async handleAnalyticsEvent(job: Job) {
    const { purchaseData } = job.data;
    console.log('Sending analytics event:', purchaseData);
    const analyticsResult = await axios.get('https://randomuser.me/api');
    console.log('Sending analytics result', analyticsResult.data);
  }
}
