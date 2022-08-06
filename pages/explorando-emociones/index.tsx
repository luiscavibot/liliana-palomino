import Image from 'next/future/image';
import Head from 'next/head';
import React from 'react';
import HomeProjects from '../../components/HomeProjects';
import Menu from '../../components/Menu';
import bannerExplorandoEmcoiones from '../../public/images/banner-explorando-emociones.png';

const index = () => {
	return (
		<div className="">
			<Head>
				<title>Pamela Palomino</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div
					className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base"
					style={{ letterSpacing: '0.5px', lineHeight: '1.8' }}>
					<div className="grid grid-cols-12 gap-x-6">
						<Menu />
						<div className="col-start-2 col-span-5 mt-20">
							<h1 className="mx-auto font-bold text-3xl">
								Explorando emociones
							</h1>
						</div>
						<div className="col-span-5 mt-20">
							<p className="mx-auto text-base">
								Este proyecto es el resultado de una semana de
								trabajo, con un equipo multidisciplinario, bajo
								la metodología de un Design Sprint. Desarrollado
								en el marco del Festival de Innovación Peruana
								2021, resultó ganador del desafío “salud mental
								y física” y sigue evolucionando bajo el nombre
								de Empy.
							</p>
						</div>
					</div>
				</div>
				<Image
					src={bannerExplorandoEmcoiones}
					className="w-full mt-14"
				/>
				<div>
					<p className="mx-auto text-base">
						Este proyecto es el resultado de una semana de trabajo,
						con un equipo multidisciplinario, bajo la metodología de
						un Design Sprint. Desarrollado en el marco del Festival
						de Innovación Peruana 2021, resultó ganador del desafío
						“salud mental y física” y sigue evolucionando bajo el
						nombre de Empy.
					</p>
				</div>
			</main>
		</div>
	);
};

export default index;
