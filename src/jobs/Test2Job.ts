import { IJob } from '@shared/models/IJob';

export class Test2Job implements IJob {
  getCronTime(): string {
    return '* * * * * *';
  }

  doJob(): void {
    console.log('Isso é outro exemplo de trabalho a cada segundo');
  }
}
