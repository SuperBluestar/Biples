const GradientButton = ({title, className}) => {
	return (
		<div className={`bg-gradient-to-r from-color-1 to-color-2 flex justify-center p-2 cursor-pointer ${className}`}>
			<span className="font-bold text-white">{ title }</span>
		</div>
	)
}

export default GradientButton 