import Web3 from 'web3';
import pLimit from 'p-limit'
import { config } from 'dotenv';
config();

const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.WEBSOCKET_ENDPOINT,
{
    clientConfig: {
      // Useful to keep a connection alive
      keepalive: true,
      keepaliveInterval: 5000, // ms
    },
    // Enable auto reconnection
    reconnect: {
      auto: true,
      delay: 1000, // ms
      maxAttempts: 1,
      onTimeout: true,
    },
    timeout: 1000,
  }));

const limiter = pLimit(1);
const printGasPrice = async () => {
    console.log("Fetching gas price")
    const gasPrice = await web3.eth.getGasPrice();
    console.log(`Fetched gas price: ${gasPrice}`);
};

setInterval(() => {
    limiter(printGasPrice);
}, 5000)