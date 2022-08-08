import type { NextPage } from 'next';
import Head from 'next/head';
import HomeProjects from '../components/HomeProjects';
import Menu from '../components/Menu';

const Home: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>Liliana Palomino</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main
				className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base mb-24"
				style={{ letterSpacing: '0.5px', lineHeight: '1.8' }}>
				<div className="grid grid-cols-12 gap-x-6">
					<Menu />
					<div className="col-span-12 justify-center items-center mt-20">
						<p className="text-center w-full md:w-1/2 mx-auto">
							¡Hola! Soy{' '}
							<span className="font-bold">
								UX/UI Designer - Product Designer
							</span>
							, disfruto seguir cada etapa de la creación de
							productos digitales y aprender, día a día, junto al
							equipo que me acompaña.
						</p>
					</div>
					<HomeProjects />
				</div>
			</main>
		</div>
	);
};

export default Home;
