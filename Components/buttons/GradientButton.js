const GradientButton = ({title, className, className_text}) => {
	return (
		<div className={`flex justify-center p-2 cursor-pointer ${className}`}>
			<span className={`font-bold text-white ${className_text}`}>{ title }</span>
		</div>
	)
}

export default GradientButton 