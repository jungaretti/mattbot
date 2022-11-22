import { Movie } from "./Movie";

export type Greeting = (movie: Movie) => string;

export const greetings: Greeting[] = [
  (m) => `You should watch ${m.title}. I'll make the popcorn!`,
  (m) => `${m.title} is one of my all-time favorites`,
  (m) => `Have you seen ${m.title}?`,
  (m) => `${m.title} is a CLASSIC!`,
  (m) => `Grab a drink and turn on ${m.title}`,
  (m) => `You gotta watch ${m.title}`,
];
