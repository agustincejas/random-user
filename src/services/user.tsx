import { RandomUserApiResponse } from "../interfaces/api";
import { IUser, IUserDetails } from "../interfaces/user";

const { VITE_API_URL } = import.meta.env;

export const getRandomUser = async(): Promise<IUserDetails> => {
  const response = await fetch(VITE_API_URL);
  const result  = await response.json() as RandomUserApiResponse;
  return mapToUserDetails(result.results[0]);
}


const mapToUserDetails = (user: IUser): IUserDetails => {
  return {
    first: user.name.first,
    last: user.name.last,
    country: user.location.country,
    picture: user.picture.large,
    thumbnail: user.picture.thumbnail
  }
}