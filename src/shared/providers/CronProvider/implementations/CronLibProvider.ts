import { CronJob } from 'cron';
import { ICronProvider } from '../models/ICronProvider';

export class CronLibProvider implements ICronProvider {
  async doJob(cronTime: string, onTick: () => void): Promise<void> {
    const job = new CronJob(cronTime, onTick, null, true, 'America/Sao_Paulo');
    job.start();
  }
}
