import { ICronProvider } from '../models/ICronProvider';

export class FakeCronProvider implements ICronProvider {
  async doJob(cronTime: string, onTick: () => void): Promise<void> {
    console.log(`cronTime: ${cronTime}`);
    onTick();
  }
}
