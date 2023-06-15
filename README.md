# MattBot

[![Release MattBot](https://github.com/jungaretti/mattbot/actions/workflows/release.yml/badge.svg)](https://github.com/jungaretti/mattbot/actions/workflows/release.yml)

Need help picking a movie? [Invite MattBot to join your Discord server!](https://discord.com/api/oauth2/authorize?client_id=862484713884221452&permissions=0&scope=bot%20applications.commands)

## Commands

MattBot is a Discord bot whose sole purpose is to recommend movies starring Matthew McConaughey.

- `ping`: Make sure that MattBot is awake
- `movie`: Recommend a movie starring Matthew McConaughey

## Deployment

MattBot runs on Azure Functions. `mattbot-dev` is a staging app for testing new features. `mattbot` is the production app.

### `mattbot-dev`

Use the following script to deploy `mattbot-dev` to Azure Functions.

```bash
npm install
az login

npx func azure functionapp publish mattbot-dev --typescript --no-build
```

### `mattbot`

Use the [`Release MattBot`](https://github.com/jungaretti/mattbot/actions/workflows/release.yml) action to trigger a new release. This workflow deploys `mattbot` to Azure Functions. It uses an Azure service principal for authentication. Once the workflow finishes, MattBot is updated globally for all Discord users.
