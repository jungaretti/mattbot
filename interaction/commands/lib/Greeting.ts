import { Movie } from "./Movie";

export type Greeting = (movie: Movie) => string;

export const greetings: Greeting[] = [
  (m) => `You should watch ${m.title}. I'll make the popcorn!`,
  (m) => `${m.title} is one of my all-time favorites`,
  (m) => `Alright, alright alright! I choose ${m.title}`,
  (m) => `Have you seen ${m.title}?`,
];
