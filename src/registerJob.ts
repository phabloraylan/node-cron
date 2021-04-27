import { TestJob } from '@jobs/TestJob';
import { DoJobService } from '@shared/services/DoJobService';
import { container } from 'tsyringe';

export default () => {
  container.resolve(DoJobService).execute(new TestJob());
};
