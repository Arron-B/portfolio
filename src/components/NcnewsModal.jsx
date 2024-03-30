function NcnewsModal({ isNcModalOpen, setIsNcModalOpen }) {
	return (
		<>
			<div
				className="backdrop h-[100vh] w-[100vw] fixed z-[99] bg-[rgba(0,0,0,0.5)] top-0"
				onClick={() => {
					setIsNcModalOpen(false);
				}}
			></div>
			<div className="h-[90dvh] w-[90vw] fixed bg-white z-[100] translate-x-[6%] -translate-y-[50%]">
				<button
					className="z-[100]"
					onClick={(e) => {
						e.preventDefault();
						setIsNcModalOpen(false);
					}}
				>
					close
				</button>
				<h1>Nc News</h1>
			</div>
		</>
	);
}

export default NcnewsModal;
