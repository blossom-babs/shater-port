import About from '../components/About';
// import NowPlaying from '../components/NowPlaying';


const page = () => {
	
	return (
		<>
		    <div className="blur-overlay" />
			{/* <div className="pt-40 responsive">
			<NowPlaying/>
			</div> */}
			<About/>
		</>
	);
};

export default page;
