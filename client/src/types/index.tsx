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

export interface User {
  user: {
    profile: {
      user: {
        role: string,
        firstName: string,
        lastName: string,
        email: string,
      },
    },
    loggedIn: boolean,
  };
}

// export interface Genres {
//   any: {
//     name: string,
//   };
// }
