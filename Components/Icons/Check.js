import Image from "next/image";

const Check = ({ className="" }) => {
	return (
		<Image className={className} width="16px" height="16px" src="/check.png" alt="No Image"></Image>
	)
}

export default Check;