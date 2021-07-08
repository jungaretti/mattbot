const dotenv = require("dotenv");
const fetch = require("node-fetch");

// Load environment variables from .env
dotenv.config();

function registerCommand(url, command) {
  // prettier-ignore
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
    },
    body: JSON.stringify(command),
  };

  fetch(url, options).then((res) => console.log(`Status ${res.status}`));
}

module.exports = {
  registerCommand,
};
