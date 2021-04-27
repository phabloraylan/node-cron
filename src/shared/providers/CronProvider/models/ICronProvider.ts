export interface ICronProvider {
  doJob(cronTime: string, onTick: () => void): Promise<void>;
}
