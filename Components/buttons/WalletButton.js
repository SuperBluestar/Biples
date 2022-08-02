const WalletButton  = ({address}) => {
	return (
		<div className="bg-gray-300 flex justify-center py-2 px-4 rounded-md cursor-pointer">
			<p>Welcom <span className="font-bold"> { address } </span></p>
		</div>
	)
}

export default WalletButton