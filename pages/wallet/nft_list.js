import Head from 'next/head'
import Image from 'next/image'

export default function NFTList() {
  return (
    <div>
        <div className='grid grid-cols-2'>
            <div>BIPLES</div>
            <div>Wallet address</div>
        </div>
        <div className='grid grid-cols-3'>
            <div>select a nft</div>
            <div>button</div>
            <div>From your wallet</div>
        </div>
        <div>
            NFT list
        </div>
        <div>
            Join a community
        </div>
    </div>
  )
}
