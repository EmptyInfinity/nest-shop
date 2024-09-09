import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { MailerService } from '../services';

@Processor('email')
export class EmailProcessor {
  constructor(private mailerService: MailerService) {}

  @Process()
  async handleEmailJob(job: Job) {
    const { email, subject, text } = job.data;
    await this.mailerService.sendEmail(email, subject, text);
  }
}
