export type Location = {
  street: { name: string, number: number };
  city: string;
  country: string;
  postcode: string;
  state: string;
  coordinates: { latitude: string, longitude: string };
  timezone: { description: string, offset: string };
};

export type Login = {
  md5: string;
  password: string;
  salt: string
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
};

export type User = {
  cell: string;
  dob: { age: number, date: string };
  email: string;
  gender: string;
  id: { name: string, value: string };
  location: Location;
  login: Login;
  name: { first: string, last: string, title: string };
  nat: string;
  phone: string;
  picture: { large: string, medium: string, thumbnail: string };
  registered: { date: string, age: number };
};