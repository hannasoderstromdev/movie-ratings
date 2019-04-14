export interface MovieType {
  country: string;
  genres: {};
  language: string;
  title: string;
  year: string;
  runtime: string;
  director: string;
  actors: string;
  plot: string;
  poster: string;
  production: string;
  ratings: {
    Source: string,
    Value: string,
  }[];
  rating: number;
  released: string;
  writer: string;
}
