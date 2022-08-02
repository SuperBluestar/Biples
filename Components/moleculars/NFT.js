import Image from "next/image"

const NFT = ({img_url, title}) => {
	return (
		<div className="rounded-lg m-1">
			<div className="flex justify-center items-center">
				<Image className="rounded-t-md" src={img_url} alt="No Image" width="363px" height="363px"/>
			</div>
			<div className="bg-dark-grey p-2 rounded-b-md">
				<span className="text-white">{title}</span>
			</div>
		</div>
	)
}

export default NFT