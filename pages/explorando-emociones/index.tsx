import Image from 'next/future/image';
import Head from 'next/head';
import React from 'react';
import Menu from '../../components/Menu';
import Link from 'next/link';
import bannerEmpy from '../../public/images/banner-empy.png';
import solucion1 from '../../public/images/resultados-explorando/resultados1.png';
import solucion2 from '../../public/images/resultados-explorando/resultados2.png';

const index = () => {
	return (
		<div
			className="text-oscuro font-sofiaPro"
			style={{ letterSpacing: '0.5px', lineHeight: '1.8' }}>
			<Head>
				<title>Pamela Palomino</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="mb-12">
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base">
					<div className="grid grid-cols-12 gap-x-6">
						<Menu />
						<ul className="px-0 md:px-11 mt-16 gap-2 col-span-full flex">
							<Link href="/">
								<a>
									<li className="text-morado">Inicio</li>
								</a>
							</Link>
							<span>&gt;</span>
							<li>Explorando emociones</li>
						</ul>
					</div>
				</div>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-5 mt-5 md:mt-20">
							<h1 className="mx-auto font-bold text-3xl">
								Explorando emociones
							</h1>
						</div>
						<div className="col-span-12 md:col-span-5 mt-20">
							<p className="">
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
					src={bannerEmpy}
					className="w-full mt-14"
					quality={100}
					priority={true}
				/>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-4 mt-20">
							<h1 className="font-extrabold mb-4">
								Proyect Vision
							</h1>
							<p>
								Explorando emociones es una plataforma web que
								busca ayudar a adolescentes, en los últimos años
								de su etapa escolar, a expresar sus emociones y
								experiencias a través de una comunidad formada
								por los propios estudiantes, con respaldo de
								psicólogos y tutores. Se busca nutrir su
								inteligencia emocional para generar colegios más
								seguros y libres de violencia, a través de un
								espacio de expresión lleno de empatía.
							</p>
						</div>
						<div className="col-span-12 md:col-span-2 mt-5 md:mt-20">
							<h1 className="font-extrabold mb-4">Roles</h1>
							<ul>
								<li>Ux Designer</li>
								<li>Visual Designer</li>
							</ul>
						</div>
						<div className="col-span-12 md:col-span-2 mt-5 md:mt-20">
							<h1 className="font-extrabold mb-4">
								Contribución
							</h1>
							<ul>
								<li>User Interview</li>
								<li>User Persona</li>
								<li>Ideation</li>
								<li>User Jorney Mapping</li>
								<li>Low-fidelity prototype</li>
								<li>High-fidelity prototype</li>
								<li>Interaction design</li>
							</ul>
						</div>
						<div className="col-span-12 md:col-span-1 mt-5 md:mt-20">
							<h1 className="font-extrabold mb-4">Tools</h1>
							<ul>
								<li>Miro</li>
								<li>Figma</li>
							</ul>
						</div>
						<div className="col-span-12 md:col-span-1 mt-5 md:mt-20">
							<h1 className="font-extrabold mb-4">Duración</h1>
							<ul>
								<li>1 semana</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="bg-fondoClaro/20 mt-5 md:mt-20">
					<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base ">
						<div className="grid grid-cols-12 gap-x-6">
							<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10 my-20 flex flex-col px-0 md:px-40">
								<p className=" mb-4">
									<span className="font-extrabold">
										Explorando emociones fue un proyecto muy
										retador, que me permitió vivir un design
										sprint y reforzar el uso de cada
										artefacto de UX.
									</span>
								</p>
								<p className="mb-4">
									Si bien estuve involucrada durante todo el
									proceso; realizando entrevistas, definiendo
									el user persona, generando soluciones, etc.
									Me destaqué asumiendo el diseño visual y de
									interacción, realicé los prototipos
									iniciales y los que finalmente presentemos
									en el pitching al final del concurso.
								</p>
								<p>
									El gráfico a continuación es la sintesis que
									realicé con las prinicipales pantallas de la
									aplicación, se puede observar el flujo del
									usuario y sus principales acciones; así como
									los sentimientos y pensamientos de los
									usuarios con quienes realizamos las pruebas
									de usabilidad.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base ">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10 mt-20 flex flex-col px-0 md:px-40">
							<h1 className="font-extrabold mb-11 text-center text-4xl">
								Ideación
							</h1>
							<p>
								La información recopilada nos ayudó a definir el
								espiritu y funcionalidades de nuestra
								palataforma. Para llegar a este punto trabajamos
								en sprints de diseño que nos permitieron
								realizar nuestros primeros bocetos.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10 mt-20 flex flex-col px-0 md:px-40">
							<div className="flex justify-center items-center flex-col">
								<Image
									src={solucion1}
									className="mt-5 md:mt-20"
								/>
								<Image
									src={solucion2}
									className="mt-5 md:mt-20"
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default index;
