import { useContext } from "react";
import { Web3Context } from "../../context/web3Context";
import Metamask from "../Icons/Metamask"
import GradientButton from "../buttons/GradientButton"

const ConnectWallet = () => {
  const { connect, disconnect, active, connecting } = useContext(Web3Context);
  const onClickHandler = () => {
    if (connecting) {

    } else if (active) {
      disconnect();
    } else {
      connect();
    }
  };
  const buttonLabel = connecting ? "Connecting ..." : (
    active ? "Disconnect Wallet" : "Connect Wallet"
  );
  return (
    <div>
      <div className="rounded-full border-color-1 border-2 flex justify-center p-8 bg-gray-100">
        <Metamask />
      </div>
      <div className="text-center m-4">Metamask wallet</div>
      <GradientButton onClickHandler={active ? () => { } : onClickHandler} title={active ? "Connected" : "Connect"} className="rounded-full bg-gradient-to-r from-color-1 to-color-2"></GradientButton>
    </div>
  )
}

export default ConnectWallet