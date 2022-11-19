import { join } from "path";
import { env } from "process";
import { AzureFunctionServer, SlashCreator } from "slash-create";
import { MovieCommand } from "./commands/movie";
import { PingCommand } from "./commands/ping";

(async () => {
  const creator = new SlashCreator({
    applicationID: env.DISCORD_APP_ID,
    publicKey: env.DISCORD_PUBLIC_KEY,
    token: env.DISCORD_BOT_TOKEN,
  });

  await creator
    .withServer(new AzureFunctionServer(module.exports))
    .registerCommands([new PingCommand(creator), new MovieCommand(creator)])
    .syncCommandsAsync();
})();
