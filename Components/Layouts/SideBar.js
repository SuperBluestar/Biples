import ParallelButton from "../buttons/ParallelButton"

const SideBar = () => {
	return (
		<div className="bg-white h-screen rounded-md p-8">
			<p className="text-3xl font-bold"><span className="text-blue-600">BIP</span>LES</p>
			<hr className="my-4"></hr>
			<div className="">
				<ParallelButton title="Rules"></ParallelButton>
				<ParallelButton title="About"></ParallelButton>
			</div>
		</div>
	)
}
 
export default SideBar