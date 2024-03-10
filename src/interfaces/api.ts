import { IUser } from "./user";

export interface RandomUserApiResponse {
  results: IUser[];
  info: Info;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}