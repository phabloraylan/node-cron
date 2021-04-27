import { FakeCronProvider } from '@shared/providers/CronProvider/fakes/FakeCronProvider';
import { ICronProvider } from '@shared/providers/CronProvider/models/ICronProvider';
import { FakeJob } from '@shared/models/fakes/FakeJob';
import { IJob } from '@shared/models/IJob';
import { DoJobService } from '.';

let doJobService: DoJobService;
let job: IJob;
let cronProvider: ICronProvider;
describe('DoJobService', () => {
  beforeEach(() => {
    job = new FakeJob();
    cronProvider = new FakeCronProvider();
    doJobService = new DoJobService(cronProvider);
  });

  it('do job', async () => {
    await doJobService.execute(job);
  });
});
