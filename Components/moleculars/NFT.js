import Image from "next/image"
import GradientButton from "../buttons/GradientButton"
import ArrowRight from "../icons/ArrowRight"
import styles from '../../styles/moleculars/NFT.module.css';

const NFT = ({img_url, title}) => {
	return (
		<div className="rounded-lg m-1">
			<div className={`flex justify-center items-center relative cursor-pointer ${styles['img-container']}`}>
				<Image className="rounded-t-md hover:transform hover:scale-125 hover:duration-300" src={img_url} alt="No Image" width="363px" height="363px"/>
				<div className={`flex absolute top-8 left-5 box-border rounded-md bg-white items-center ${styles['effective-part']}`}>
					<GradientButton title="Join the community" className="rounded-l-md bg-gradient-to-r from-color-1 to-color-2"></GradientButton>
					<ArrowRight className="mx-3"></ArrowRight>
				</div>
			</div>
			<div className="bg-dark-grey p-2 rounded-b-md">
				<span className="text-white">{title}</span>
			</div>
		</div>
	)
}

export default NFT