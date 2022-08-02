import SideBar from "../../Components/layouts/SideBar"
import ConnectWalletPage from "../../Components/layouts/ConnnectWalletPage"

export default function Wallet() {
  return (
    <div className="px-16 py-8 bg-gray-200 h-screen">
        <div className='grid grid-cols-5 gap-4'>
            <div className='col-span-1'>
              <SideBar></SideBar>
            </div>
            <div className='col-span-4'>
              <ConnectWalletPage></ConnectWalletPage>
            </div>
        </div>
    </div>
  )
}
