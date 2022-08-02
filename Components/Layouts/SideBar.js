import Button1 from "../buttons/Button1"

const SideBar = () => {
	return (
		<div className="bg-white h-screen rounded-md p-8">
			<div>
				<p className="text-3xl font-bold"><span className="text-blue-600">BIP</span>LES</p>
			</div>
			<hr className="my-4"></hr>
			<div className="">
				<Button1 title="Rules"></Button1>
				<Button1 title="About"></Button1>
			</div>
		</div>
	)
}

export default SideBar