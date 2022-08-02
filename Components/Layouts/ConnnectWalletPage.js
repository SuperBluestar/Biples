import Metamask from "../Icons/Metamask"
import RoundedButton from "../buttons/RoundedButton"
import HowToCreate from "../moleculars/HowToCreate"

const ConnectWalletPage = () => {
  return (
    <div className="bg-white h-screen rounded-md p-8">
      <div className="flex justify-between items-end">
        <span>Back</span>
        <span className="font-bold text-xl">Connect your wallet</span>
        <span></span>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="flex p-8 justify-between">
          <div>
            <div className="rounded-full border-color-1 border-2 flex justify-center p-8">
              <Metamask />
            </div>
            <div className="text-center m-4">Metamask wallet</div>
            <RoundedButton title="Connect"></RoundedButton>
          </div>
          <div>
            <div className="rounded-full border-color-1 border-2 flex justify-center p-8">
              <Metamask />
            </div>
            <div className="text-center m-4">Phantom wallet</div>
            <RoundedButton title="Connect"></RoundedButton>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg my-4">Remind me Later</p>
          <p>Read-only access is given to verify the token holding of the wallet that is available on the blockchain.</p>
          <p>This does not give Biples access to your funds or the power to act on your behalf.</p>
          <hr className="my-4"></hr>
        </div>
      </div>
      <HowToCreate></HowToCreate>
    </div>
  )
}

export default ConnectWalletPage