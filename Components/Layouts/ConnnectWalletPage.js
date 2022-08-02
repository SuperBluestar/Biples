import PhantomWallet from "../Icons/PhantomWallet"
import Check from "../Icons/Check"
import ArrowLeft from "../Icons/ArrowLeft"
import GradientButton from "../buttons/GradientButton"
import HowToCreate from "../moleculars/HowToCreate"
import ConnectWallet from "../wallet/wallet-connect"
import Link from 'next/link'

const ConnectWalletPage = () => {
  return (
    <div className="bg-white h-screen rounded-md p-8">
      <div className="flex justify-between items-end">
        <Link href="/nft-list">
          <div className="flex justify-between items-center" >
            <ArrowLeft></ArrowLeft>
            <span>Back</span>
          </div>
        </Link>
        <span className="font-bold text-xl">Connect your wallet</span>
        <span></span>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="flex p-8 justify-between">
          <ConnectWallet />
          <div>
            <div className="rounded-full border-color-1 border-2 flex justify-center p-8 bg-gray-100">
              <PhantomWallet />
            </div>
            <div className="text-center m-4">Phantom wallet</div>
            <GradientButton title="Connect" className="rounded-full bg-gradient-to-r from-color-1 to-color-2"></GradientButton>
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <Check className="w-8 h-8"></Check>
            <span className="text-lg font-bold my-4 text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-2">&nbsp; Remind me Later</span>
          </div>
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