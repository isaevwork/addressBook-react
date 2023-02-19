export interface Adress {
  street: string;
  city: string;
}

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  adress: Adress;
}
