import { TestJob } from '@jobs/TestJob';
import { Test2Job } from '@jobs/Test2Job';
import { DoJobService } from '@shared/services/DoJobService';
import { container } from 'tsyringe';

export default () => {
  container.resolve(DoJobService).execute(new TestJob());
  container.resolve(DoJobService).execute(new Test2Job());
};
