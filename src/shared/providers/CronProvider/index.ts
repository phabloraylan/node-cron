import { container } from 'tsyringe';
import { CronLibProvider } from './implementations/CronLibProvider';
import { ICronProvider } from './models/ICronProvider';

const providers = {
  cronLib: CronLibProvider,
};

container.registerSingleton<ICronProvider>('CronProvider', providers.cronLib);
