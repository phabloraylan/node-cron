import { IJob } from '@shared/models/IJob';

export class FakeJob implements IJob {
  getCronTime(): string {
    return '* * * * * *';
  }

  doJob(): void {
    console.log('You will see this message every second');
  }
}
