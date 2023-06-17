# MattBot

[![Release MattBot](https://github.com/jungaretti/mattbot/actions/workflows/release.yml/badge.svg)](https://github.com/jungaretti/mattbot/actions/workflows/release.yml)

Need help picking a movie? [Invite MattBot to join your Discord server!](https://discord.com/api/oauth2/authorize?client_id=862484713884221452&permissions=0&scope=bot%20applications.commands)

## Getting Started

MattBot is a Discord bot whose sole purpose is to recommend movies starring Matthew McConaughey. It offers two slash commands:

- `ping`: Make sure that MattBot is awake
- `movie`: Recommend a movie starring Matthew McConaughey

## Development

MattBot is a simple TypeScript app. It uses [`slash-create`](https://github.com/Snazzah/slash-create) and runs on Azure Functions.

### Run Locally

The fastest way to test your changes is to run MattBot locally, forward its port, and update `MattBot Dev`'s interactions endpoint URL to that forwarded port.

1. `cp .example.env .env`
1. [Visit `MattBot Dev` on the Discord Developer Portal](https://discord.com/developers/applications/1043439421632036964/information)
1. Update `.env` with `MattBot Dev`'s information
1. `npm install`
1. `npm run dev`
1. Forward the port
1. Update `MattBot Dev`'s endpoint URL [on the Discord Developer Portal](https://discord.com/developers/applications/1043439421632036964/information)

### Deploy to Staging

You can use [`mattbot-dev`](https://portal.azure.com/#@jungarettioutlook.onmicrosoft.com/resource/subscriptions/766d1f2a-4758-42f6-b770-355bd807d6ac/resourceGroups/mattbot-dev-usc/providers/Microsoft.Web/sites/mattbot-dev/appServices) to test your changes in a real Azure Functions app.

1. `az login`
1. `npm install`
1. `npm run publish:dev`
1. Update `MattBot Dev`'s endpoint URL [on the Discord Developer Portal](https://discord.com/developers/applications/1043439421632036964/information) to `https://mattbot-dev.azurewebsites.net/api/interaction`

### Deploy to Production

You can use the [`Release MattBot`](https://github.com/jungaretti/mattbot/actions/workflows/release.yml) action to trigger a new production release. This action uses an Azure service principal to deploy [`mattbot`](https://portal.azure.com/#@jungarettioutlook.onmicrosoft.com/resource/subscriptions/766d1f2a-4758-42f6-b770-355bd807d6ac/resourceGroups/mattbot-usc/providers/Microsoft.Web/sites/mattbot/appServices) globally for all Discord users.
