import { CommandContext, SlashCommand, SlashCreator } from "slash-create";

export class PingCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: "ping",
      description: "Says hello to you.",
    });

    this.filePath = __filename;
  }

  async run(ctx: CommandContext): Promise<any> {
    return "Alright, alright, alright!";
  }
}
