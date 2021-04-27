import { IJob } from '@shared/models/IJob';

export class TestJob implements IJob {
  getCronTime(): string {
    return '* * * * * *';
  }

  doJob(): void {
    console.log('Isso é um exemplo de trabalho a cada segundo');
  }
}
