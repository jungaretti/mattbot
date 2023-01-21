# MattBot

Need help picking a movie? [Invite MattBot to join your Discord server!](https://discord.com/api/oauth2/authorize?client_id=862484713884221452&permissions=0&scope=bot%20applications.commands)

## Commands

MattBot is a Discord bot whose sole purpose is to recommend movies starring Matthew McConaughey.

- `ping`: Make sure that MattBot is awake
- `movie`: Recommend a movie starring Matthew McConaughey

## Deployment

```bash
npm install
az login

# Deploy to MattBot Dev
npx func azure functionapp publish mattbot-dev --typescript --no-build
```

The [`deploy-azure-functions.yml`](https://github.com/jungaretti/mattbot/blob/main/.github/workflows/deploy-azure-functions.yml) workflow continuously deploys MattBot to Azure. It uses an Azure service principal for authentication.
