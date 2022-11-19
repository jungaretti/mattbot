import { CommandContext, SlashCommand, SlashCreator } from "slash-create";

interface Movie {
  title: string;
  year: number;
}

const movies: Movie[] = [
  { title: "Dazed and Confused", year: 1993 },
  { title: "Boys on the Side", year: 1995 },
  { title: "A Time to Kill", year: 1996 },
  { title: "Contact", year: 1997 },
  { title: "Amistad", year: 1997 },
  { title: "The Newton Boys", year: 1998 },
  { title: "U-571", year: 2000 },
  { title: "How to Lose a Guy in 10 Days", year: 2003 },
  { title: "Sahara", year: 2005 },
  { title: "Two for the Money", year: 2005 },
  { title: "Failure to Launch", year: 2006 },
  { title: "Fool's Gold", year: 2008 },
  { title: "Ghosts of Girlfriend Past", year: 2009 },
  { title: "The Lincoln Lawyer", year: 2011 },
  { title: "Killer Joe", year: 2011 },
  { title: "Magic Mike", year: 2012 },
  { title: "Dallas Buyers Club", year: 2013 },
  { title: "Free State of Jones", year: 2016 },
];

type GreetingBuilder = (Movie) => string;

const greetingBuilders: GreetingBuilder[] = [
  (m) => `You should watch ${m.title}. I'll make the popcorn!`,
  (m) => `${m.title} is one of my all-time favorites`,
  (m) => `Alright, alright alright! I choose ${m.title}`,
  (m) => `Have you seen ${m.title}?`,
];

const randomElement = <T>(elements: T[]): T => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

export class MovieCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: "movie",
      description: "Recommend a movie starring Matthew McConaughey",
    });
  }

  async run(ctx: CommandContext): Promise<string> {
    return randomElement<GreetingBuilder>(greetingBuilders)(
      randomElement<Movie>(movies)
    );
  }
}
