const nacl = require("tweetnacl");

function verifyRequest(req) {
  // prettier-ignore
  const publicKey="71c0aebfcef970766575bc42497d1b9334b97b62fd6879a88d4a815f8536f864";
  const signature = req.headers["x-signature-ed25519"];
  const timestamp = req.headers["x-signature-timestamp"];

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
    switch (interaction.command) {
      default:
        context.res = resMsg("Alright, alright, alright!");
        break;
    }
  }
};
