export interface IUser {
  name: Name;
  picture: Picture;
  location: Location;
  id: Id
}

interface Id {
  name: string;
  value: string;
}
export interface IUserDetails {
  id: string;
  first: string;
  last: string;
  country: string;
  picture: string;
  thumbnail: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Location {
  country: string;
}