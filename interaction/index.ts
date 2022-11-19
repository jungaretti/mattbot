import { config } from "dotenv";
import { env } from "process";
import { AzureFunctionServer, SlashCreator } from "slash-create";
import { MovieCommand } from "./commands/MovieCommand";
import { PingCommand } from "./commands/PingCommand";

(async () => {
  config();
  const creator = new SlashCreator({
    applicationID: env.DISCORD_APP_ID,
    publicKey: env.DISCORD_APP_PUBLIC_KEY,
    token: env.DISCORD_BOT_TOKEN,
  });

  const commands = [new PingCommand(creator), new MovieCommand(creator)];

  await creator
    .withServer(new AzureFunctionServer(module.exports))
    .registerCommands(commands)
    .syncCommandsAsync();
})();
