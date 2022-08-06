import type { NextPage } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import CustomButton from '../../components/CustomButton';
import Menu from '../../components/Menu';
import fotoPersonal from '../../public/images/fotoPersonal.png';

const Home: NextPage = () => {
	return (
		<div
			className="text-oscuro font-sofiaPro"
			style={{ letterSpacing: '0.5px', lineHeight: '1.8' }}>
			<Head>
				<title>Pamela Palomino</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main
				className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base mb-24"
				style={{ letterSpacing: '0.5px', lineHeight: '1.8' }}>
				<div className="grid grid-cols-12 gap-x-6">
					<Menu />
					<div className="col-start-1 md:col-start-3 col-span-12 md:col-span-2 mt-20 px-0 md:px-5 md:block flex flex-col items-center">
						<Image src={fotoPersonal} quality={100} />
						<p className="font-bold text-xs mt-2">
							lilyevantter@gmail.com
						</p>
					</div>
					<div className="col-span-12 md:col-span-6 col-start-1 md:col-start-5 justify-center items-center mt-10 md:mt-20">
						<p className="font-bold text-lg mb-2">
							¡Hola! soy Liliana, actualmente me desempeño como
							Product Designer, y tengo 4 años trabajando en el
							mundo de la creación de productos digitales.{' '}
						</p>
						<p>
							Durante este tiempo he desarrollado investigaciones
							de usuarios, ideado funcionalidades, construido
							prototipos y diseñado interfaces. He tenido la
							oportunidad de liderar equipos de diseño y trabajar
							de manera muy cercana con equipos de desarrollo,
							pudiendo generar aportes significativos con una
							visión conjunta. Me encanta aprender, busco
							constantemente capacitarme en nuevas tecnologías,
							herramientas de diseño y metodologías; y obtener
							mayores conocimientos acerca de roles existentes en
							el mundo de TI.
						</p>
					</div>
					{/* <div className="col-span-6 col-start-5 justify-center items-center mt-20">
						<h1 className="font-bold text-lg">UX Skillset</h1>
						<ul>
							<li className="">User Flow</li>
						</ul>
					</div> */}
					<div className="col-span-12 md:col-span-6 col-start-1 md:col-start-5 justify-center items-center mt-8">
						<CustomButton
							link=""
							enlace="/curriculum.pdf"
							text="Descargar CV completo"
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
