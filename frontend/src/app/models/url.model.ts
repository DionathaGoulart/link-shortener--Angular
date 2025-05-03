export interface Url {
  _id?: string;
  urlCode: string;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  date: Date;
}