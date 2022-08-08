import Image from 'next/future/image';
import Head from 'next/head';
import React from 'react';
import Menu from '../../components/Menu';
import Link from 'next/link';
import bannerEmpy from '../../public/images/banner-empy.png';
import researchUnoEmpy from '../../public/images/researchUnoEmpy.png';
import researchDosEmpy from '../../public/images/researchDosEmpy.png';
import solucion1 from '../../public/images/soluciones-empy/solucion1.png';
import solucion2 from '../../public/images/soluciones-empy/solucion2.png';
import solucion3 from '../../public/images/soluciones-empy/solucion3.png';
import solucion4 from '../../public/images/soluciones-empy/solucion4.png';

const index = () => {
	return (
		<div
			className="text-oscuro font-sofiaPro"
			style={{ letterSpacing: '0.5px', lineHeight: '1.8' }}>
			<Head>
				<title>Liliana Palomino</title>
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
							<li>Empy</li>
						</ul>
					</div>
				</div>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-8 mt-5 md:mt-20">
							<h1 className="mx-auto font-bold text-3xl">Empy</h1>
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
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-6 mt-20">
							<h1 className="font-extrabold mb-4">
								Proyect Vision
							</h1>
							<p>
								Empy es una plataforma web que busca facilitar
								el acceso a terapias psicológicas. El objetivo
								es brindar herramientas tanto a consultantes y
								psicológos que faciliten el camino hacia una
								mejor salud mental.
							</p>
						</div>
						<div className="col-span-12 md:col-span-2 mt-5 md:mt-20">
							<h1 className="font-extrabold mb-4">Roles</h1>
							<ul>
								<li>Interation Designer</li>
								<li>Visual Designer</li>
							</ul>
						</div>
						<div className="col-span-12 md:col-span-2 mt-5 md:mt-20">
							<h1 className="font-extrabold mb-4">
								Contribución
							</h1>
							<ul>
								<li>Emphaty an affinity map</li>
								<li>Low-fidelity prototype</li>
								<li>Design System</li>
								<li>High-fidelity prototype</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="bg-fondoClaro/20 mt-5 md:mt-20 w-full">
					<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base ">
						<div className="grid grid-cols-12 gap-x-6">
							<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10 my-20 flex flex-col px-0 md:px-40">
								<h1 className="font-extrabold mb-4">
									Desafíos
								</h1>

								<ul className="list-disc ml-4">
									<li className="mb-2">
										Si bien existe creciente interés en la
										salud mental, no existen plataformas en
										el mercado de habla hispana que sean
										competentes, a nivel de funcionalidades,
										con otros plataformas en idioma inglés.
									</li>
									<li>
										La experiencia de las plataformas
										actuales puede mejorarse para disminuir
										la brecha que hace que las personas no
										accedan o abandonen la terapia
										psicológica, aún reconociendo los
										beneficios de esta.
									</li>
								</ul>
								<h1 className="font-extrabold mb-4 mt-10">
									Metas
								</h1>
								<ul className="list-disc ml-4">
									<li className="mb-2">
										Crear una experiencia confiable y
										amigable para terapeutas y consultantes.
									</li>
									<li className="mb-2">
										Administrar herramientas que faciliten
										el inicio y desarrollo de las terapias
										virtuales o presenciales.
									</li>
									<li className="mb-2">
										Ser una plataforma aliada del personal
										de ayuda psicológica.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="container mx-auto px-8 text-oscuro font-medium font-sofiaPro text-base ">
					<div className="grid grid-cols-12 gap-x-6">
						<div className="col-start-1 md:col-start-2 col-span-12 md:col-span-10 mt-20 flex flex-col px-0 md:px-40">
							<h1 className="font-extrabold mb-11 text-center text-4xl">
								Research
							</h1>
							<p className="mb-2">
								La plataforma esta pensada en personas que
								reconozcan la importancia de cuidar su salud
								mental, y que hayan pensado o llevado a cabo un
								proceso de terapia psicológica. Explorando este
								perfil pudimos definir nuestro user persona y se
								realizaron entrevistas a profundidad con jóvenes
								y adultos de entre 25 a 35 años, y psicólogos
								que trabajaron con terapias tanto virtuales como
								presenciales.
							</p>
							<p>
								Para aterrizar los puntos de dolor e identificar
								oportunidades de mejora;
								<span className="font-bold">
									organicé la información en un affinity map y
									posteriormente junto al equipo realizamos un
									costumer journey map.
								</span>
							</p>
							<div className="flex justify-center mt-7">
								<Image src={researchUnoEmpy} />
							</div>
							<p className="text-sm text-center">Affinity mapp</p>

							<p className="mt-7">
								<span className="font-bold">
									En esta etapa también fue muy importante el
									análisis de la competencia,
								</span>
								para identificar ymaximizar los beneficios del
								mercado y aliviar los dolores existentes al usar
								otras plataformas y asistentes de terapia
								psicológica.
							</p>
							<div className="flex justify-center mt-6">
								<Image src={researchDosEmpy} />
							</div>
							<p className="text-sm text-center">
								Análisis de competencia
							</p>
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
							<h1 className="font-extrabold mb-11 text-center text-4xl">
								Solución
							</h1>
							<p className="mb-2">
								<span className="font-bold">
									Realicé el diseño de un prototipo en baja
									fidelidad con las interacciones necesarias
									para realizar pruebas de usuario.
								</span>
								Validamos muchas funcionalidades que facilitaban
								el proceso de consulta a los psicólogos. Vimos
								que era necesario reducir el proceso de
								onboarding y también obtuvimos comentarios
								positivos de usuarios que sentían mayor
								confianza en agendar una cita. Finalmente,&nbsp;
								<span className="font-bold">
									realicé el sistema de diseño de la
									plataforma y el prototipo en alta fidelidad.
								</span>
							</p>
							<div className="flex justify-center items-center flex-col">
								<Image src={solucion1} className="mt-20" />
								<Image src={solucion2} className="mt-12" />
								<Image src={solucion3} className="mt-12" />
								<Image src={solucion4} className="mt-12" />
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default index;
