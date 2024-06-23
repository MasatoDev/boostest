type From = {
  country: string;
  city: string;
};

interface Details {
  parentName: string;
}

export interface User {
  name: string;
  age: number;
  sex: number;
  from: From;
  details: Details;
}
