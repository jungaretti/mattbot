import { CommandContext, SlashCommand, SlashCreator } from "slash-create";
import { Quote, quotes } from "./lib/Quote";
import { randomElement } from "./lib/Random";

export class QuoteCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: "quote",
      description: "Share an iconic Matthew McConaughey quote",
    });
  }

  async run(ctx: CommandContext): Promise<string> {
    const quote = randomElement<Quote>(quotes);
    return `"${quote.text}" — ${quote.movie}`;
  }
}
