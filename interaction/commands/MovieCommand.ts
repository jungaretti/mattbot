import { CommandContext, SlashCommand, SlashCreator } from "slash-create";
import { Greeting, greetings } from "./lib/Greeting";
import { Movie, movies } from "./lib/Movie";
import { randomElement } from "./lib/Random";

export class MovieCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: "movie",
      description: "Recommend a movie starring Matthew McConaughey",
    });
  }

  async run(ctx: CommandContext): Promise<string> {
    const movie = randomElement<Movie>(movies);
    const greeting = randomElement<Greeting>(greetings);

    return greeting(movie);
  }
}
