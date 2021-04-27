import 'reflect-metadata';
import { ICronProvider } from '@shared/providers/CronProvider/models/ICronProvider';
import { IJob } from '@shared/models/IJob';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DoJobService {
  constructor(
    @inject('CronProvider')
    private cronProvider: ICronProvider,
  ) {}

  async execute(job: IJob): Promise<void> {
    await this.cronProvider.doJob(job.getCronTime(), job.doJob);
  }
}
