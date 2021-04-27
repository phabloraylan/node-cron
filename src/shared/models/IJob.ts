export interface IJob {
  getCronTime(): string;
  doJob(): void;
}
