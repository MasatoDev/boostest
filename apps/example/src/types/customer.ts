export type Rank = {
  name: string;
  benefits: string;
};

export class Customer {
  name: string;
  age: number;
  rank: Rank;

  constructor(name: string, age: number, rank: Rank) {
    this.name = name;
    this.age = age;
    this.rank = rank;
  }
}
