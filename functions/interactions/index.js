const nacl = require("tweetnacl");
const movies = require("./movies");

// "You must validate the request each time you receive an interaction."
// https://discord.com/developers/docs/interactions/slash-commands#security-and-authorization
function verifyRequest(req) {
  // prettier-ignore
  const publicKey="71c0aebfcef970766575bc42497d1b9334b97b62fd6879a88d4a815f8536f864";
  const signature = req.headers["x-signature-ed25519"];
  const timestamp = req.headers["x-signature-timestamp"];

  // Invalid requests may not have those headers
  return (
    signature &&
    timestamp &&
    nacl.sign.detached.verify(
      Buffer.from(timestamp + req.rawBody),
      Buffer.from(signature, "hex"),
      Buffer.from(publicKey, "hex")
    )
  );
}

function pickRandom(elements) {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}

function buildRecommendation(movie) {
  // Build a recommendation using one of these templates
  const options = [
    `You should watch ${movie.title}. I'll make the popcorn!`,
    `${movie.title} is one of my all-time favorites`,
    `Alright, alright alright! I choose ${movie.title}`,
    `Have you seen ${movie.title}?`,
  ];

  return pickRandom(options);
}

const resInv = () => {
  return {
    status: 401,
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      error: "Invalid request signature",
    },
  };
};

const resAck = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      type: 1,
    },
  };
};

const resMsg = (content) => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      type: 4,
      data: {
        content,
      },
    },
  };
};

module.exports = async function (context, req) {
  if (!verifyRequest(req)) {
    // Ignore unsigned requests
    context.res = resInv();
    return;
  }

  const interaction = req.body;
  if (interaction.type === 1) {
    // Acknowledge pings
    context.res = resAck();
  } else {
    // Reply to interactions
    switch (interaction.data.name) {
      case "movie":
        const movie = pickRandom(movies);
        context.res = resMsg(buildRecommendation(movie));
        break;
      default:
        context.res = resMsg("Alright, alright, alright!");
        break;
    }
  }
};
