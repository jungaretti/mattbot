import { join } from "path";
import { env } from "process";
import { AzureFunctionServer, SlashCreator } from "slash-create";

(async () => {
  const creator = new SlashCreator({
    applicationID: env.DISCORD_APP_ID,
    publicKey: env.DISCORD_PUBLIC_KEY,
    token: env.DISCORD_BOT_TOKEN,
  });

  await creator
    // The first argument is required, but rhe second argument is the "target" or the name of the export.
    // By default, the target is "interactions".
    .withServer(new AzureFunctionServer(module.exports))
    .registerCommandsIn(join(__dirname, "commands"));

  // If a guild have been specified, only sync the command with the guild
  if (env.COMMANDS_GUILD_ID) creator.syncCommandsIn(env.COMMANDS_GUILD_ID);
  else creator.syncCommands();
})();
