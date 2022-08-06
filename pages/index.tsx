import type { NextPage } from 'next';
import Head from 'next/head';
import HomeProjects from '../components/HomeProjects';
import Menu from '../components/Menu';

const Home: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>Pamela Palomino</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main
				className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base"
				style={{ letterSpacing: '0.5px', lineHeight: '1.8' }}>
				<div className="grid grid-cols-12 gap-x-6">
					<Menu />
					<div className="col-span-12 justify-center items-center mt-20">
						<p className="text-center w-1/2 mx-auto">
							I am an Audiovisual Communicator,{' '}
							<span className="font-bold">
								passionate about creating digital products
							</span>
							. I have more than 4 years working in web pages and
							applications design. Thank for look my work!
						</p>
					</div>
					<HomeProjects />
				</div>
			</main>
		</div>
	);
};

export default Home;
