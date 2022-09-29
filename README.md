## Web3.js Websocket Timeout Behavior

### Setup

1. `npm i`
2. Add a websocket endpoint to the `.env` (e.g. through [Infura](https://infura.io))

### Running

1. `npm start`
2. Let at least 1 request go through successfully
3. Pull your internet connection

--

4. **Expected:** after 1 second the websocket tries reconnecting, which fails after 1 attempt

--

4. **Actual:** the app hangs infinitely
