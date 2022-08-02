const RoundedButton = ({title}) => {
	return (
		<div className="bg-gradient-to-r from-color-1 to-color-2 flex justify-center p-2 rounded-full cursor-pointer">
			<span className="font-bold text-white">{ title }</span>
		</div>
	)
}

export default RoundedButton 