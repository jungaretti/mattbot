const Discord = require("./discord");
const commands = require("../commands");

// prettier-ignore
// Global application commands
const global = "https://discord.com/api/v8/applications/862484713884221452/commands";

// prettier-ignore
// Testing guild application commands
const testing = "https://discord.com/api/v8/applications/862484713884221452/guilds/862491867475738624/commands";

const url = process.env.NODE_ENV === "production" ? global : testing;

Discord.registerCommand(url, commands[0]);
