const dotenv = require("dotenv");
const fetch = require("node-fetch");

// Load environment variables from .env
dotenv.config();

async function verboseFetch(url, options) {
  const res = await fetch(url, options);
  const json = await res.json();
  console.log(`Status ${res.status}`);
  console.log(json);
}

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

  verboseFetch(url, options);
}

module.exports = {
  registerCommand,
};
