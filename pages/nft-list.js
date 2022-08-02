import WalletButton from "../Components/buttons/WalletButton"
import GradientButton from "../Components/buttons/GradientButton"
import NFT from "../Components/moleculars/NFT"

export default function NFTList() {

  return (
    <div className="px-16 py-8 bg-gray-200 h-screen">
      <div className="bg-white h-16 rounded-sm px-8 flex items-center justify-between mb-4">
			  <p className="text-3xl font-bold"><span className="text-blue-600">BIP</span>LES</p>
        <WalletButton address="234DKFJ34JDFJ"></WalletButton>
      </div>
      <div className="bg-white px-16 py-8">
        <div className="flex justify-between items-center my-4">
          <span>Select a NFT</span>
          <GradientButton title="Create a community"></GradientButton>
          <span>From your wallet</span>
        </div>
        <hr className="my-4"></hr>
        <div className="flex flex-wrap mb-4">
          <NFT title="#8200" img_url="/1.png"></NFT>
          <NFT title="DOGGY #4812" img_url="/2.png"></NFT>
          <NFT title="#8200" img_url="/1.png"></NFT>
          <NFT title="#8200" img_url="/1.png"></NFT>
        </div>
        <GradientButton title="Join a community manually" className="w-64 mx-auto"></GradientButton>
      </div>
    </div>
  )
}
