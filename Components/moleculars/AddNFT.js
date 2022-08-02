import Image from "next/image"
import Add from "../icons/Add"

const AddNFT = () => {
	return (
		<div className="rounded-lg m-1 bg-gray-200 text-center flex flex-col justify-center items-center cursor-pointer" style={{"width": "363px", "height": "363px"}}>
            <Add className="w-56 h-56"></Add>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-color-2"> See all NFTs from your wallet</p>
		</div>
	)
}

export default AddNFT