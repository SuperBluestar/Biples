import WalletButton from "../Components/buttons/WalletButton"
import GradientButton from "../Components/buttons/GradientButton"
import NFT from "../Components/moleculars/NFT"
import AddNFT from "../Components/moleculars/AddNFT"
import { Web3Context } from "../context/web3Context"
import { useContext, useEffect, useState } from "react"
import Link from "next/link";

export default function NFTList() {
  const { active, account } = useContext(Web3Context);
  const [ownNfts, setOwnNfts] = useState([]);
  useEffect(() => {
    if (active && account) {
      const baseURL = "https://eth-mainnet.g.alchemy.com/v2/s_99NmPZlkj0YUF_cRbew-tH5VauKk9V";
      const address = account;
      const url = `${baseURL}/getNFTs/?owner=${address}`;

      var requestOptions = {
        method: 'get',
        redirect: 'follow'
      };
      fetch(url, requestOptions)
        .then(response => {
          console.log(response)
          return response.json()
        })
        .then(data => {
          setOwnNfts(data.ownedNfts)
          console.log(data)
        })
        .catch(error => console.log('error', error))
    }
  }, [active, account]);
  return (
    <div className="px-16 py-8 bg-gray-200 h-screen">
      <div className="bg-white h-16 rounded-sm px-8 flex items-center justify-between mb-4">
        <p className="text-3xl font-bold"><span className="text-blue-600">BIP</span>LES</p>
        {active ? <WalletButton address={account}></WalletButton> : <Link href="wallet">Go to Login</Link>}
      </div>
      <div className="bg-white px-16 py-8">
        <div className="flex justify-between items-center my-4">
          <span>Select a NFT</span>
          <GradientButton title="Create a community" className="bg-gradient-to-r from-color-1 to-color-2"></GradientButton>
          <span>From your wallet</span>
        </div>
        <hr className="my-4"></hr>
        <div className="flex flex-wrap mb-4">
          {ownNfts.map(nft => <NFT title={nft.metadata.name} img_url={nft.metadata.image}></NFT>)}
          <AddNFT></AddNFT>
        </div>
        <GradientButton title="Join a community manually" className="w-64 mx-auto bg-gray-300" className_text="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-2"></GradientButton>
      </div>
    </div>
  )
}
