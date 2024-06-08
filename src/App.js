import Web3Modal from "web3modal";
import "./App.css";
import { useState } from "react";

const ethers = require("ethers");

const providerOptions = {};

function App() {
  const [web3Provider, setWeb3Provider] = useState(null);
  async function connectWallet() {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );
      console.log(web3ModalProvider);
      if (web3ModalProvider) {
        setWeb3Provider(web3ModalProvider);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web3Modal connection!!!</h1>
        {web3Provider == null ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <div>
            <p>Connected</p>
            <p>Address : {web3Provider.provider.selectedAddress}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
