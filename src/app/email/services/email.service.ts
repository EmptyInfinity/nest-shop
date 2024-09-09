import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MailerService {
  async sendEmail(to: string, subject: string, text: string) {
    try {
      const response = await axios.post(
        'https://webhook.site/7a1ea0ec-8983-4172-9a59-7b68586c2b66',
        {
          to,
          subject,
          text,
        },
      );

      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
