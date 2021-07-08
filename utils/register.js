const Discord = require("./discord");
const commands = require("../commands");

// prettier-ignore
// Global application commands
const global = "https://discord.com/api/v8/applications/862484713884221452";

// prettier-ignore
// Testing guild application commands
const testing = "https://discord.com/api/v8/applications/862484713884221452/guilds/862491867475738624/commands";

Discord.registerCommand(testing, commands[0]);
