import { CommandContext, SlashCommand, SlashCreator } from "slash-create";

export class PingCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: "ping",
      description: "My rule is to break one sweat a day",
    });
  }

  async run(ctx: CommandContext): Promise<string> {
    return "Alright, alright, alright!";
  }
}
