import ControllerConnector from "@cartridge/connector";

const ETH_TOKEN_ADDRESS = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";

const connector = new ControllerConnector({
  policies: [
    {
      target: ETH_TOKEN_ADDRESS,
      method: "approve",
      description: "Authorize wallet connection to start the game.",
    },
    {
      target: ETH_TOKEN_ADDRESS,
      method: "transfer",
    },
  ],
  rpc: "https://api.cartridge.gg/x/starknet/sepolia",
});

export default connector;
