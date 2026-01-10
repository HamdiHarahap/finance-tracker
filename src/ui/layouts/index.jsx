const MainLayout = ({ children }) => {
	return (
		<section className="w-full min-h-screen bg-[#f4f4f9] flex justify-center py-12 px-4">
			<div className="w-full max-w-4xl">{children}</div>
		</section>
	);
};

export default MainLayout;
