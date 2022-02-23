# MattBot

Need help picking a movie? [Invite MattBot to join your Discord server!](https://discord.com/api/oauth2/authorize?client_id=862484713884221452&permissions=0&scope=bot%20applications.commands)

## Commands

MattBot is a Discord bot whose sole purpose is to recommend movies starring Matthew McConaughey.

- `ping`: Make sure that MattBot is awake
- `movie`: Recommend a movie starring Matthew McConaughey

## Getting Started

MattBot is deployed with Azure Functions. Each time someone uses one of MattBot's Slash Commands, an Interaction is POSTed to `interaction/index.js`. For more information about Slash Commands and Interactions, [check out the Discord Developer Portal](https://discord.com/developers/docs/interactions/slash-commands).
